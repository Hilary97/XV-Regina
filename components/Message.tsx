import Image from "next/image";

export default function Message() {
  return (
    <section className="relative py-16 px-4 mx-4 my-8 rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-3xl">
        <Image
          src="/images/Hero2.jpg"
          alt="Fondo mensaje XV"
          fill
          className="object-cover rounded-3xl bg-fixed"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto relative z-10 text-center px-3 py-12">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
          <span className="text-rose-300 text-2xl">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
        </div>

        {/* Main message */}
        <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-lg">
          Durante mucho tiempo imaginé este día,
          <br />
          <span className="text-rose-200">lo soñé</span> con música, luces,
          risas y abrazos.
        </p>

        <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-white mt-8 leading-relaxed drop-shadow-lg">
          Hoy ese sueño se vuelve realidad y quiero celebrarlo de la mejor
          manera,
          <br />
          <span className="text-rose-200">
            rodeada de las personas importantes
          </span>{" "}
          en mi vida...
        </p>

        <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-white mt-8 leading-relaxed drop-shadow-lg">
          Por eso no podía faltar tu presencia,
          <br />
          <span className="text-rose-200">¡traé tus ganas de festejar</span> y
          llenemos la noche de
          <br />
          <span className="text-amber-300">magia y alegría!</span>
        </p>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
          <span className="text-rose-300 text-2xl">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
        </div>
      </div>
    </section>
  );
}
