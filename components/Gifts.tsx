"use client";

import { useState } from "react";

export default function Gifts() {
  const [showBankDetails, setShowBankDetails] = useState(false);

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-rose-50 via-white to-rose-50 shadow-2xl py-12 px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
          <div className="absolute top-10 left-10 text-5xl opacity-15">🎁</div>
          <div className="absolute top-40 right-16 text-4xl opacity-15">💝</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-15">🎀</div>
          <div className="absolute bottom-40 right-10 text-4xl opacity-15">🌹</div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-rose-300 mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Regalos
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Para mí tu presencia es el mejor regalo, pero si deseas obsequiarme algo
            </p>
            <div className="w-16 h-1 bg-rose-300 mx-auto mt-6 rounded-full" />
          </div>

          {/* Gift options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Amazon Card */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10" />
                <span className="text-6xl relative z-10">📦</span>
                <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
              </div>
              <div className="p-8 pt-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Lista de Amazon
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Encuentra el regalo perfecto
                </p>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 transform hover:scale-105"
                >
                  Ver lista
                </a>
              </div>
            </div>

            {/* Cash/Envelope Card */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10" />
                <span className="text-6xl relative z-10">💌</span>
                <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">💵</span>
                </div>
              </div>
              <div className="p-8 pt-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Sobre de Efectivo
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Tu apoyo es invaluable
                </p>
                <button
                  onClick={() => setShowBankDetails(!showBankDetails)}
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 transform hover:scale-105"
                >
                  {showBankDetails ? "Ocultar" : "Ver datos"}
                </button>

                {/* Bank details reveal */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showBankDetails ? "max-h-48 opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-amber-50 rounded-2xl p-6 text-left">
                    <p className="text-sm text-amber-700 font-medium mb-2">
                      💳 Datos bancarios:
                    </p>
                    <p className="text-sm text-gray-600">
                      Banco: <span className="font-medium">BBVA</span>
                      <br />
                      Cuenta: <span className="font-medium">0123 4567 8910 1112</span>
                      <br />
                      Titular: <span className="font-medium">Nombre Apellido</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center mt-12">
            <p className="text-rose-300 italic text-lg">
              ✨ Lo más importante es compartir este día contigo ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}