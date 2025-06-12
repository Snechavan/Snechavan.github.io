import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for an admin route
  if (pathname.startsWith('/admin')) {
    // Get the auth token from cookies
    const token = request.cookies.get('auth_token')

    // If trying to access admin routes without auth
    if (!token && pathname !== '/admin') {
      const url = new URL('/admin', request.url)
      return NextResponse.redirect(url)
    }

    // If trying to access login page while authenticated
    if (token && pathname === '/admin') {
      const url = new URL('/admin/dashboard', request.url)
      return NextResponse.redirect(url)
    }

    // If trying to access dashboard without auth
    if (!token && pathname === '/admin/dashboard') {
      const url = new URL('/admin', request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/admin/:path*'
} 