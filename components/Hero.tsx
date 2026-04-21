"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-rose-300 font-medium drop-shadow-lg mt-6 animate-pulse">
        ¡Ya llegó el día!
      </p>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center">
            <div className="text-center">
              <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-white font-light drop-shadow-lg block">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-lato)] text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-white/50 text-2xl md:text-3xl ml-4 md:ml-6 pb-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ id }: { id?: string }) {
  const eventDate = new Date("2026-06-13T00:00:00");

  return (
    <section id={id} className="py-4 px-4 mx-4 rounded-3xl overflow-hidden shadow-2xl">
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Fondo XV Regina"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          {/* Overlay para que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 rounded-2xl" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/10 rounded-full" />
        <div className="absolute bottom-40 left-16 w-16 h-16 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/15 rounded-full" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-4">
          {/* Mis XV - Playfair Display */}
          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-medium tracking-[0.5em] uppercase text-white/90 mb-2 drop-shadow-lg">
            Mis XV
          </p>

          {/* Regina Sarahi - Great Vibes (cursiva elegante) */}
          <h1 className="font-[family-name:var(--font-great-vibes)] text-8xl md:text-[10rem] lg:text-[12rem] text-white drop-shadow-2xl mb-2 leading-tight">
            Regina Sarahi
          </h1>

          {/* Divider decorativo */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-rose-300 text-2xl">✦</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-300" />
          </div>

          {/* Fecha - Playfair Display */}
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl text-white font-light drop-shadow-lg">
            13 de Junio de 2026
          </p>

          {/* Countdown */}
          <Countdown targetDate={eventDate} />

          {/* Invitación - Lato */}
          <p className="font-[family-name:var(--font-lato)] text-lg md:text-xl text-white/80 mt-8 tracking-wide drop-shadow">
            ¡Estás cordialmente invitada!
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
