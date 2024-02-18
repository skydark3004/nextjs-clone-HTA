import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  return Response.json({ message: 'Hello from Next.js!' });
}

export async function POST(request: NextRequest) {
  const body = await request.json(); // res now contains body
  const cookieStore = cookies();
  cookieStore.set({
    name: 'tokenFromNext1',
    value: 'lee',
    httpOnly: false,
    path: '/',
    secure: false,
  });
  console.log(body);
  return NextResponse.json({ message: 'Hello from Next.js!' });
  // return response.json({ message: 'Hello from Next.js!' });
}
