import React from "react";
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center py-12 lg:py-20 animate-fade-in-up">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
          Contáctanos
        </h1>
        <p className="mt-4 text-gray-300 text-base font-normal leading-normal lg:text-lg">
          Estamos aquí para ayudarte. Envíanos un mensaje o encuentra nuestros
          datos de contacto a continuación.
        </p>
      </div>

      <div className="glassmorphism grid w-full grid-cols-1 gap-12 rounded-xl p-8 lg:grid-cols-5 lg:p-12 animate-fade-in-up animate-delay-200">
        {/* Contact Form Section */}
        <div className="lg:col-span-3">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
            Envía un Mensaje
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Nombre Completo
                </p>
                <input
                  className="flex w-full flex-1 rounded-lg border border-white/10 bg-white/5 p-3 text-base text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary outline-none transition-colors"
                  placeholder="Ingresa tu nombre completo"
                  type="text"
                />
              </label>
              <label className="flex flex-col">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Correo Electrónico
                </p>
                <input
                  className="flex w-full flex-1 rounded-lg border border-white/10 bg-white/5 p-3 text-base text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary outline-none transition-colors"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">
                Asunto
              </p>
              <input
                className="flex w-full flex-1 rounded-lg border border-white/10 bg-white/5 p-3 text-base text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary outline-none transition-colors"
                placeholder="Ingresa el asunto de tu mensaje"
                type="text"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">
                Tu Mensaje
              </p>
              <textarea
                className="w-full flex-1 rounded-lg border border-white/10 bg-white/5 p-3 text-base text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary outline-none transition-colors"
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
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
            Contacto Directo
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Correo</p>
                <a
                  className="text-gray-300 hover:text-primary transition-colors"
                  href="mailto:soporte@habitto.com"
                >
                  soporte@habitto.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Teléfono</p>
                <a
                  className="text-gray-300 hover:text-primary transition-colors"
                  href="tel:+15551234567"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-action/20 text-action">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Oficina</p>
                <p className="text-gray-300">
                  Av. Futuro 123, Ciudad Innovación, 45678
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-bold text-white mb-3">Síguenos</p>
            <div className="flex items-center gap-4">
              <a
                className="text-gray-300 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                href="#"
              >
                <Twitter size={24} />
              </a>
              <a
                className="text-gray-300 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                href="#"
              >
                <Github size={24} />
              </a>
              <a
                className="text-gray-300 hover:text-primary transition-colors hover:scale-110 transform duration-200"
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
