import { NextRequest, NextResponse } from "next/server";
import { uploadPhoto, listPhotos, setPrimaryPhoto, updateCaption } from "../../../../lib/blob-storage";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

// GET: List photos for a property
export async function GET(request: NextRequest) {
  const propertyId = request.nextUrl.searchParams.get("propertyId");
  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  const photos = await listPhotos(propertyId);
  return NextResponse.json({ photos });
}

// POST: Upload photo or update metadata
export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  // Handle JSON requests (set primary, update caption)
  if (contentType.includes("application/json")) {
    const body = await request.json();
    const { action, propertyId, url, caption } = body;

    if (!propertyId || !url) {
      return NextResponse.json({ error: "propertyId and url required" }, { status: 400 });
    }

    if (action === "setPrimary") {
      await setPrimaryPhoto(propertyId, url);
      return NextResponse.json({ success: true });
    }

    if (action === "updateCaption") {
      await updateCaption(propertyId, url, caption || "");
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  // Handle multipart uploads
  const formData = await request.formData();
  const propertyId = formData.get("propertyId") as string;
  const files = formData.getAll("files") as File[];

  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  if (files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  const results = [];
  const errors = [];

  for (const file of files) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      errors.push(`${file.name}: only JPEG, PNG, and WebP are allowed`);
      continue;
    }

    if (file.size > MAX_FILE_SIZE) {
      errors.push(`${file.name}: file too large (max 5MB)`);
      continue;
    }

    try {
      const photo = await uploadPhoto(propertyId, file);
      results.push(photo);
    } catch {
      errors.push(`${file.name}: upload failed`);
    }
  }

  return NextResponse.json({ photos: results, errors });
}
