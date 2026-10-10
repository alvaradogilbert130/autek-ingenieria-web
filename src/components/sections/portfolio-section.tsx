"use client";

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  category: string;
  tags: string[];
  description: string;
  imageUrls: string[];
  imageHint: string;
}

const projects: Project[] = [
  {
    title: 'Centro de Control de Motores (CCM) y Tablero de Fuerza – Planta Extractora de Palma',
    category: 'Tableros & CCM',
    tags: ['CCM', 'Control de Motores', 'Norma RETIE', 'Planta de Palma'],
    description: 'Diseño eléctrico bajo RETIE, ensamble en taller y puesta en marcha de centro de control de motores y distribución de potencia para planta extractora de aceite de palma. Integración de arrancadores, guardamotores, contactores y cableado estructurado en canaleta ranurada para operación continua en ambientes de alta exigencia.',
    imageUrls: [
      '/images/TABLERO%20PALMAS/1791566223708.jpg',
      '/images/TABLERO%20PALMAS/1791566223797.jpg',
      '/images/TABLERO%20PALMAS/1791566223932.jpg',
      '/images/TABLERO%20PALMAS/1791566224056.jpg',
      '/images/TABLERO%20PALMAS/1791566224141.jpg',
      '/images/TABLERO%20PALMAS/1791566224298.jpg',
      '/images/TABLERO%20PALMAS/1791566224373.jpg',
    ],
    imageHint: 'motor control center palm oil plant',
  },
  {
    title: 'Tablero de Control y Lógica de Parada para Elevador Industrial Multipisos',
    category: 'Elevadores & Carga',
    tags: ['Elevador Multipisos', 'Seguridad Industrial', 'Lógica de Control', 'Automatización'],
    description: 'Diseño y montaje de tablero de maniobra con enclavamientos de seguridad redundantes, sensores de fin de carrera, control de frenado por motorreductor y botoneras de piso para elevadores de carga industrial entre múltiples niveles.',
    imageUrls: [
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_1.jpg',
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_2.jpg',
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_5.jpg',
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_6.jpg',
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_7.jpg',
      '/images/ELEVADOR_MULTIPISOS/tablero_elevador_8.jpg',
    ],
    imageHint: 'elevator control panel industrial',
  },
  {
    title: 'Instalación Eléctrica, Seguridad y Control para Calderas Industriales de Vapor y Gas',
    category: 'Térmicos & Calderas',
    tags: ['Calderas de Vapor', 'Quemadores de Gas', 'Sensores de Nivel', 'Presión'],
    description: 'Ensamble de tableros de mando e instrumentación para calderas industriales. Integración de electrodos conductivos de nivel de agua, lazos de corte de seguridad por sobrepresión, automatización de bombas de alimentación y modulación de quemadores.',
    imageUrls: [
      '/images/CALDERAS/tablero_caldera_1.jpg',
      '/images/CALDERAS/caldera_gas_1.jpg',
      '/images/CALDERAS/caldera_gas_2.jpg',
      '/images/CALDERAS/caldera_gas_3.jpg',
      '/images/CALDERAS/caldera_gas_4.jpg',
    ],
    imageHint: 'industrial steam boiler control',
  },
  {
    title: 'Control Automático y Regulación de Ciclos para Tumbler Marinador al Vacío',
    category: 'Maquinaria Alimentaria',
    tags: ['Industria Cárnica', 'VFD / Variadores', 'Control de Vacío', 'Acero Inox'],
    description: 'Desarrollo del sistema de control y maniobra para tambor marinador cárnico al vacío. Parametrización de variador de frecuencia para ajuste suave de RPM, inversión periódica de giro y temporización de pulsos de vacío para ablandamiento cárnico uniforme.',
    imageUrls: [
      '/images/TUMBLER%20CONECTA/1791566224777.jpg',
      '/images/TUMBLER%20CONECTA/1791566224820.jpg',
      '/images/TUMBLER%20CONECTA/1791566224882.jpg',
      '/images/TUMBLER%20CONECTA/1791566224949.jpg',
      '/images/TUMBLER%20CONECTA/1791566224987.jpg',
      '/images/TUMBLER%20CONECTA/1791566225892.jpg',
      '/images/TUMBLER%20CONECTA/1791566225940.jpg',
    ],
    imageHint: 'vacuum tumbler meat machine',
  },
  {
    title: 'Automatización y Cuadro de Mando para Tumbler de Masajeado Cárnico',
    category: 'Maquinaria Alimentaria',
    tags: ['Masajeado Cárnico', 'Tablero Integrado', 'Temporización', 'Fabricante OEM'],
    description: 'Integración eléctrica compacta para fabricante OEM de maquinaria cárnica. Cuadro de control con botoneras de grado higiénico, relés temporizadores multifunción y protección térmica de motorreductor principal.',
    imageUrls: [
      '/images/TUMBLER%20JUAN/1791566225198.jpg',
      '/images/TUMBLER%20JUAN/1791566225246.jpg',
      '/images/TUMBLER%20JUAN/1791566225276.jpg',
      '/images/TUMBLER%20JUAN/1791566225301.jpg',
      '/images/TUMBLER%20JUAN/1791566225326.jpg',
      '/images/TUMBLER%20JUAN/1791566225547.jpg',
    ],
    imageHint: 'meat tumbler control panel',
  },
  {
    title: 'Automatización de Mezclador Industrial de Carne y Emulsiones',
    category: 'Maquinaria Alimentaria',
    tags: ['Mezcladores', 'Inversión de Giro', 'Seguridad Operaria', 'Alimentos'],
    description: 'Sistema de control eléctrico para mezcladora de doble eje en acero inoxidable. Secuencias automáticas con inversión de marcha temporizada, parada de emergencia de respuesta inmediata y sensores de seguridad en rejilla de carga.',
    imageUrls: [
      '/images/MEZCLADOR%20DE%20CARNE/1791566225715.jpg',
      '/images/MEZCLADOR%20DE%20CARNE/1791566225744.jpg',
      '/images/MEZCLADOR%20DE%20CARNE/1791566225783.jpg',
      '/images/MEZCLADOR%20DE%20CARNE/1791566225814.jpg',
      '/images/MEZCLADOR%20DE%20CARNE/1791566225840.jpg',
      '/images/MEZCLADOR%20DE%20CARNE/1791568785260.jpg',
    ],
    imageHint: 'meat mixer industrial panel',
  },
  {
    title: 'Integración Electromecánica y Mando para Embutidora de Carne',
    category: 'Maquinaria Alimentaria',
    tags: ['Embutidora', 'Control de Dosificación', 'Pedal de Operación', 'Inoxidable'],
    description: 'Armado del cuadro de fuerza y lógica de accionamiento para embutidora de pistón. Control por pedal ergonómico para el operario, regulación de velocidad de avance y límite de carrera de retracción automática.',
    imageUrls: [
      '/images/EMBUTIDORA%20DE%20CARNE/1791575644653.jpeg',
      '/images/EMBUTIDORA%20DE%20CARNE/embutidora_2.jpeg',
      '/images/EMBUTIDORA%20DE%20CARNE/embutidora_3.jpeg',
      '/images/EMBUTIDORA%20DE%20CARNE/embutidora_4.jpeg',
      '/images/EMBUTIDORA%20DE%20CARNE/embutidora_5.jpeg',
    ],
    imageHint: 'meat stuffer sausage machine',
  },
  {
    title: 'Sistema de Control Eléctrico para Elevador de Carga de 2 Niveles',
    category: 'Elevadores & Carga',
    tags: ['Montacargas', '2 Plantas', 'Enclavamiento Eléctrico', 'Seguridad'],
    description: 'Cuadro de control compacto para elevador industrial de dos niveles. Sistema de llamadas y reenvíos, bloqueo de puertas de seguridad, parada de emergencia y control térmico del motorreductor.',
    imageUrls: [
      '/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_1.jpg',
      '/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_2.jpg',
      '/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_3.jpg',
      '/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_4.jpg',
    ],
    imageHint: 'two floor cargo elevator panel',
  },
  {
    title: 'Automatización de Elevador / Volcador de Canastillas para Carne',
    category: 'Elevadores & Carga',
    tags: ['Elevador Cárnico', 'Canastillas', 'Volcador', 'Industria Frigorífica'],
    description: 'Diseño y conexionado del panel de control para elevador vertical y vuelco de carros/canastillas de carne hacia tolvas de procesamiento. Integración de finales de carrera mecánicos e inductivos para ciclo semiautomático seguro.',
    imageUrls: [
      '/images/ELEVADOR%20DE%20CARNE/elevador_carne_1.jpg',
      '/images/ELEVADOR%20DE%20CARNE/elevador_carne_2.jpg',
      '/images/ELEVADOR%20DE%20CARNE/elevador_carne_3.jpg',
      '/images/ELEVADOR%20DE%20CARNE/elevador_carne_4.jpg',
    ],
    imageHint: 'meat bin tipper lift elevator',
  },
  {
    title: 'Desarrollo de Dispositivos de Telemetría IoT y Monitoreo Cloud con ESP32',
    category: 'IoT & Telemetría',
    tags: ['ESP32', 'IoT Cloud', 'Telemetría', 'Sensores Remotos', 'Modbus'],
    description: 'Diseño y programación de hardware a medida con microcontroladores ESP32 para lectura de variables de planta (temperatura, presión, estados de relé) y transmisión inalámbrica hacia dashboards web en la nube y alertas en tiempo real.',
    imageUrls: [
      '/images/PROYECTOS%20ESP32/1791568948948.jpeg',
      '/images/PROYECTOS%20ESP32/1791568949001.jpg',
      '/images/PROYECTOS%20ESP32/1791568949061.jpg',
      '/images/PROYECTOS%20ESP32/1791568949341.jpeg',
      '/images/ESPE32/esp32_1.jpg',
    ],
    imageHint: 'esp32 iot telemetry cloud',
  },
  {
    title: 'Ensamble de Tableros Eléctricos Industriales y Gabinetes Bajo Norma RETIE',
    category: 'Tableros & CCM',
    tags: ['Norma RETIE', 'Gabinetes Industriales', 'Distribución', 'Canaleta Ranurada'],
    description: 'Fabricación de gabinetes de distribución y control general en taller propio. Marquillado termoencogible para cada conductor, cálculo riguroso de barras de cobre, balance de fases y pruebas funcionales FAT antes de entrega.',
    imageUrls: [
      '/images/TABLEROS%20GENERALES/1791568949243.jpg',
      '/images/TABLEROS%20GENERALES/IMG-20250128-WA0015.jpg',
      '/images/TABLEROS%20GENERALES/IMG-20250128-WA0016.jpg',
      '/images/TABLEROS%20GENERALES/IMG-20250322-WA0083.jpg',
      '/images/TABLEROS%20GENERALES/IMG-20250322-WA0105.jpg',
      '/images/TABLEROS%20GENERALES/IMG-20250322-WA0109.jpg',
    ],
    imageHint: 'industrial control panel electrical wiring',
  },
  {
    title: 'Control PID y Automatización de Horno Ciclónico para Secado – Proyecto Indupaddy',
    category: 'Térmicos & Calderas',
    tags: ['Lazo PID', 'Horno Ciclónico', 'PLC & HMI', 'Secado de Arroz'],
    description: 'Programación de lazo PID en PLC para regular la temperatura de salida del horno ciclónico de cascarilla de arroz hacia torres de secado. Coordinación de turbinas centrífugas, dosificador de biomasa y supervisión gráfica desde HMI táctil.',
    imageUrls: [
      '/images/HORNO%20CICLONICO/1791566225988.jpg',
      '/images/HORNO%20CICLONICO/1791566226015.jpg',
      '/images/HORNO%20CICLONICO/1791566226053.jpg',
      '/images/HORNO%20CICLONICO/IMG-20250322-WA0085.jpg',
    ],
    imageHint: 'cyclonic oven pid control drying',
  },
  {
    title: 'Control Térmico y Velocidad para Hiladora Continua de Queso',
    category: 'Maquinaria Alimentaria',
    tags: ['Hiladora', 'Queso', 'Control Térmico', 'Lácteos', 'Variador VFD'],
    description: 'Integración de control de velocidad por variador para sinfines hiladores y regulación de temperatura de agua de amasado. Diseñado para garantizar textura homogénea y cumplimiento de normas sanitarias en plantas de lácteos.',
    imageUrls: [
      '/images/HILADORAS/1791566225020.jpg',
      '/images/HILADORAS/hiladora_frame_4.jpg',
      '/images/HILADORAS/hiladora_frame_1.jpg',
      '/images/HILADORAS/hiladora_frame_2.jpg',
    ],
    imageHint: 'cheese kneading machine automation',
  },
  {
    title: 'Automatización de Filtro de Mangas mediante PLC y HMI',
    category: 'Tableros & CCM',
    tags: ['Filtro de Mangas', 'Neumática', 'PLC & HMI', 'Secuencias'],
    description: 'Desarrollo de un sistema de control automatizado para filtro de mangas mediante PLC y HMI. Secuencia neumática para limpieza secuencial por pulso de aire, supervisión de presión diferencial y ciclos configurables desde pantalla táctil.',
    imageUrls: ['/images/mangas.jpg'],
    imageHint: 'baghouse filter plc automation',
  },
  {
    title: 'Automatización de Proceso de Molidos y Dosificación – Planta Servipetrol',
    category: 'Tableros & CCM',
    tags: ['Pesaje', 'Dosificación', 'Lazos PID', 'Silos', 'HMI'],
    description: 'Programación y comisionamiento de sistema de molienda y dosificación con bazuca de alimentación regulada por PID, monitoreo de niveles en silos con sensores de paleta y sistema de recetas configurable desde HMI para mezclas exactas.',
    imageUrls: ['/images/pesaje_1.jpg', '/images/pesaje_2.jpg', '/images/pesaje_3.jpg'],
    imageHint: 'grinding automation plant recipes',
  },
];

