import { NextRequest, NextResponse } from "next/server";
import { deletePhoto } from "../../../../../lib/blob-storage";

// DELETE: Remove a photo by URL
export async function DELETE(
  request: NextRequest,
  { params }: { params: { url: string } }
) {
  const url = decodeURIComponent(params.url);
  const propertyId = request.nextUrl.searchParams.get("propertyId");

  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  if (!url) {
    return NextResponse.json({ error: "url required" }, { status: 400 });
  }

  try {
    await deletePhoto(propertyId, url);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete photo" }, { status: 500 });
  }
}
