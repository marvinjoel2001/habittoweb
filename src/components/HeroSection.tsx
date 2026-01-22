import React from "react";
import { Link } from "react-router-dom";
import portadaImg from "../assets/Images/portada.png";
import appStoreImg from "../assets/Images/appstore.png";
import playStoreImg from "../assets/Images/playstore.png";

export default function HeroSection() {
  return (
    <div className="py-10 md:py-20 animate-fade-in-up px-4 flex flex-col items-center gap-10">
      {/* Text Content Section - Moved Outside for Better Visibility */}
      <div className="text-center max-w-4xl flex flex-col items-center gap-8 z-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-sm">
            Haz Match con tu Nuevo Hogar.
          </h1>
          <h2 className="text-slate-700 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            La app de alquileres que conecta inquilinos y propietarios con un
            simple deslizamiento. Sin intermediarios, sin estrés.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/launch"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={appStoreImg}
              alt="Descargar en App Store"
              className="h-14 w-auto"
            />
          </Link>
          <Link
            to="/launch"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={playStoreImg}
              alt="Disponible en Google Play"
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Image Section - Clean with Soft Edges */}
      <div className="w-full max-w-7xl mt-8 px-4">
        <img
          src={portadaImg}
          alt="Habitto portada"
          className="w-full h-auto rounded-3xl"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
