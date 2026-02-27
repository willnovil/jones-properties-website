"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import AdminPhotoUploader from "../../../../components/admin/AdminPhotoUploader";
import AdminPhotoGrid from "../../../../components/admin/AdminPhotoGrid";
import ImageReorder from "../../../../components/admin/ImageReorder";
import type { AdminPhotoMetadata } from "../../../../lib/blob-storage";

interface ImageWithSource {
  url: string;
  caption?: string;
  source: "shopify" | "admin";
}

interface PropertyInfo {
  propertyId: string;
  propertyName: string;
  address: string;
  shopifyImages: ImageWithSource[];
}

interface ImageOrderEntry {
  url: string;
  source: "shopify" | "admin";
}

export default function PropertyPhotoManager({
  params,
}: {
  params: { id: string };
}) {
  const [property, setProperty] = useState<PropertyInfo | null>(null);
  const [adminPhotos, setAdminPhotos] = useState<AdminPhotoMetadata[]>([]);
  const [imageOrder, setImageOrder] = useState<ImageOrderEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Build the unified image list from all sources + saved order
  const buildUnifiedOrder = useCallback(
    (
      shopifyImages: ImageWithSource[],
      photos: AdminPhotoMetadata[],
      savedOrder: ImageOrderEntry[] | null
    ): ImageOrderEntry[] => {
      // Collect all current image URLs with their sources
      const allImages: ImageOrderEntry[] = [
        ...shopifyImages.map((img) => ({
          url: img.url,
          source: (img.source || "shopify") as "shopify" | "admin",
        })),
        ...photos.map((p) => ({
          url: p.url,
          source: "admin" as const,
        })),
      ];

      if (!savedOrder || savedOrder.length === 0) {
        return allImages;
      }

      // Use saved order: keep entries that still exist, append new ones
      const currentUrls = new Set(allImages.map((img) => img.url));
      const orderedUrls = new Set<string>();

      const result: ImageOrderEntry[] = [];

      // Add saved-order entries that still exist
      for (const entry of savedOrder) {
        if (currentUrls.has(entry.url)) {
          result.push(entry);
          orderedUrls.add(entry.url);
        }
      }

      // Append any new images not in saved order
      for (const img of allImages) {
        if (!orderedUrls.has(img.url)) {
          result.push(img);
        }
      }

      return result;
    },
    []
  );

  const loadPhotos = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/photos?propertyId=${params.id}`);
      const data = await res.json();
      return (data.photos || []) as AdminPhotoMetadata[];
    } catch {
      return [];
    }
  }, [params.id]);

  const loadSavedOrder = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/image-order?propertyId=${params.id}`);
      const data = await res.json();
      return (data.order || null) as ImageOrderEntry[] | null;
    } catch {
      return null;
    }
  }, [params.id]);

  const refreshAll = useCallback(async () => {
    const [photos, savedOrder] = await Promise.all([
      loadPhotos(),
      loadSavedOrder(),
    ]);
    setAdminPhotos(photos);

    if (property) {
      const unified = buildUnifiedOrder(property.shopifyImages, photos, savedOrder);
      setImageOrder(unified);
    }
  }, [loadPhotos, loadSavedOrder, property, buildUnifiedOrder]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [propRes, photos, savedOrder] = await Promise.all([
          fetch(`/api/admin/property-info?id=${params.id}`),
          loadPhotos(),
          loadSavedOrder(),
        ]);

        let propData: PropertyInfo | null = null;
        if (propRes.ok) {
          propData = await propRes.json();
          setProperty(propData);
        }

        setAdminPhotos(photos);

        // Build unified order
        const shopifyImages = propData?.shopifyImages || [];
        const unified = buildUnifiedOrder(shopifyImages, photos, savedOrder);
        setImageOrder(unified);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id, loadPhotos, loadSavedOrder, buildUnifiedOrder]);

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

      {/* Image Order Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Image Order ({imageOrder.length})
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          The first image becomes the property thumbnail on the public site.
          Use the arrows to reorder, then click Save.
        </p>
        <ImageReorder
          propertyId={params.id}
          initialOrder={imageOrder}
          onSaved={refreshAll}
        />
      </section>

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
          onUploadComplete={refreshAll}
        />
      </section>

      {/* Admin Photo Grid */}
      <AdminPhotoGrid
        photos={adminPhotos}
        propertyId={params.id}
        onUpdate={refreshAll}
      />
    </div>
  );
}
