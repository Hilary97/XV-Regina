"use client";

import { useState } from "react";
import Image from "next/image";

const familyMembers = [
  { name: "Irene López", relation: "Mi Madre", img: "/images/mama.jpg" },
  { name: "Rafael Sánchez", relation: "Mi Padre", img: "/images/papa.jpg" },
  { name: "Carmela Sánchez", relation: "Mi Hermana", img: "/images/hermana.jpg" },
  { name: "Borja Sánchez", relation: "Mi Hermano", img: "/images/hermano.jpg" },
];

export default function Family() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-white via-rose-50 to-white shadow-2xl py-12 px-6">
        {/* Decorative flowers */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🌸</div>
        <div className="absolute top-20 right-16 text-4xl opacity-20">💐</div>
        <div className="absolute bottom-10 left-20 text-5xl opacity-20">🌷</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20">🌹</div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-rose-300 mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Mis Personas Favoritas
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Gracias por acompañarme en este día tan especial
            </p>
            <div className="w-16 h-1 bg-rose-300 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {familyMembers.map((member, index) => (
              <div
                key={member.name}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-rose-200 via-rose-100 to-amber-100 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute -inset-3 bg-gradient-to-bl from-amber-100 via-rose-50 to-rose-200 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                  
                  {/* Image container */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mt-6 relative">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-rose-400 font-medium mt-1">
                    {member.relation}
                  </p>
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-rose-200 mx-auto mt-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Selected member detail modal */}
          {selectedMember !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
              <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={familyMembers[selectedMember].img}
                    alt={familyMembers[selectedMember].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-rose-800">
                  {familyMembers[selectedMember].name}
                </h3>
                <p className="text-rose-500 mt-2">
                  {familyMembers[selectedMember].relation}
                </p>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-6 text-gray-400 hover:text-rose-500 transition-colors"
                >
                  ✕ Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}