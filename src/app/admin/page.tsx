import { getPropertyListings } from "../../lib/rentcafe";
import { getAllAdminPhotos } from "../../lib/blob-storage";
import AdminPropertyList from "../../components/admin/AdminPropertyList";
import type { PropertyImage } from "../../lib/types";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [listings, adminPhotos] = await Promise.all([
    getPropertyListings(),
    getAllAdminPhotos().catch(() => ({} as Record<string, PropertyImage[]>)),
  ]);

  const properties = listings.map((l) => ({
    propertyId: l.property.propertyId,
    propertyName: l.property.propertyName,
    address: l.property.address,
    city: l.property.city,
    type: l.property.type,
    imageCount: l.property.images.length,
    adminPhotoCount: (adminPhotos[l.property.propertyId] || []).length,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Properties</h1>
      <AdminPropertyList properties={properties} />
    </div>
  );
}
