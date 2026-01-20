import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glassmorphism rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Nuestra Misión
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Transformar la experiencia de alquiler en Santa Cruz, creando conexiones reales y seguras entre personas. Creemos que encontrar un hogar debe ser emocionante, no estresante.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Simplificar</h3>
              <p className="text-slate-600">
                Eliminamos la burocracia innecesaria y los procesos lentos.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Conectar</h3>
              <p className="text-slate-600">
                Fomentamos relaciones basadas en compatibilidad y confianza.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors">
              <div className="bg-action/10 p-4 rounded-full text-action">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Comunidad</h3>
              <p className="text-slate-600">
                Construimos una red segura de inquilinos y propietarios verificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
