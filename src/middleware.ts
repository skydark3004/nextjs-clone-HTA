import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { APP_CONFIG } from './config/app.config';

const PUBLIC_ROUTES: string[] = [];
const PRIVATE_ROUTES: string[] = ['/', '/context'];
const ROUTE_LOGIN = '/dang-nhap';
const ROUTE_HOME = '/';

export async function middleware(request: NextRequest) {
  const currentRoute = request.nextUrl.pathname;
  console.log('ROUTE AT MIDDLEWARE::', currentRoute);

  // login page
  if (isLoginPage(currentRoute)) {
    const isValid = await isValidToken();
    if (isValid) return redirectToHomePage(request);
  }

  // public route
  if (isPublicRoute(currentRoute)) {
    return NextResponse.next();
  }

  // private route
  if (isPrivateRoute(currentRoute)) {
    const isValid = await isValidToken();
    if (!isValid) return redirectToLoginPage(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
// /((?!api|_next/static|_next/image|favicon.ico).*)
// /((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)

async function isValidToken() {
  try {
    const token = getTokenByCookies();
    if (!token) return false;

    const verify = await jwtVerify(token, new TextEncoder().encode(APP_CONFIG.ENV.JWT_SECRET));
    return verify.payload;
  } catch (error) {
    return false;
  }
}

const isLoginPage = (route: string): boolean => route === ROUTE_LOGIN;

const getTokenByCookies = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  return token?.value;
};

const isPrivateRoute = (route: string): boolean => PRIVATE_ROUTES.includes(route);
const isPublicRoute = (route: string): boolean => PUBLIC_ROUTES.includes(route);

const redirectToLoginPage = (request: NextRequest) => {
  const response = NextResponse.redirect(new URL(ROUTE_LOGIN, request.url));
  response.cookies.delete(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  return response;
};

const redirectToHomePage = (request: NextRequest) => {
  return NextResponse.redirect(new URL(ROUTE_HOME, request.url));
};
