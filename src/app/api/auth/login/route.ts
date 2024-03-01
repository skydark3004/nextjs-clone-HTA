import { NextRequest, NextResponse } from 'next/server';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsServer } from '@/utils/cookie/server';
import { getMeRequest, loginRequest } from '@/api-be/server';

export async function GET() {
  const token = getTokenByCookies();
  if (!token) return Response.json({ data: null });
  try {
    const res = await getMeRequest();
    return NextResponse.json({ data: { ...res, accessToken: token } });
  } catch (error: any) {
    return NextResponse.json(error, { status: error.statusCode });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const bodyLogin = { email: body.email, password: body.password, isKeepLogin: body.isKeepLogin };
  try {
    const res = await loginRequest(bodyLogin);

    CookieUtilsServer.add(APP_CONFIG.ENV.KEY_ACCESS_TOKEN, res.accessToken, {
      httpOnly: true,
      secure: !APP_CONFIG.IS_LOCAL,
      maxAge: res.expiresOfAcessToken,
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
const getTokenByCookies = () => {
  const token = CookieUtilsServer.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  return token?.value;
};
