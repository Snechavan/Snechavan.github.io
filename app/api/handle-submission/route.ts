import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize files if they don't exist
if (!fs.existsSync(TESTIMONIALS_FILE)) {
  fs.writeFileSync(TESTIMONIALS_FILE, '[]');
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, '[]');
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, submission } = data;

    if (type === 'testimonial') {
      const testimonials = JSON.parse(fs.readFileSync(TESTIMONIALS_FILE, 'utf-8'));
      testimonials.push({
        id: Date.now().toString(),
        name: submission.name || 'Anonymous',
        role: submission.role || 'Client',
        message: submission.message || '',
        rating: submission.rating || 5,
        created_at: new Date().toISOString()
      });
      fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));
    } else if (type === 'message') {
      const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
      messages.push({
        id: Date.now().toString(),
        name: submission.name || 'Anonymous',
        email: submission.email || 'No email provided',
        message: submission.message || '',
        created_at: new Date().toISOString()
      });
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling submission:', error);
    return NextResponse.json({ error: 'Failed to handle submission' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'testimonial') {
      const testimonials = JSON.parse(fs.readFileSync(TESTIMONIALS_FILE, 'utf-8'));
      return NextResponse.json(testimonials);
    } else if (type === 'message') {
      const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
      return NextResponse.json(messages);
    }

    return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json({ error: 'Missing type or id parameter' }, { status: 400 });
    }

    if (type === 'testimonial') {
      const testimonials = JSON.parse(fs.readFileSync(TESTIMONIALS_FILE, 'utf-8'));
      const updatedTestimonials = testimonials.filter((t: any) => t.id !== id);
      fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(updatedTestimonials, null, 2));
    } else if (type === 'message') {
      const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
      const updatedMessages = messages.filter((m: any) => m.id !== id);
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify(updatedMessages, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting data:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
} 