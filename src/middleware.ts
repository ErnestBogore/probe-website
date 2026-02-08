import { NextRequest, NextResponse } from 'next/server';

const LOCALE_REGEX = /^\/(?:free-tools|blog)\/(de|es|fr|it|ja|ko|pt|tr|zh|nl)(?:\/|$)/;

export function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(LOCALE_REGEX);
  if (match) {
    const locale = match[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-page-lang', locale);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set('Content-Language', locale);
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/free-tools/:locale(de|es|fr|it|ja|ko|pt|tr|zh)/:path*',
    '/blog/:locale(de|es|fr|it|ja|ko|nl|pt|tr|zh)/:path*',
  ],
};
