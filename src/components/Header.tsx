import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/Images/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap px-6 py-4 glassmorphism rounded-full z-50 animate-fade-in-down">
      <Link
        to="/"
        className="flex items-center gap-3 text-slate-900 hover:opacity-80 transition-opacity z-50"
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

      {/* Desktop Menu */}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center text-slate-900 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full glassmorphism rounded-2xl p-6 flex flex-col gap-6 md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <Link
              className="text-slate-900 text-lg font-medium hover:text-primary transition"
              to="/features"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link
              className="text-slate-900 text-lg font-medium hover:text-primary transition"
              to="/how-it-works"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link
              className="text-slate-900 text-lg font-medium hover:text-primary transition"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-200/50">
            <span className="text-xs font-semibold text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 w-fit">
              Lanzamiento: 18 Feb 2026
            </span>
            <Link
              to="/launch"
              className="flex w-full items-center justify-center rounded-full h-12 bg-slate-200 text-slate-400 text-base font-bold tracking-wide hover:bg-slate-300 transition cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Descargar App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
