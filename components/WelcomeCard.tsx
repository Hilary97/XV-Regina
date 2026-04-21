"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomeCard() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    // Trigger exit animation
    setIsExiting(true);

    // Trigger audio playback
    window.dispatchEvent(new CustomEvent("start-audio"));

    // After exit animation, navigate and show page
    setTimeout(() => {
      router.push("/#hero");
    }, 800);
  };

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-center
        bg-gradient-to-b from-rose-700 via-rose-400 to-rose-600
        transition-all duration-700 ease-out
        ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}
        ${isExiting ? "scale-110" : "scale-100"}
      `}
    >
      <div
        className={`
          relative max-w-md mx-4 p-8 text-center
          transform transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          ${isExiting ? "scale-95" : "scale-100"}
        `}
      >
        {/* Decorative border */}
        <div className="absolute inset-0 border-2 border-rose-300/30 rounded-3xl" />
        <div className="absolute inset-4 border border-rose-200/20 rounded-2xl" />

        {/* Sparkle decorations */}
        <div className="absolute -top-4 -left-4 text-2xl text-rose-300 animate-pulse">
          ✦
        </div>
        <div className="absolute -top-4 -right-4 text-2xl text-rose-300 animate-pulse delay-100">
          ✦
        </div>
        <div className="absolute -bottom-4 -left-4 text-2xl text-rose-300 animate-pulse delay-200">
          ✦
        </div>
        <div className="absolute -bottom-4 -right-4 text-2xl text-rose-300 animate-pulse delay-300">
          ✦
        </div>

        {/* Content */}
        <div className="relative space-y-6">
          <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-medium tracking-[0.3em] uppercase text-rose-200/80">
            Mis XV
          </p>

          <h1 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl text-white drop-shadow-xl">
            ¡Bienvenida!
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-rose-300 text-xl">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
          </div>

          <p className="font-[family-name:var(--font-lato)] text-lg md:text-xl text-white/90 leading-relaxed">
            Quiero que me acompañes en este momento especial
            <br />
            <span className="text-rose-200/70">Mis XV</span>
          </p>

          <button
            onClick={handleEnter}
            className="
              mt-8 px-8 py-3
              font-[family-name:var(--font-playfair)] text-lg
              text-rose-900 bg-rose-100
              rounded-full
              hover:bg-white hover:scale-105
              transition-all duration-300
              shadow-lg hover:shadow-xl
              tracking-wide
            "
          >
            Ingresar a la invitación
          </button>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-8 w-2 h-2 bg-rose-300/40 rounded-full animate-ping" />
        <div className="absolute top-20 right-12 w-1.5 h-1.5 bg-rose-300/30 rounded-full animate-ping delay-100" />
        <div className="absolute bottom-16 left-16 w-1 h-1 bg-rose-300/40 rounded-full animate-ping delay-200" />
        <div className="absolute bottom-24 right-8 w-2 h-2 bg-rose-300/30 rounded-full animate-ping delay-300" />
      </div>
    </div>
  );
}

