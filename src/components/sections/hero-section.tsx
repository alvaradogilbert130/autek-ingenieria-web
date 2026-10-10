
"use client"; // Required for embla-carousel-autoplay and useState/useEffect

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export function HeroSection() {
  const whatsappNumber = "573167835605";
  const message = "Hola Ing. Gilbert, quiero consultar sobre el diseño o ensamble de un tablero/automatización";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const trustPoints = [
    "Consultoría y diseño de planos en CAD bajo RETIE y NTC 2050.",
    "Ensamble y cableado estructurado en taller con pruebas FAT previas.",
    "Programación de PLC, HMI y lazos PID de proceso (temperatura, nivel, flujo).",
    "Aliado técnico directo sin intermediarios comerciales ni burocracia.",
  ];

  return (
    <section id="inicio" className="w-full pt-20 md:pt-24 lg:pt-28 bg-secondary pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
        {/* Text and Button Container */}
        <div className="relative z-10 flex flex-col justify-center space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span>Ingeniería Mecatrónica • Consultoría • Tableros & Automatización</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none text-foreground leading-tight">
            Ingeniería, Automatización Industrial y Tableros Eléctricos
          </h1>

          <p className="text-lg md:text-xl font-semibold text-sky-600 dark:text-sky-400">
            Soluciones a medida desarrolladas por el Ing. Gilbert Alvarado | Autek Ingeniería
          </p>

          <p className="max-w-[600px] text-muted-foreground text-base md:text-lg mx-auto md:mx-0 text-justify font-medium leading-relaxed">
            Soy <strong className="text-foreground">Gilbert Alvarado</strong>, Ingeniero Mecatrónico egresado de la Universidad Autónoma de Bucaramanga (UNAB). Ayudo a fabricantes de maquinaria (OEM) y plantas industriales a transformar requerimientos operativos en tableros eléctricos normativos, lazos de control estables y automatizaciones confiables con PLC y HMI en Bucaramanga y Colombia.
          </p>

          <ul className="space-y-2 py-2 max-w-[600px] text-sm text-foreground/80 font-medium text-left">
            {trustPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <svg
                  className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-md">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5 fill-white" />
                Consultar con el Ingeniero
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-semibold">
              <Link href="#proyectos">
                Ver Proyectos Ejecutados
              </Link>
            </Button>
          </div>
        </div>

        {/* Modern Circular Personal Portrait Frame */}
        <div className="relative w-full max-w-lg lg:max-w-xl mx-auto md:mt-0 flex items-center justify-center py-2">
          {/* Subtle Ambient Glow Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-600/20 rounded-full blur-3xl -z-10 opacity-70 scale-95" />

          {/* Ultra-sleek fine border ring */}
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-sky-400 via-primary to-blue-500 shadow-xl">
            {/* Inner Circular Frame - Maximized visible photo area with hairline border */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[470px] lg:h-[470px] rounded-full overflow-hidden border border-background/60 bg-slate-900 shadow-inner group">
              <Image
                src="/images/foto_personal.jpg"
                alt="Ing. Gilbert Alvarado - Automatización y Tableros Eléctricos"
                fill
                className="object-cover object-[32%_18%] transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating Status Badge at Bottom */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 bg-background/90 backdrop-blur-md border border-border/80 shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-2 z-20 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-foreground tracking-tight">
                Disponible para Proyectos
              </span>
            </div>

            {/* Floating Skill Badge at Top Left */}
            <div className="hidden sm:flex absolute top-2 left-2 bg-background/90 backdrop-blur-md border border-border/80 shadow-sm px-3 py-1 rounded-full items-center gap-1.5 z-20 text-[11px] font-semibold text-foreground">
              <span className="text-sky-500 font-bold">⚡</span>
              <span>Ing. Mecatrónico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
