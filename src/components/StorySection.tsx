import React from "react";
import historyImg from "../assets/Images/history.png";

export default function StorySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="glassmorphism p-8 rounded-3xl md:order-2">
          <div className="rounded-2xl overflow-hidden h-64 md:h-96 w-full flex items-center justify-center">
            <img
              src={historyImg}
              alt="Nuestra Historia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:order-1 flex flex-col gap-6">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Nacimos de una necesidad real.
          </h2>
          <div className="space-y-4 text-lg text-slate-600">
            <p>
              Todo comenzó con la frustración de buscar dónde vivir. Ya fuera un
              departamento entero para ti solo o compartir gastos con alguien
              más, las opciones eran caóticas y poco confiables.
            </p>
            <p>
              Decidimos cambiar las reglas del juego. Habitto nace para que
              hagas "Match" con tu nuevo hogar. Ya no se trata solo de buscar,
              sino de conectar instantáneamente con el departamento de tus
              sueños o el roomie ideal.
            </p>
            <p>
              Facilitamos el alquiler para todos: desde quien busca su primera
              independencia hasta quien necesita un nuevo espacio. Tu próximo
              hogar te está esperando, solo tienes que deslizar.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Contáctanos
            </h3>
            <div className="space-y-2 text-slate-600">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Teléfono:</span> 71363268
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Correo:</span>{" "}
                marvinjoel@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
