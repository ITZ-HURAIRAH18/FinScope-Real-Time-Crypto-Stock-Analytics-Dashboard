import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/auth/login',
    },
  }
);

// Protect these routes - require authentication
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/analytics/:path*',
    '/watchlist/:path*',
    '/profile/:path*',
    '/api/watchlist/:path*',
    '/api/profile/:path*'
  ],
};
