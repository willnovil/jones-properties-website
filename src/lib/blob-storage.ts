import { put, list, del } from "@vercel/blob";
import type { PropertyImage } from "./types";

export interface AdminPhotoMetadata {
  propertyId: string;
  url: string;
  caption?: string;
  isPrimary: boolean;
  uploadedAt: string;
  filename: string;
}

export interface AllMetadata {
  [propertyId: string]: AdminPhotoMetadata[];
}

const METADATA_PATH = "admin-photos/_all-metadata.json";

// Upload a photo for a property
export async function uploadPhoto(
  propertyId: string,
  file: File
): Promise<AdminPhotoMetadata> {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const pathname = `admin-photos/${propertyId}/${timestamp}-${safeName}`;

  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
  });

  const photo: AdminPhotoMetadata = {
    propertyId,
    url: blob.url,
    isPrimary: false,
    uploadedAt: new Date().toISOString(),
    filename: file.name,
  };

  // Update global metadata
  const metadata = await getMetadata();
  if (!metadata[propertyId]) {
    metadata[propertyId] = [];
  }
  metadata[propertyId].push(photo);
  await saveMetadata(metadata);

  return photo;
}

// List photos for a property
export async function listPhotos(propertyId: string): Promise<AdminPhotoMetadata[]> {
  const metadata = await getMetadata();
  return metadata[propertyId] || [];
}

// Delete a photo
export async function deletePhoto(propertyId: string, url: string): Promise<void> {
  // Delete from blob storage
  await del(url);

  // Update metadata
  const metadata = await getMetadata();
  if (metadata[propertyId]) {
    metadata[propertyId] = metadata[propertyId].filter((p) => p.url !== url);
    if (metadata[propertyId].length === 0) {
      delete metadata[propertyId];
    }
  }
  await saveMetadata(metadata);
}

// Set a photo as primary
export async function setPrimaryPhoto(
  propertyId: string,
  url: string
): Promise<void> {
  const metadata = await getMetadata();
  if (!metadata[propertyId]) return;

  metadata[propertyId] = metadata[propertyId].map((p) => ({
    ...p,
    isPrimary: p.url === url,
  }));
  await saveMetadata(metadata);
}

// Update caption
export async function updateCaption(
  propertyId: string,
  url: string,
  caption: string
): Promise<void> {
  const metadata = await getMetadata();
  if (!metadata[propertyId]) return;

  metadata[propertyId] = metadata[propertyId].map((p) =>
    p.url === url ? { ...p, caption } : p
  );
  await saveMetadata(metadata);
}

// Get all admin photos as PropertyImage arrays, keyed by propertyId
export async function getAllAdminPhotos(): Promise<Record<string, PropertyImage[]>> {
  const metadata = await getMetadata();
  const result: Record<string, PropertyImage[]> = {};

  for (const [propertyId, photos] of Object.entries(metadata)) {
    result[propertyId] = photos.map((p) => ({
      url: p.url,
      caption: p.caption,
      isPrimary: p.isPrimary,
    }));
  }

  return result;
}

// Internal: Get the global metadata file
async function getMetadata(): Promise<AllMetadata> {
  try {
    const blobs = await list({ prefix: METADATA_PATH });
    if (blobs.blobs.length === 0) return {};

    const response = await fetch(blobs.blobs[0].url, { cache: "no-store" });
    if (!response.ok) return {};
    return (await response.json()) as AllMetadata;
  } catch {
    return {};
  }
}

// Internal: Save the global metadata file
async function saveMetadata(metadata: AllMetadata): Promise<void> {
  const json = JSON.stringify(metadata, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  await put(METADATA_PATH, blob, {
    access: "public",
    addRandomSuffix: false,
  });
}
