import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Allowed domains for redirects
const ALLOWED_HOSTS = [
    'complyvault.co',
    'www.complyvault.co',
    'app.complyvault.co'
]

// Canonical host (enforce www)
const CANONICAL_HOST = 'www.complyvault.co'

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl
    const url = request.nextUrl.clone()

    // 1. Block WordPress admin paths - return direct 404
    if (pathname === '/wp-admin' || pathname.startsWith('/wp-admin/') ||
        pathname === '/wp-login.php' || pathname === '/wp-login') {
        // Explicitly return 404 rather than rewriting
        return new NextResponse('Not Found', { status: 404 })
    }

    // 2. Check for open redirect vulnerabilities (GET requests only)
    // Only check GET requests to avoid interfering with legitimate POST forms
    if (request.method === 'GET') {
        const suspiciousParams = ['redirect', 'next', 'return', 'returnTo', 'redirect_uri']

        for (const param of suspiciousParams) {
            const value = searchParams.get(param)

            if (value) {
                // Check if it's a relative path (safe)
                if (value.startsWith('/') && !value.startsWith('//')) {
                    continue // Relative paths are safe
                }

                // Check if it's an absolute URL
                try {
                    const redirectUrl = new URL(value, request.url)
                    const hostname = redirectUrl.hostname.toLowerCase()

                    // Check if hostname is in allowed list
                    if (!ALLOWED_HOSTS.includes(hostname)) {
                        console.warn(`Blocked suspicious redirect parameter: ${param}=${value}`)

                        // Remove suspicious parameter and return 400
                        const response = NextResponse.json(
                            { error: 'Invalid redirect parameter' },
                            { status: 400 }
                        )
                        return response
                    }
                } catch (e) {
                    // Invalid URL format - block it
                    console.warn(`Blocked malformed redirect parameter: ${param}=${value}`)
                    const response = NextResponse.json(
                        { error: 'Invalid redirect parameter' },
                        { status: 400 }
                    )
                    return response
                }
            }
        }
    }

    // 3. Enforce canonical host (www.complyvault.co)
    const hostname = request.nextUrl.hostname.toLowerCase()

    // Only enforce in production (not localhost)
    if (hostname && !hostname.includes('localhost') && !hostname.includes('127.0.0.1')) {
        // Only redirect the naked domain to www, but exclude app subdomain
        if (hostname === 'complyvault.co') {
            url.host = CANONICAL_HOST
            
            // Let Vercel handle the protocol (HTTPS) automatically
            return NextResponse.redirect(url, 301)
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
