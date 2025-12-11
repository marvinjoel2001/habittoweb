import React from 'react';

export default function HowItWorks() {
  return (
    <div className="flex flex-col flex-1 items-center py-20 sm:py-24 lg:py-32 animate-fade-in-up">
      <div className="flex w-full max-w-4xl flex-col items-center gap-4 text-center">
        <p className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-white">
          Encuentra tu Alquiler Perfecto en 4 Pasos Simples
        </p>
        <p className="text-lg text-gray-300 sm:text-xl">
          Tu próximo hogar está a solo unos deslizamientos de distancia.
        </p>
      </div>

      <div className="mt-16 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 animate-fade-in-up animate-delay-200">
        {/* Step 1 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">1</div>
            <span className="material-symbols-outlined text-action" style={{ fontSize: '32px' }}>person</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-white">Crea tu Perfil</h2>
            <p className="text-sm font-normal leading-normal text-gray-300">
              Configura tu perfil de inquilino y cuéntanos qué buscas. Añade tus preferencias, presupuesto y estilo de vida.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">2</div>
            <span className="material-symbols-outlined text-action" style={{ fontSize: '32px' }}>swipe</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-white">Desliza y Descubre</h2>
            <p className="text-sm font-normal leading-normal text-gray-300">
              Explora listados seleccionados. Desliza a la derecha en los lugares que te encantan y a la izquierda en los que no.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">3</div>
            <span className="material-symbols-outlined text-action" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-white">¡Es un Match!</h2>
            <p className="text-sm font-normal leading-normal text-gray-300">
              Cuando un propietario también desliza a la derecha en ti, ¡es un match! Estás un paso más cerca de tu nuevo hogar.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex h-full flex-col gap-4 rounded-lg p-6 glassmorphism transition-transform hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">4</div>
            <span className="material-symbols-outlined text-action" style={{ fontSize: '32px' }}>chat</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight text-white">Conecta y Chatea</h2>
            <p className="text-sm font-normal leading-normal text-gray-300">
              Chatea de forma segura con tus matches directamente en la plataforma para hacer preguntas y programar una visita.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full text-center px-4 animate-fade-in-up animate-delay-300">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">¿Listo para encontrar tu lugar?</h1>
          <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-action px-8 text-base font-bold leading-normal tracking-wide text-white transition-transform hover:scale-105 shadow-lg">
            <span className="truncate">Empieza a Deslizar ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
}
