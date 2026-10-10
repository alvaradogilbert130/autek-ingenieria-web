
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, FileText, Wrench, Rocket } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: <Cpu className="h-6 w-6 text-primary shrink-0" />,
      title: "Visión Mecatrónica",
      desc: "Entendimiento de cinemática mecánica, potencia eléctrica y lógica de software integrados en un solo proyecto.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary shrink-0" />,
      title: "Consultoría y Diseño a Medida",
      desc: "Levantamiento de cargas, cálculo de protecciones y desarrollo de planos CAD normativos sin sobredimensionar costes.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary shrink-0" />,
      title: "Ensamble Riguroso en Taller",
      desc: "Tableros armados con ruteo ordenado en canaleta ranurada, marquillado claro y validación funcional FAT previa.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary shrink-0" />,
      title: "Acompañamiento y Puesta en Marcha",
      desc: "Pruebas directas en planta, parametrización de equipos, ajuste de lazos de control y soporte posventa cercano.",
    },
  ];

  return (
    <section id="sobre-mi" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Real Workshop Industrial Panel Showcase (replacing former ant mascot) */}
          <div className="relative w-full order-last md:order-first flex items-center justify-center">
            {/* Ambient subtle back glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 scale-95" />
            
            <div className="relative w-full max-w-md md:max-w-none h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-border shadow-xl bg-card group">
              <Image
                src="/images/TABLEROS%20GENERALES/FB_IMG_1767286395919.jpg" 
                alt="Ensamble y cableado de tablero eléctrico de potencia y control en taller - Gilbert Alvarado"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border/80 shadow-md px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs font-semibold text-foreground">Ensamble en Taller • Autek</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md border border-border/80 shadow-lg p-3.5 rounded-xl">
                <p className="text-xs font-bold text-foreground">Fabricación Bajo Norma RETIE & NTC 2050</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Barras de distribución calibradas, canaletas ranuradas y pruebas FAT previas al montaje.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <span>Sobre Gilbert Alvarado • Marca Autek</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary leading-snug">
              Ingeniería aplicada directamente en el taller y en la línea de producción
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-justify">
              <p>
                Soy <strong className="text-foreground">Gilbert Alvarado</strong>, Ingeniero Mecatrónico egresado de la <strong className="text-foreground">Universidad Autónoma de Bucaramanga (UNAB)</strong>, operando comercial y técnicamente bajo mi marca <strong className="text-primary">Autek</strong>. Mi trabajo combina la rigurosidad del diseño eléctrico con la agilidad de la programación y el entendimiento mecánico de las máquinas.
              </p>
              <p>
                La principal ventaja de mi enfoque mecatrónico es la integralidad: en lugar de coordinar a un mecánico, un electricista y un programador por separado, abordo la máquina como un sistema unificado. Calculo la potencia, diseño los esquemas unifilares en CAD, ensamblo el gabinete con normas RETIE/NTC 2050 y desarrollo la lógica en PLC/HMI.
              </p>
              <p>
                Trabajo mediante un modelo de trato directo de ingeniero a cliente, entregando documentación clara, diagramas eléctricos y realizando pruebas de aceptación en taller (FAT) antes del despacho o instalación en planta.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pilares Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="bg-secondary/60 border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 space-y-3">
                <div className="p-2.5 bg-background rounded-lg w-fit shadow-xs border border-border">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground leading-snug">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {pillar.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
