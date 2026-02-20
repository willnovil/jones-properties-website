const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "";
const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

function getEncoder() {
  return new TextEncoder();
}

async function getCryptoKey(): Promise<CryptoKey> {
  const keyData = getEncoder().encode(SESSION_SECRET.padEnd(32, "0").slice(0, 32));
  return crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);
}

async function sign(payload: string): Promise<string> {
  const key = await getCryptoKey();
  const data = getEncoder().encode(payload);
  const sig = await crypto.subtle.sign("HMAC", key, data);
  const sigHex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `${payload}.${sigHex}`;
}

async function verify(token: string): Promise<string | null> {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return null;

  const payload = token.slice(0, lastDot);
  const sigHex = token.slice(lastDot + 1);

  const key = await getCryptoKey();
  const data = getEncoder().encode(payload);
  const sigBytes = new Uint8Array(sigHex.match(/.{2}/g)!.map((h) => parseInt(h, 16)));
  const valid = await crypto.subtle.verify("HMAC", key, sigBytes, data);

  if (!valid) return null;
  return payload;
}

export function verifyPassword(password: string): boolean {
  if (!ADMIN_PASSWORD) return false;
  return password === ADMIN_PASSWORD;
}

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  return sign(`admin:${expires}`);
}

export async function verifySessionToken(token: string): Promise<boolean> {
  const payload = await verify(token);
  if (!payload) return false;

  const [prefix, expiresStr] = payload.split(":");
  if (prefix !== "admin") return false;

  const expires = parseInt(expiresStr, 10);
  if (isNaN(expires) || Date.now() > expires) return false;

  return true;
}

export function getSessionCookieOptions() {
  return {
    name: COOKIE_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}

export { COOKIE_NAME };
