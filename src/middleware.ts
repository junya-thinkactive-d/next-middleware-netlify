import type { NextRequest } from 'next/server';
import { MiddlewareRequest } from '@netlify/next';

import type { NextRequest as NetlifyNextRequest } from '@netlify/next';

export async function middleware(nextRequest: NextRequest) {
  const pathname = nextRequest.nextUrl.pathname;

  const middlewareRequest = new MiddlewareRequest(
    nextRequest as NetlifyNextRequest
  );

  if (pathname.startsWith('/static')) {
    const response = await middlewareRequest.next();

    const message = `This was a static page but has been transformed in ${nextRequest?.geo?.city},${nextRequest?.geo?.country} using @netlify/next middleware.ts`;

    response.replaceText('#message', message);

    return response;
  }
}
