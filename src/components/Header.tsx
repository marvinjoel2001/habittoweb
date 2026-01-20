import { Link } from "react-router-dom";
import logoImg from "../assets/Images/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 glassmorphism rounded-full z-10 animate-fade-in-down">
      <Link
        to="/"
        className="flex items-center gap-3 text-slate-900 hover:opacity-80 transition-opacity"
      >
        <div className="size-10 flex items-center justify-center">
          <img
            src={logoImg}
            alt="Habitto Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-slate-900 text-xl font-bold tracking-tighter">
          Habitto
        </h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition"
            to="/features"
          >
            Características
          </Link>
          <Link
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition"
            to="/how-it-works"
          >
            Cómo Funciona
          </Link>
          <Link
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition"
            to="/contact"
          >
            Contacto
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
            Lanzamiento: 18 Feb 2026
          </span>
          <Link
            to="/launch"
            className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-slate-200 text-slate-400 text-sm font-bold tracking-wide hover:bg-slate-300 transition cursor-pointer"
          >
            <span className="truncate">Descargar App</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
