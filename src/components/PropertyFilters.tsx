"use client";

import { PropertyType } from "../lib/types";

interface PropertyFiltersProps {
  type: PropertyType;
  beds: string;
  priceRange: string;
  availableOnly: boolean;
  onTypeChange: (type: PropertyType) => void;
  onBedsChange: (beds: string) => void;
  onPriceChange: (range: string) => void;
  onAvailableChange: (available: boolean) => void;
}

export default function PropertyFilters({
  type,
  beds,
  priceRange,
  availableOnly,
  onTypeChange,
  onBedsChange,
  onPriceChange,
  onAvailableChange,
}: PropertyFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Type */}
        <div>
          <label className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => onTypeChange(e.target.value as PropertyType)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartments</option>
            <option value="house">Houses</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Bedrooms
          </label>
          <select
            value={beds}
            onChange={(e) => onBedsChange(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          >
            <option value="any">Any</option>
            <option value="0">Studio</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={(e) => onPriceChange(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          >
            <option value="any">Any Price</option>
            <option value="0-750">Under $750</option>
            <option value="750-1000">$750 - $1,000</option>
            <option value="1000-1500">$1,000 - $1,500</option>
            <option value="1500+">$1,500+</option>
          </select>
        </div>

        {/* Available Only */}
        <div className="flex items-center pt-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => onAvailableChange(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent/30"
            />
            <span className="font-body text-sm text-foreground/70">
              Available Only
            </span>
          </label>
        </div>

        {/* Reset */}
        <div>
          <button
            onClick={() => {
              onTypeChange("all");
              onBedsChange("any");
              onPriceChange("any");
              onAvailableChange(false);
            }}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 font-body text-sm text-foreground/60 hover:text-foreground hover:border-gray-300 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
