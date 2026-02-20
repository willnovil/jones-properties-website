"use client";

import { useState } from "react";
import type { AdminPhotoMetadata } from "../../lib/blob-storage";

interface Props {
  photos: AdminPhotoMetadata[];
  propertyId: string;
  onUpdate: () => void;
}

export default function AdminPhotoGrid({ photos, propertyId, onUpdate }: Props) {
  const [deleting, setDeleting] = useState<string | null>(null);
  const [updatingPrimary, setUpdatingPrimary] = useState(false);

  async function handleDelete(url: string) {
    if (!confirm("Delete this photo?")) return;

    setDeleting(url);
    try {
      await fetch(
        `/api/admin/photos/${encodeURIComponent(url)}?propertyId=${propertyId}`,
        { method: "DELETE" }
      );
      onUpdate();
    } catch {
      alert("Failed to delete photo");
    } finally {
      setDeleting(null);
    }
  }

  async function handleSetPrimary(url: string) {
    setUpdatingPrimary(true);
    try {
      await fetch("/api/admin/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "setPrimary", propertyId, url }),
      });
      onUpdate();
    } catch {
      alert("Failed to update primary photo");
    } finally {
      setUpdatingPrimary(false);
    }
  }

  async function handleUpdateCaption(url: string, caption: string) {
    try {
      await fetch("/api/admin/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "updateCaption", propertyId, url, caption }),
      });
    } catch {
      // Silently fail for captions
    }
  }

  if (photos.length === 0) {
    return (
      <p className="text-gray-500 text-sm py-4">
        No admin photos yet. Upload some above.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.url}
          className={`relative group bg-white rounded-lg shadow-sm border overflow-hidden ${
            photo.isPrimary ? "ring-2 ring-blue-500" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.url}
            alt={photo.caption || photo.filename}
            className="w-full aspect-[4/3] object-cover"
          />

          {photo.isPrimary && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
              Primary
            </span>
          )}

          <div className="p-2">
            <input
              type="text"
              placeholder="Add caption..."
              defaultValue={photo.caption || ""}
              onBlur={(e) => handleUpdateCaption(photo.url, e.target.value)}
              className="w-full text-xs px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="flex gap-2 mt-2">
              {!photo.isPrimary && (
                <button
                  onClick={() => handleSetPrimary(photo.url)}
                  disabled={updatingPrimary}
                  className="text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50"
                >
                  Set Primary
                </button>
              )}
              <button
                onClick={() => handleDelete(photo.url)}
                disabled={deleting === photo.url}
                className="text-xs text-red-600 hover:text-red-800 disabled:opacity-50 ml-auto"
              >
                {deleting === photo.url ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
