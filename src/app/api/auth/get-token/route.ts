import { NextResponse } from 'next/server';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsServer } from '@/utils/cookie/server';

export async function GET() {
  const token = getTokenByCookies();
  if (!token) return Response.json({ token: null });
  return NextResponse.json({ token: token });
}

const getTokenByCookies = () => {
  const token = CookieUtilsServer.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  return token?.value;
};
