import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Allowed domains for redirects
const ALLOWED_HOSTS = [
  'complyvault.co',
  'www.complyvault.co',
  'app.complyvault.co',
]

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // 1. Block WordPress admin paths - return direct 404
  if (
    pathname === '/wp-admin' ||
    pathname.startsWith('/wp-admin/') ||
    pathname === '/wp-login.php' ||
    pathname === '/wp-login'
  ) {
    return new NextResponse('Not Found', { status: 404 })
  }

  // 2. Check for open redirect vulnerabilities (GET requests only)
  if (request.method === 'GET') {
    const suspiciousParams = ['redirect', 'next', 'return', 'returnTo', 'redirect_uri']

    for (const param of suspiciousParams) {
      const value = searchParams.get(param)
      if (!value) continue

      // Allow only safe relative paths
      if (value.startsWith('/') && !value.startsWith('//')) continue

      // Otherwise, only allow absolute URLs to allowlisted hosts
      try {
        const redirectUrl = new URL(value, request.url)
        const hostname = redirectUrl.hostname.toLowerCase()

        if (!ALLOWED_HOSTS.includes(hostname)) {
          console.warn(`Blocked suspicious redirect parameter: ${param}=${value}`)
          return NextResponse.json({ error: 'Invalid redirect parameter' }, { status: 400 })
        }
      } catch {
        console.warn(`Blocked malformed redirect parameter: ${param}=${value}`)
        return NextResponse.json({ error: 'Invalid redirect parameter' }, { status: 400 })
      }
    }
  }

  return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
}
