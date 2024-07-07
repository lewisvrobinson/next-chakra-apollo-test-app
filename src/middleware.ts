import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { SESSION_COOKIE_NAME } from '@/constansts';

export function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME);

  // Redirect to login page if the user is not authenticated
  if (!session && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)'
    },
  ],
}
