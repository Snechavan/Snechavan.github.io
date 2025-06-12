import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

// GET /api/testimonials
export async function GET() {
  try {
    console.log('Fetching all testimonials...');
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    console.log(`Found ${testimonials.length} testimonials`);
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { message: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST /api/testimonials
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received testimonial data:', body);

    const { name, email, rating, comment } = body;

    if (!name || !email || !rating || !comment) {
      console.log('Missing required fields:', { name, email, rating, comment });
      return NextResponse.json(
        { error: 'Name, email, rating and comment are required' },
        { status: 400 }
      );
    }

    // Validate rating is a number between 1 and 5
    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      console.log('Invalid rating value:', rating);
      return NextResponse.json(
        { error: 'Rating must be a number between 1 and 5' },
        { status: 400 }
      );
    }

    // Store in database
    console.log('Creating testimonial in database...');
    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        email,
        rating: ratingNum,
        message: comment,
        status: 'pending'
      }
    });
    console.log('Successfully created testimonial:', testimonial);

    return NextResponse.json({ 
      success: true, 
      message: 'Testimonial submitted successfully and pending approval',
      data: testimonial 
    });
  } catch (error) {
    console.error('Error storing testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to store testimonial. Please try again later.' },
      { status: 500 }
    );
  }
}

// PATCH /api/testimonials
export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const { status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { message: 'Testimonial ID and status are required' },
        { status: 400 }
      );
    }

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json(
        { message: 'Invalid status value' },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.update({
      where: {
        id: id
      },
      data: {
        status: status
      }
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { message: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

// DELETE /api/testimonials
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'Testimonial ID is required' },
        { status: 400 }
      );
    }

    await prisma.testimonial.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { message: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
} 