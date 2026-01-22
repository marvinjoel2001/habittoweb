import React from "react";
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center py-12 lg:py-20 animate-fade-in-up">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
          Contáctanos
        </h1>
        <p className="mt-4 text-slate-600 text-base font-normal leading-normal lg:text-lg">
          Estamos aquí para ayudarte. Envíanos un mensaje o encuentra nuestros
          datos de contacto a continuación.
        </p>
      </div>

      <div className="glassmorphism grid w-full grid-cols-1 gap-12 rounded-xl p-8 lg:grid-cols-5 lg:p-12 animate-fade-in-up animate-delay-200">
        {/* Contact Form Section */}
        <div className="lg:col-span-3">
          <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
            Envía un Mensaje
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col">
                <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                  Nombre Completo
                </p>
                <input
                  className="flex w-full flex-1 rounded-lg border border-slate-200 bg-white p-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary outline-none transition-colors"
                  placeholder="Ingresa tu nombre completo"
                  type="text"
                />
              </label>
              <label className="flex flex-col">
                <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                  Correo Electrónico
                </p>
                <input
                  className="flex w-full flex-1 rounded-lg border border-slate-200 bg-white p-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary outline-none transition-colors"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Asunto
              </p>
              <input
                className="flex w-full flex-1 rounded-lg border border-slate-200 bg-white p-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary outline-none transition-colors"
                placeholder="Ingresa el asunto de tu mensaje"
                type="text"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-slate-900 text-base font-medium leading-normal pb-2">
                Tu Mensaje
              </p>
              <textarea
                className="w-full flex-1 rounded-lg border border-slate-200 bg-white p-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary outline-none transition-colors"
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
              ></textarea>
            </label>
            <button
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-action text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-opacity-90 shadow-lg hover:scale-[1.02] transform duration-200"
              type="submit"
            >
              <span className="truncate">Enviar Mensaje</span>
            </button>
          </form>
        </div>

        {/* Direct Contact Info Section */}
        <div className="lg:col-span-2">
          <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
            Contacto Directo
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Correo</p>
                <a
                  className="text-slate-600 hover:text-primary transition-colors"
                  href="mailto:marvinjoel@gmail.com"
                >
                  marvinjoel@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Teléfono</p>
                <a
                  className="text-slate-600 hover:text-primary transition-colors"
                  href="tel:71363268"
                >
                  71363268
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Oficina</p>
                <p className="text-slate-600">
                  Av. Futuro 123, Ciudad Innovación, 45678
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-3">Síguenos</p>
            <div className="flex items-center gap-4">
              <a
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                href="#"
              >
                <Twitter size={24} />
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                href="#"
              >
                <Github size={24} />
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                href="#"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
