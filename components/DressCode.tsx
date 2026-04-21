"use client";

export default function DressCode() {
  return (
    <section className="py-16 px-4 mx-4 my-8 rounded-3xl">
      <div className="rounded-3xl bg-gradient-to-b from-rose-50 via-white to-rose-50 shadow-2xl py-12 px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-rose-100 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-100 rounded-full translate-x-24 translate-y-24 opacity-50" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-rose-300 rounded-full" />
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-rose-200 rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header decoration */}
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Dress Code
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-rose-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-rose-500/20">
              <span className="text-5xl">👗</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-light text-rose-800 mb-6 tracking-wider">
              FORMAL
            </h3>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6" />

            <p className="text-xl md:text-2xl text-gray-600 italic font-light">
              "Queda reservado el color{" "}
              <span className="text-rose-500 font-medium">rosa</span> y{" "}
              <span className="text-amber-500 font-medium">dorado</span> para la
              quinceañera"
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
