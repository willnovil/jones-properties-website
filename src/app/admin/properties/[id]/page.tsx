"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import AdminPhotoUploader from "../../../../components/admin/AdminPhotoUploader";
import AdminPhotoGrid from "../../../../components/admin/AdminPhotoGrid";
import type { AdminPhotoMetadata } from "../../../../lib/blob-storage";

interface PropertyInfo {
  propertyId: string;
  propertyName: string;
  address: string;
  shopifyImages: { url: string; caption?: string }[];
}

export default function PropertyPhotoManager({
  params,
}: {
  params: { id: string };
}) {
  const [property, setProperty] = useState<PropertyInfo | null>(null);
  const [adminPhotos, setAdminPhotos] = useState<AdminPhotoMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPhotos = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/photos?propertyId=${params.id}`);
      const data = await res.json();
      setAdminPhotos(data.photos || []);
    } catch {
      // ignore
    }
  }, [params.id]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        // Fetch property info from the public listings API
        const propRes = await fetch(`/api/admin/property-info?id=${params.id}`);
        if (propRes.ok) {
          const data = await propRes.json();
          setProperty(data);
        }
        await loadPhotos();
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id, loadPhotos]);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <Link
        href="/admin"
        className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; Back to properties
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {property?.propertyName || property?.address || `Property ${params.id}`}
      </h1>
      {property?.address && (
        <p className="text-gray-500 mb-6">{property.address}</p>
      )}

      {/* Shopify Images (read-only) */}
      {property?.shopifyImages && property.shopifyImages.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Shopify Images ({property.shopifyImages.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.shopifyImages.map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.caption || `Photo ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-2">
                  <p className="text-xs text-gray-400">
                    Shopify (read-only)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Admin Photo Upload */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Admin Photos ({adminPhotos.length})
        </h2>
        <AdminPhotoUploader
          propertyId={params.id}
          onUploadComplete={loadPhotos}
        />
      </section>

      {/* Admin Photo Grid */}
      <AdminPhotoGrid
        photos={adminPhotos}
        propertyId={params.id}
        onUpdate={loadPhotos}
      />
    </div>
  );
}
