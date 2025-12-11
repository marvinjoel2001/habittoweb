import React from 'react';
import { Sparkles, Banknote, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 animate-fade-in-up animate-delay-300">
      <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight text-center max-w-2xl mx-auto">
        Todo lo que necesitas, en un solo lugar.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-1 gap-4 rounded-xl glassmorphism p-6 flex-col text-center items-center hover:scale-105 transition-transform duration-300">
          <div className="text-action bg-action/20 p-3 rounded-full">
            <Sparkles size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white text-lg font-bold">Matching Inteligente</h4>
            <p className="text-gray-300 text-sm font-normal">Nuestro algoritmo te conecta con tu piso y roomie ideal.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-1 gap-4 rounded-xl glassmorphism p-6 flex-col text-center items-center hover:scale-105 transition-transform duration-300">
          <div className="text-action bg-action/20 p-3 rounded-full">
            <Banknote size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white text-lg font-bold">Sin Comisiones</h4>
            <p className="text-gray-300 text-sm font-normal">Ahorra dinero. Conecta directamente con propietarios.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-1 gap-4 rounded-xl glassmorphism p-6 flex-col text-center items-center hover:scale-105 transition-transform duration-300">
          <div className="text-action bg-action/20 p-3 rounded-full">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white text-lg font-bold">Roomies Seguros</h4>
            <p className="text-gray-300 text-sm font-normal">Perfiles verificados para tu tranquilidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
