import React from "react";

export default function HeroSection() {
  return (
    <div className="py-20 md:py-32 text-center animate-fade-in-up">
      <div className="glassmorphism rounded-xl p-8 md:p-16 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Encuentra tu próximo hogar deslizando.
          </h1>
          <h2 className="text-gray-300 text-base md:text-lg font-normal leading-normal">
            La forma inteligente y segura de alquilar en Santa Cruz.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-xs w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 cta-gradient text-white text-base font-bold leading-normal tracking-wide hover:scale-105 transition-transform duration-300">
          <span className="truncate">Descarga la App</span>
        </button>
        <div className="w-full max-w-4xl mt-8 animate-fade-in-up animate-delay-200">
          <img
            alt="A 3D mockup of an iPhone showing the Habitto app swipe interface with an apartment photo."
            className="w-full h-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXb9QkygCokv_NMnEJuYCzc3osd6Vf2p3NZVY7ACOPzDqOplbt9MGIfGarayx4NUbihSV5OER_iv2r1F51cQDaXC-hr88AmoblS5mLnuQg83KromJ3USbTJnlpMLScTt0NO8Bz-UdFcFVkKK21CytvvGUiPReh-2L7nM28BwVG-AK4xkGfKIV7FzH44Ix0LzTg1zNuzhKZBaJIWSdzoYNk2daDA3Ltsbd2qkJBYdizRBUQ8bbdaFdQ4PXbQZjU5Ki4PAcBGNxCLe2"
            style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))" }}
          />
        </div>
      </div>
    </div>
  );
}
