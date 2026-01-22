import React from "react";
import { Sparkles } from "lucide-react";

export default function Features() {
  return (
    <div className="flex flex-col flex-1 items-center py-12 lg:py-20 animate-fade-in-up">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
          Características Principales
        </h1>
        <p className="mt-4 text-slate-600 text-base font-normal leading-normal lg:text-lg">
          Descubre por qué Habitto es la mejor opción para encontrar tu próximo
          hogar o compañero de piso.
        </p>
      </div>

      <section className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-action bg-action/20 p-3 rounded-full w-fit">
              <Sparkles size={36} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                IA & Match Inteligente
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
                Encuentra compañeros de piso compatibles en minutos gracias a nuestro algoritmo de IA avanzado.
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
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                Verificación de Identidad
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
                Todos los usuarios pasan por un proceso de verificación para
                garantizar la seguridad de la comunidad.
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
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                Chat Instantáneo y Agendamiento
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
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
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                Perfiles Detallados del Vecindario
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
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
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                Trámites Digitales Seguros
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
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
              <h2 className="text-slate-900 text-lg font-bold leading-tight">
                Filtros de Búsqueda Personalizados
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-normal">
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
