"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  propertyId: string;
  onUploadComplete: () => void;
}

export default function AdminPhotoUploader({ propertyId, onUploadComplete }: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files);
      if (fileArray.length === 0) return;

      setUploading(true);
      setProgress(`Uploading ${fileArray.length} file(s)...`);

      const formData = new FormData();
      formData.append("propertyId", propertyId);
      for (const file of fileArray) {
        formData.append("files", file);
      }

      try {
        const res = await fetch("/api/admin/photos", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.errors?.length > 0) {
          setProgress(`Done. Errors: ${data.errors.join(", ")}`);
        } else {
          setProgress(`Uploaded ${data.photos?.length || 0} photo(s)`);
        }

        onUploadComplete();
      } catch {
        setProgress("Upload failed. Please try again.");
      } finally {
        setUploading(false);
        setTimeout(() => setProgress(""), 3000);
      }
    },
    [propertyId, onUploadComplete]
  );

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      uploadFiles(e.dataTransfer.files);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      uploadFiles(e.target.files);
      e.target.value = "";
    }
  }

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          dragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="text-gray-500">
          <p className="text-lg mb-1">
            {uploading ? "Uploading..." : "Drop photos here or click to browse"}
          </p>
          <p className="text-sm">JPEG, PNG, or WebP. Max 5MB each.</p>
        </div>
      </div>

      {progress && (
        <p className="mt-2 text-sm text-gray-600">{progress}</p>
      )}
    </div>
  );
}
