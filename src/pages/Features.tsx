import React from "react";

export default function Features() {
  return (
    <div className="flex flex-col gap-10 animate-fade-in-up">
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
            Encuentra tu próximo hogar,
            <br />a la manera moderna.
          </h1>
          <h2 className="text-gray-300 text-base font-normal leading-normal sm:text-lg max-w-2xl">
            Descubre las características que hacen de Habitto la forma más
            inteligente, rápida y divertida de encontrar tu alquiler ideal.
          </h2>
          <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 cta-gradient text-white text-base font-bold leading-normal tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg">
            <span className="truncate">Empieza a Deslizar ahora</span>
          </button>
        </div>
      </section>

      <section className="py-10 animate-fade-in-up animate-delay-200">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                neurology
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Algoritmo de Emparejamiento Inteligente
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                Nuestra IA aprende tus preferencias para mostrarte alquileres
                que realmente te encantarán.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Listados y Propietarios Verificados
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                Desliza con confianza. Cada listado y propietario es verificado
                para tu seguridad y tranquilidad.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Chat Instantáneo y Agendamiento
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                ¿Hiciste match? Conecta al instante y programa visitas
                directamente en la app.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                map
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Perfiles Detallados del Vecindario
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                Explora tiempos de viaje, cafeterías locales y calificaciones de
                seguridad antes de visitar.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                description
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Trámites Digitales Seguros
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                Desde la solicitud hasta la firma del contrato, maneja todos los
                documentos de forma segura en línea.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <span
                className="material-symbols-outlined !text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                tune
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">
                Filtros de Búsqueda Personalizados
              </h2>
              <p className="text-gray-300 text-sm font-normal leading-normal">
                ¿Admiten mascotas? ¿Necesitas balcón? Ajusta tu búsqueda para
                encontrar el lugar perfecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
