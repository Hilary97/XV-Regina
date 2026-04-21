"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-white via-rose-50 to-white shadow-2xl py-12 px-6">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-10">📸</div>
        <div className="absolute top-40 right-16 text-5xl opacity-10">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10">🌟</div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-rose-300 mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Mis Recuerdos
            </h2>
            <p className="text-gray-500 text-lg">
              Algunos momentos especiales
            </p>
            <div className="w-16 h-1 bg-rose-300 mx-auto mt-6 rounded-full" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {photos.map((i, index) => (
              <div
                key={i}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                } ${index === 3 ? "md:col-span-2" : ""}`}
                onClick={() => setSelectedPhoto(i)}
              >
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={`/images/photo${i}.jpg`}
                    alt={`Foto ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-3xl">🔍</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-700 px-8 py-3 rounded-full font-medium transition-colors">
              <span>📷</span>
              Ver todas las fotos
            </button>
          </div>
        </div>

        {/* Lightbox modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>

            <div
              className="relative w-full max-w-4xl aspect-square md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/photo${selectedPhoto}.jpg`}
                alt={`Foto ${selectedPhoto}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(selectedPhoto > 1 ? selectedPhoto - 1 : photos.length);
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(selectedPhoto < photos.length ? selectedPhoto + 1 : 1);
              }}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}