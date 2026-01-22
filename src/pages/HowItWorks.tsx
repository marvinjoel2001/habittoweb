import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col flex-1 items-center py-20 sm:py-24 lg:py-32 animate-fade-in-up">
      <div className="flex w-full max-w-4xl flex-col items-center gap-4 text-center">
        <p className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-slate-900">
          Tu Próximo Alquiler en 4 Pasos
        </p>
        <p className="text-lg text-slate-600 sm:text-xl">
          Olvídate de las agencias. Conecta directamente mediante nuestro
          sistema de Match.
        </p>
      </div>

      <div className="mt-16 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 animate-fade-in-up animate-delay-200">
        {/* Step 1 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">
              1
            </div>
            <span
              className="material-symbols-outlined text-action"
              style={{ fontSize: "32px" }}
            >
              person
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-slate-900">
              Perfil Verificado
            </h2>
            <p className="text-sm font-normal leading-normal text-slate-600">
              Crea tu perfil y verifícate. Genera confianza inmediata con
              propietarios y futuros roomies.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">
              2
            </div>
            <Sparkles size={32} strokeWidth={1.5} className="text-action" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-slate-900">
              Match con IA
            </h2>
            <p className="text-sm font-normal leading-normal text-slate-600">
              Nuestra IA te sugiere los mejores perfiles. Desliza para indicar interés y conectar.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">
              3
            </div>
            <span
              className="material-symbols-outlined text-action"
              style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-slate-900">
              ¡Es un Match!
            </h2>
            <p className="text-sm font-normal leading-normal text-slate-600">
              Cuando un propietario también desliza a la derecha en ti, ¡es un
              match! Estás un paso más cerca de tu nuevo hogar.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">
              4
            </div>
            <span
              className="material-symbols-outlined text-action"
              style={{ fontSize: "32px" }}
            >
              chat
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-slate-900">
              Chat y Agenda
            </h2>
            <p className="text-sm font-normal leading-normal text-slate-600">
              Conversa de forma segura con tus matches y agenda una visita sin
              salir de la app.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full text-center px-4 animate-fade-in-up animate-delay-300">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
            ¿Listo para encontrar tu lugar?
          </h1>
          <Link
            to="/launch"
            className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-action px-8 text-base font-bold leading-normal tracking-wide text-white transition-transform hover:scale-105 shadow-lg"
          >
            <span className="truncate">Empieza a Deslizar ahora</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
