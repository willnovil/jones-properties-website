import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "./lib/admin-auth";

// We can't import the full admin-auth in Edge middleware (it uses Node crypto),
// so we duplicate minimal HMAC verification here using Web Crypto (Edge-compatible).

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "";

async function verifyTokenEdge(token: string): Promise<boolean> {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return false;

  const payload = token.slice(0, lastDot);
  const sigHex = token.slice(lastDot + 1);

  try {
    const enc = new TextEncoder();
    const keyData = enc.encode(SESSION_SECRET.padEnd(32, "0").slice(0, 32));
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const data = enc.encode(payload);
    const sigBytes = new Uint8Array(sigHex.match(/.{2}/g)!.map((h) => parseInt(h, 16)));
    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, data);
    if (!valid) return false;

    const [prefix, expiresStr] = payload.split(":");
    if (prefix !== "admin") return false;
    const expires = parseInt(expiresStr, 10);
    if (isNaN(expires) || Date.now() > expires) return false;

    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes (except /admin/login)
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow login page and login API
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/login")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !(await verifyTokenEdge(token))) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
