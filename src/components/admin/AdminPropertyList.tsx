"use client";

import { useState } from "react";
import Link from "next/link";

interface PropertySummary {
  propertyId: string;
  propertyName: string;
  address: string;
  city: string;
  type: string;
  imageCount: number;
  adminPhotoCount: number;
}

export default function AdminPropertyList({
  properties,
}: {
  properties: PropertySummary[];
}) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = properties.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.propertyName.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "all" || p.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Types</option>
          <option value="apartment">Apartments</option>
          <option value="house">Houses</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} of {properties.length} properties
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <Link
            key={p.propertyId}
            href={`/admin/properties/${p.propertyId}`}
            className="block bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4"
          >
            <h3 className="font-medium text-gray-900 truncate">
              {p.propertyName || p.address}
            </h3>
            <p className="text-sm text-gray-500 truncate">{p.address}</p>
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
              <span className="inline-block px-2 py-0.5 bg-gray-100 rounded capitalize">
                {p.type}
              </span>
              <span>{p.imageCount} Shopify</span>
              {p.adminPhotoCount > 0 && (
                <span className="text-blue-600">{p.adminPhotoCount} admin</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
