export default function Footer() {
  return (
    <footer className="py-8 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-rose-200 via-white to-rose-50 text-center py-12 px-6 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-rose-100 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
        

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Names */}
          <p className="text-2xl md:text-3xl font-serif text-rose-800 mb-2">
            Regina Sarahi
          </p>
          <p className="text-rose-500 text-lg mb-6">Mis XV Años</p>

          {/* Date */}
          <p className="text-rose-400 text-sm mb-8">13 de Junio de 2026</p>

          {/* Divider */}
          <div className="w-24 h-px bg-rose-300 mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-rose-400 text-xs">
            © 2026 Hecho con 💕 para Regina
          </p>
        </div>
      </div>
    </footer>
  );
}

