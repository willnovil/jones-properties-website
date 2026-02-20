import { NextRequest, NextResponse } from "next/server";
import { getPropertyById } from "../../../../lib/rentcafe";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }

  const listing = await getPropertyById(id);
  if (!listing) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }

  return NextResponse.json({
    propertyId: listing.property.propertyId,
    propertyName: listing.property.propertyName,
    address: listing.property.address,
    shopifyImages: listing.property.images.map((img) => ({
      url: img.url,
      caption: img.caption,
    })),
  });
}
