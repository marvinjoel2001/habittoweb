import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Timer } from "lucide-react";

export default function LaunchPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const launchDate = new Date("2026-02-18T00:00:00");
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4 pt-24 pb-12">
      <div className="glassmorphism p-10 md:p-16 rounded-3xl max-w-4xl w-full text-center animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Timer className="w-10 h-10" />
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <span className="inline-block px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-bold text-lg md:text-xl tracking-wide shadow-sm">
            Prepárate para encontrarlo
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Tu próximo hogar no se busca, <br className="hidden md:block" />
          se hace match.
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Encuentra casas, departamentos y personas con quien compartir tu
          espacio.
        </p>

        {timeLeft ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/60">
              <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">
                {timeLeft.days}
              </span>
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Días
              </span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/60">
              <span className="block text-4xl md:text-5xl font-bold text-secondary mb-2">
                {timeLeft.hours}
              </span>
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Horas
              </span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/60">
              <span className="block text-4xl md:text-5xl font-bold text-action mb-2">
                {timeLeft.minutes}
              </span>
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Minutos
              </span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/60">
              <span className="block text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {timeLeft.seconds}
              </span>
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Segundos
              </span>
            </div>
          </div>
        ) : (
          <div className="text-3xl font-bold text-green-600 mb-12">
            ¡Ya estamos en vivo!
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Volver al Inicio
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60">
          <p className="text-slate-500 font-medium">
            Lanzamiento oficial: 18 de Febrero de 2026
          </p>
        </div>
      </div>
    </div>
  );
}
