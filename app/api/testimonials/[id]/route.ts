import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const testimonialsFile = path.join(dataDir, 'testimonials.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Initialize testimonials file if it doesn't exist
async function initTestimonialsFile() {
  try {
    await fs.access(testimonialsFile);
    const data = await fs.readFile(testimonialsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    // If file doesn't exist, create it with empty array
    await fs.writeFile(testimonialsFile, JSON.stringify([], null, 2));
    return [];
  }
}

// PATCH /api/testimonials/[id]
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await ensureDataDir();
    const testimonials = await initTestimonialsFile();
    
    const { id } = params;
    const updates = await request.json();
    
    const index = testimonials.findIndex((t: any) => t.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    testimonials[index] = { ...testimonials[index], ...updates };
    await fs.writeFile(testimonialsFile, JSON.stringify(testimonials, null, 2));
    
    return NextResponse.json(testimonials[index]);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

// DELETE /api/testimonials/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await ensureDataDir();
    const testimonials = await initTestimonialsFile();
    
    const { id } = params;
    const filteredTestimonials = testimonials.filter((t: any) => t.id !== id);
    
    if (filteredTestimonials.length === testimonials.length) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    await fs.writeFile(testimonialsFile, JSON.stringify(filteredTestimonials, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
} 