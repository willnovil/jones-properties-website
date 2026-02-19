"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyImage } from "../lib/types";

interface PropertyGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export default function PropertyGallery({ images, propertyName }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative w-full h-80 md:h-[480px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <svg className="w-20 h-20 text-primary/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <p className="font-body text-primary/30 text-sm">
            {propertyName} — Photos coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Main Image */}
      <div className="relative w-full h-80 md:h-[480px] bg-gray-100 rounded-lg overflow-hidden">
        {images.map((image, index) =>
          image.url ? (
            <Image
              key={image.url}
              src={image.url}
              alt={image.caption || propertyName}
              fill
              className={`object-cover transition-opacity duration-300 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, 66vw"
              priority={index === 0}
            />
          ) : null
        )}
        {!images[activeIndex]?.url && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <svg className="w-20 h-20 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Caption */}
        {images[activeIndex]?.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="font-body text-white text-sm">
              {images[activeIndex].caption}
            </p>
          </div>
        )}

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-body px-3 py-1 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                index === activeIndex
                  ? "border-accent"
                  : "border-transparent hover:border-accent/30"
              }`}
            >
              {image.url ? (
                <Image
                  src={`${image.url}${image.url.includes("?") ? "&" : "?"}width=200`}
                  alt={image.caption || `${propertyName} photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
