export default function Footer() {
  return (
    <footer className="py-8 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-rose-900 to-rose-950 text-center py-12 px-6 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Names */}
          <p className="text-2xl md:text-3xl font-serif text-white mb-2">
            Regina Sarahi
          </p>
          <p className="text-rose-300 text-lg mb-6">
            Mis XV Años
          </p>

          {/* Date */}
          <p className="text-rose-400 text-sm mb-8">
            13 de Junio de 2026
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-rose-700 mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-rose-500 text-xs">
            © 2026 Hecho con 💕 para Regina
          </p>
        </div>
      </div>
    </footer>
  );
}