import { NextRequest, NextResponse } from "next/server";
import {
  getPropertyImageOrder,
  savePropertyImageOrder,
  type ImageOrderEntry,
} from "../../../../lib/blob-storage";

export const dynamic = "force-dynamic";

// GET ?propertyId=X — returns saved image order (or null)
export async function GET(request: NextRequest) {
  const propertyId = request.nextUrl.searchParams.get("propertyId");
  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  try {
    const order = await getPropertyImageOrder(propertyId);
    return NextResponse.json({ order });
  } catch (err) {
    console.error("Failed to get image order:", err);
    return NextResponse.json({ order: null });
  }
}

// POST { propertyId, order } — saves new image order
export async function POST(request: NextRequest) {
  try {
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
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Failed to save image order:", message, err);
    return NextResponse.json(
      { error: `Failed to save: ${message}` },
      { status: 500 }
    );
  }
}
