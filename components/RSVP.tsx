"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function RSVP() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);

  const phoneNumber = "3313329960"; // Cambia este número

  const handleConfirm = () => {
    if (!name.trim()) {
      alert("Por favor ingresa tu nombre");
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = encodeURIComponent(
      `¡Hola! Quiero confirmar mi asistencia a los XV de Regina Sarahi.\n\n` +
        `Nombre: ${name}\n` +
        `Número de personas: ${guests}\n\n` +
        `¡Gracias!`,
    );

    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, "_blank");
  };

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-rose-100 via-rose-50 to-rose-100 shadow-2xl py-12 px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-rose-200 rounded-full -translate-x-20 -translate-y-20 opacity-50" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-rose-200 rounded-full translate-x-30 translate-y-30 opacity-50" />
        <div className="absolute top-1/4 right-10 w-4 h-4 bg-rose-400 rounded-full" />
        <div className="absolute bottom-1/4 left-10 w-3 h-3 bg-rose-300 rounded-full" />

        <div className="max-w-xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-rose-400 mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Confirmar Asistencia
            </h2>
            <p className="text-gray-500 text-lg">
              Espero que puedas venir a compartir conmigo este día inolvidable
            </p>
            <div className="w-16 h-1 bg-rose-400 mx-auto mt-6 rounded-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-8">
            {/* Name input */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
                Nombre completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none transition-colors text-lg"
                placeholder="Ingresa tu nombre"
              />
            </div>

            {/* Guests select */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
                Número de personas que asistirán
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setGuests(n)}
                    className={cn(
                      "py-3 rounded-xl font-medium transition-all duration-300",
                      guests === n
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-200"
                        : "bg-rose-50 text-gray-600 hover:bg-rose-100",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">
                {guests} {guests === 1 ? "persona" : "personas"}
              </p>
            </div>

            {/* WhatsApp button */}
            <button
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg shadow-green-200 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <span className="text-xl">💚</span>
              Confirmar por WhatsApp
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Al hacer clic serás redirigido a WhatsApp para enviar tu
            confirmación
          </p>
        </div>
      </div>
    </section>
  );
}

