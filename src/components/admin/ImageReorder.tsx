"use client";

import { useState } from "react";

interface ImageOrderEntry {
  url: string;
  source: "shopify" | "admin";
}

interface Props {
  propertyId: string;
  initialOrder: ImageOrderEntry[];
  onSaved: () => void;
}

export default function ImageReorder({ propertyId, initialOrder, onSaved }: Props) {
  const [order, setOrder] = useState<ImageOrderEntry[]>(initialOrder);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  function moveUp(index: number) {
    if (index === 0) return;
    const next = [...order];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    setOrder(next);
    setDirty(true);
  }

  function moveDown(index: number) {
    if (index === order.length - 1) return;
    const next = [...order];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    setOrder(next);
    setDirty(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/image-order", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId, order }),
      });
      if (!res.ok) throw new Error("Save failed");
      setDirty(false);
      onSaved();
    } catch {
      alert("Failed to save image order. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (order.length === 0) {
    return (
      <p className="text-gray-500 text-sm py-4">
        No images available to reorder.
      </p>
    );
  }

  return (
    <div>
      <div className="space-y-2">
        {order.map((entry, i) => (
          <div
            key={entry.url}
            className={`flex items-center gap-3 p-2 rounded-lg border ${
              i === 0 ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-white"
            }`}
          >
            {/* Position number */}
            <span className="w-8 text-center text-sm font-mono text-gray-500">
              {i + 1}
            </span>

            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.url}
              alt={`Position ${i + 1}`}
              className="w-16 h-12 object-cover rounded flex-shrink-0"
            />

            {/* Badges */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  entry.source === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {entry.source === "admin" ? "Admin" : "Shopify"}
              </span>
              {i === 0 && (
                <span className="text-xs px-2 py-0.5 rounded bg-blue-600 text-white">
                  Primary
                </span>
              )}
              <span className="text-xs text-gray-400 truncate">
                {entry.url.split("/").pop()}
              </span>
            </div>

            {/* Arrow buttons */}
            <div className="flex flex-col gap-0.5 flex-shrink-0">
              <button
                onClick={() => moveUp(i)}
                disabled={i === 0}
                className="px-2 py-0.5 text-xs border rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move up"
              >
                &#9650;
              </button>
              <button
                onClick={() => moveDown(i)}
                disabled={i === order.length - 1}
                className="px-2 py-0.5 text-xs border rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move down"
              >
                &#9660;
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={!dirty || saving}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? "Saving..." : "Save Order"}
        </button>
        {dirty && (
          <span className="text-sm text-amber-600">Unsaved changes</span>
        )}
      </div>
    </div>
  );
}
