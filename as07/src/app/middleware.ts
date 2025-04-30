import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/en') || pathname.startsWith('/de')) {
    return NextResponse.next();
  }

  const preferredLocale = request.headers.get('accept-language')?.includes('de') ? 'de' : 'en';
  const newUrl = new URL(`/${preferredLocale}${pathname === '/' ? '' : pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
