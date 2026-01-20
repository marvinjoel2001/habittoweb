import { Instagram, Facebook, Linkedin } from "lucide-react";
import appStoreImg from "../assets/Images/appstore.png";
import playStoreImg from "../assets/Images/playstore.png";
import logoImg from "../assets/Images/logo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-5 py-16 text-center mt-20 glassmorphism rounded-t-xl animate-fade-in-up">
      <div className="flex justify-center mb-4">
        <img src={logoImg} alt="Habitto Logo" className="h-16 w-auto" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          className="inline-block hover:scale-105 transition-transform"
          data-alt="Download on the App Store button"
          href="#"
        >
          <img
            alt="App Store download button"
            className="h-12"
            src={appStoreImg}
          />
        </a>
        <a
          className="inline-block hover:scale-105 transition-transform"
          data-alt="Get it on Google Play button"
          href="#"
        >
          <img
            alt="Google Play download button"
            className="h-12"
            src={playStoreImg}
          />
        </a>
      </div>
      <div className="flex justify-center gap-6">
        <a
          className="text-slate-500 hover:text-slate-900 transition hover:scale-110"
          href="#"
        >
          <Instagram size={24} />
        </a>
        <a
          className="text-slate-500 hover:text-slate-900 transition hover:scale-110"
          href="#"
        >
          <Facebook size={24} />
        </a>
        <a
          className="text-slate-500 hover:text-slate-900 transition hover:scale-110"
          href="#"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <p className="text-slate-500 text-sm font-normal">
        © 2026 Habitto. Todos los derechos reservados.
      </p>
    </footer>
  );
}
