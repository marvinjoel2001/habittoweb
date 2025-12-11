import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 glassmorphism rounded-full z-10 animate-fade-in-down">
      <Link to="/" className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity">
        <div className="size-6 text-primary flex items-center justify-center">
          <ChevronsRight className="w-full h-full" />
        </div>
        <h2 className="text-white text-xl font-bold tracking-tighter">Habitto</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition" to="/features">Características</Link>
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition" to="/how-it-works">Cómo Funciona</Link>
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition" to="/contact">Contacto</Link>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-action text-white text-sm font-bold tracking-wide hover:bg-opacity-90 transition">
          <span className="truncate">Descargar App</span>
        </button>
      </div>
    </header>
  );
}
