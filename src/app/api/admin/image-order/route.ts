import { NextRequest, NextResponse } from "next/server";
import {
  getPropertyImageOrder,
  savePropertyImageOrder,
  type ImageOrderEntry,
} from "../../../../lib/blob-storage";

// GET ?propertyId=X — returns saved image order (or null)
export async function GET(request: NextRequest) {
  const propertyId = request.nextUrl.searchParams.get("propertyId");
  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  const order = await getPropertyImageOrder(propertyId);
  return NextResponse.json({ order });
}

// PUT { propertyId, order } — saves new image order
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { propertyId, order } = body as {
    propertyId: string;
    order: ImageOrderEntry[];
  };

  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  if (!Array.isArray(order)) {
    return NextResponse.json({ error: "order must be an array" }, { status: 400 });
  }

  await savePropertyImageOrder(propertyId, order);
  return NextResponse.json({ success: true });
}
