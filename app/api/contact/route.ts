export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received form data:', body);

    // Ensure all fields are strings and trim them
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();

    // Log each field for debugging
    console.log('Processed fields:');
    console.log('Name:', name, 'Length:', name.length);
    console.log('Email:', email, 'Length:', email.length);
    console.log('Subject:', subject, 'Length:', subject.length);
    console.log('Message:', message, 'Length:', message.length);

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    if (!subject) {
      return NextResponse.json(
        { error: 'Subject is required' },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Store message in database
    console.log('Storing message in database...');
    console.log('Database URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    
    try {
      const contactMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          subject,
          message,
          status: 'unread',
        },
      });
      console.log('Message stored successfully:', contactMessage);

      return NextResponse.json(
        { message: 'Message sent successfully', data: contactMessage },
        { status: 201 }
      );
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to store message in database', details: dbError },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.', details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const status = searchParams.get('status');

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID and status are required' },
        { status: 400 }
      );
    }

    const message = await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
} 