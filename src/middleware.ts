import { NextResponse } from 'next/server';

// Middleware is a no-op. Language detection is handled by nested layouts + SetLang client component.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
