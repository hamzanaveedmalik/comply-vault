import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_HOSTS = ['complyvault.co', 'www.complyvault.co', 'app.complyvault.co']

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl

    // 1) Block WP admin paths
    if (
        pathname === '/wp-admin' ||
        pathname.startsWith('/wp-admin/') ||
        pathname === '/wp-login.php' ||
        pathname === '/wp-login'
    ) {
        const res = new NextResponse('Not Found', { status: 404 })
        res.headers.set('x-mw-ran', '1')
        return res
    }

    // 2) Open-redirect param hygiene (GET only)
    if (request.method === 'GET') {
        const suspiciousParams = ['redirect', 'next', 'return', 'returnTo', 'redirect_uri']

        for (const param of suspiciousParams) {
            const value = searchParams.get(param)
            if (!value) continue

            if (value.startsWith('/') && !value.startsWith('//')) continue

            try {
                const redirectUrl = new URL(value, request.url)
                const hostname = redirectUrl.hostname.toLowerCase()

                if (!ALLOWED_HOSTS.includes(hostname)) {
                    const res = NextResponse.json({ error: 'Invalid redirect parameter' }, { status: 400 })
                    res.headers.set('x-mw-ran', '1')
                    return res
                }
            } catch {
                const res = NextResponse.json({ error: 'Invalid redirect parameter' }, { status: 400 })
                res.headers.set('x-mw-ran', '1')
                return res
            }
        }
    }

    // ✅ Always stamp header on normal pass-through
    const res = NextResponse.next()
    res.headers.set('x-mw-ran', '1')
    return res
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
