import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Try to connect to the database
    await prisma.$connect();
    
    // Try a simple query
    const count = await prisma.contactMessage.count();
    
    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      count
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
} 