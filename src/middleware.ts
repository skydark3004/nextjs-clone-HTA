import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();

  console.log(1111);
  console.log('ROUTE::', request.nextUrl.pathname);
  console.log('COOKIE::', cookieStore.get('accessToken'));
  const token = cookieStore.get('accessToken');

  if (token?.value === '123' && request.nextUrl.pathname !== '/dang-nhap') {
    return NextResponse.redirect(new URL('/dang-nhap', request.url));
  }
  //console.log('AUTH::', request.auth);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
