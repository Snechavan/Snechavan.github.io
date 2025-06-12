import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.has('isAdminAuthenticated');

    return NextResponse.json({ 
      isAuthenticated,
      message: isAuthenticated ? 'User is authenticated' : 'User is not authenticated'
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { 
        isAuthenticated: false,
        message: 'Error checking authentication status' 
      },
      { status: 500 }
    );
  }
} 