import { NextResponse } from 'next/server'

// Return 404 for wp-login.php attempts
export async function GET() {
  return new NextResponse('Not Found', { status: 404 })
}

export async function POST() {
  return new NextResponse('Not Found', { status: 404 })
}
