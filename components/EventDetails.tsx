"use client";

import { useState } from "react";

export default function EventDetails() {
  const [activeTab, setActiveTab] = useState<"ceremonia" | "recepcion">("ceremonia");

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl overflow-hidden">
      {/* Background */}
      <div className="rounded-3xl bg-gradient-to-b from-rose-50 via-white to-rose-50 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-rose-100 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-100 rounded-full translate-x-24 translate-y-24 opacity-50" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-rose-300 rounded-full" />
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-rose-200 rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 py-12 px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-rose-800 mb-4">
            Dónde & Cuándo
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Los detalles de mi gran día
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("ceremonia")}
              className={`px-8 py-3 rounded-full font-medium shadow-lg transition-all ${
                activeTab === "ceremonia"
                  ? "bg-rose-500 text-white shadow-rose-200"
                  : "bg-white text-gray-600 hover:bg-rose-50"
              }`}
            >
              💒 Ceremonia
            </button>
            <button
              onClick={() => setActiveTab("recepcion")}
              className={`px-8 py-3 rounded-full font-medium shadow-lg transition-all ${
                activeTab === "recepcion"
                  ? "bg-rose-500 text-white shadow-rose-200"
                  : "bg-white text-gray-600 hover:bg-rose-50"
              }`}
            >
              🥂 Recepción
            </button>
          </div>

          {/* Content Cards */}
          <div className="flex justify-center">
            {activeTab === "ceremonia" ? (
              <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl">⛪</span>
                </div>
                <h3 className="text-2xl font-serif text-center text-rose-800 mb-4">
                  Ceremonia Religiosa
                </h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm text-rose-400 uppercase tracking-wider font-medium">
                      Lugar
                    </p>
                    <p className="text-xl text-gray-800 font-medium">
                      Templo La Divina Providencia
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-rose-400 uppercase tracking-wider font-medium">
                      Fecha
                    </p>
                    <p className="text-lg text-gray-600">13 de Junio de 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-rose-400 uppercase tracking-wider font-medium">
                      Hora
                    </p>
                    <p className="text-lg text-gray-600">5:00 pm</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-rose-100">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ceremonia+Regina+Sarahi&dates=20260613T180000Z/20260613T190000Z&details=Ceremonia+Religiosa+-+Templo+La+Divina+Providencia&location=Templo+La+Divina+Providencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-rose-100 hover:bg-rose-200 text-rose-700 py-3 rounded-xl font-medium transition-colors"
                  >
                    📅 Agendar en Google Calendar
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🎊</span>
                </div>
                <h3 className="text-2xl font-serif text-center text-rose-800 mb-4">
                  Recepción
                </h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm text-amber-500 uppercase tracking-wider font-medium">
                      Lugar
                    </p>
                    <p className="text-xl text-gray-800 font-medium">
                      Bodega de Juan
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-amber-500 uppercase tracking-wider font-medium">
                      Fecha
                    </p>
                    <p className="text-lg text-gray-600">13 de Junio de 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-amber-500 uppercase tracking-wider font-medium">
                      Hora
                    </p>
                    <p className="text-lg text-gray-600">"Saliendo de misa"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

