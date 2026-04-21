"use client";

export default function Contact() {
  const phoneNumber = "3313329960"; // Cambia este número

  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-br from-rose-300 via-rose-400 to-rose-400 shadow-2xl py-12 px-6">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 rounded-3xl">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/50 rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-20 h-20 border border-white rounded-full" />
          <div className="absolute bottom-40 right-1/3 w-16 h-16 border border-white/50 rounded-full" />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-4xl">💬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Contacto
            </h2>
            <p className="text-rose-100 text-lg max-w-xl mx-auto">
              ¿Tienes alguna duda sobre el evento? ¡Escríbenos!
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`https://wa.me/${phoneNumber}?text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20Regina%20Sarahi`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-2xl">💚</span>
              <span className="text-lg">Confirmar por WhatsApp</span>
            </a>
          </div>

          {/* Decorative footer */}
          <div className="text-center mt-8">
            <p className="text-rose-300/60 text-sm">
              ✨ Estamos ansiosos por compartir este día contigo ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
