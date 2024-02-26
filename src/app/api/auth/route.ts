import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsServer } from '@/utils/cookie/server';
import { jwtVerify } from 'jose';

export async function GET() {
  const token = await getDecodeToken();
  return Response.json({ payload: token ? token : null });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const bodyLogin = { email: body.email, password: body.password, isKeepLogin: body.isKeepLogin };
  try {
    const res = await axios.post(`${APP_CONFIG.ENV.BASE_URL}/api/v1/admin/auth/login`, bodyLogin);
    CookieUtilsServer.add(APP_CONFIG.ENV.KEY_ACCESS_TOKEN, res.data.accessToken, {
      httpOnly: true,
      secure: !APP_CONFIG.IS_LOCAL,
      maxAge: res.data.expiresOfAcessToken,
    });
    return NextResponse.json(res.data);
  } catch (error: any) {
    const responseError = error.response.data;
    return NextResponse.json(responseError, { status: 400 });
  }
}

async function getDecodeToken() {
  try {
    const token = getTokenByCookies();
    if (!token) return false;

    const verify = await jwtVerify(token, new TextEncoder().encode(APP_CONFIG.ENV.JWT_SECRET));
    return verify.payload;
  } catch (error) {
    return false;
  }
}

const getTokenByCookies = () => {
  const token = CookieUtilsServer.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  return token?.value;
};