const categories = [
  'Todos',
  'Tableros & CCM',
  'Maquinaria Alimentaria',
  'Elevadores & Carga',
  'Térmicos & Calderas',
  'IoT & Telemetría',
];

const brands = [
  { name: 'SIEMENS', path: '/images/MARCAS/marca2.png', hint: 'siemens logo' },
  { name: 'WEG', path: '/images/MARCAS/marca1.png', hint: 'weg logo' },
  { name: 'DELTA', path: '/images/MARCAS/DELTA.png', hint: 'delta electronics logo' },
  { name: 'KINCO', path: '/images/MARCAS/KINCO.png', hint: 'kinco automation logo' },
  { name: 'XINJE', path: '/images/MARCAS/XINJE.png', hint: 'xinje automation logo' },
  { name: 'HYUNDAI', path: '/images/MARCAS/HYUNDAI.png', hint: 'hyundai electric logo' },
  { name: 'AUTONICS', path: '/images/MARCAS/AUTONICS.png', hint: 'autonics sensors and controllers logo' },
  { name: 'LOVATO ELECTRIC', path: '/images/MARCAS/Lovatoelectric.png', hint: 'lovato electric logo' },
  { name: 'EBCHQ', path: '/images/MARCAS/EBCHQ.png', hint: 'ebchq electrical logo' },
  { name: 'DIXUS', path: '/images/MARCAS/DIXUS.jpg', hint: 'dixus logo' },
  { name: 'ESP32 / ESPRESSIF', path: '/images/MARCAS/ESP32.jpg', hint: 'esp32 espressif systems logo' },
  { name: 'BOSCH REXROTH', path: '/images/MARCAS/marca7.png', hint: 'bosch rexroth logo' },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <span>Experiencia Comprobada en Campo</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Portafolio de Proyectos Ejecutados
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto text-justify sm:text-center">
            Proyectos reales donde he integrado diseño de planos en CAD, ensamble normativo de tableros, lógica en PLC/HMI y telemetría industrial directamente en planta.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border',
                  isActive
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-card text-foreground/80 border-border hover:bg-muted hover:text-primary'
                )}
              >
                {cat}
                {cat === 'Todos' && ` (${projects.length})`}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-card border border-border"
            >
              <CardHeader className="p-0 relative">
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-background/95 backdrop-blur-md text-foreground font-semibold text-[11px] px-2.5 py-1 rounded-full border border-border/80 shadow-xs">
                    {project.category}
                  </span>
                </div>
                <Carousel
                  plugins={[autoplayPlugin.current]}
                  opts={{ loop: project.imageUrls.length > 1 }}
                  className="w-full"
                >
                  <CarouselContent>
                    {project.imageUrls.map((imageUrl, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative w-full aspect-video bg-muted/40">
                          <Image
                            src={imageUrl}
                            alt={`${project.title} - Imagen ${imgIndex + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-t-lg"
                            data-ai-hint={project.imageHint}
                            priority={index < 3 && imgIndex === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.imageUrls.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground h-8 w-8" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground h-8 w-8" />
                    </>
                  )}
                </Carousel>
              </CardHeader>
              <CardContent className="p-5 flex-grow flex flex-col">
                <CardTitle className="text-base font-bold text-foreground mb-2 leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground text-justify leading-relaxed flex-grow">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-muted/80 text-foreground/75 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brands Section */}
        <div className="text-center border-t border-border/80 pt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Marcas y tecnologías que integro en mis proyectos
          </h3>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-1">
                    <Card className="bg-card border-border shadow-2xs hover:shadow-sm hover:border-primary/40 transition-all">
                      <CardContent className="flex h-20 items-center justify-center p-3 relative">
                        <Image
                          src={brand.path}
                          alt={`${brand.name} Logo`}
                          width={110}
                          height={50}
                          style={{ objectFit: 'contain', maxHeight: '44px' }}
                          data-ai-hint={brand.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
