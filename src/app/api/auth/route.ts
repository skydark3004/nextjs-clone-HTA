import { NextRequest, NextResponse } from 'next/server';
import * as _ from 'lodash';
import axios from 'axios';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsServer } from '@/utils/cookie/server';

export async function GET() {
  return Response.json({ message: 'Hello from Next.js!' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const bodyLogin = _.pick(body, ['email', 'password', 'isKeepLogin']);
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
