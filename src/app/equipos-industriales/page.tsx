import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Settings, ShieldAlert, Cpu } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export const metadata: Metadata = {
  title: 'Equipos Industriales en Bucaramanga | Maquinaria en Acero Inoxidable',
  description: 'Diseño y fabricación de maquinaria industrial, bandas transportadoras, elevadores de carne y calderas en Bucaramanga. Ingeniería a la medida.',
  keywords: 'maquinaria industrial Bucaramanga, hiladora de queso Santander, mezcladores de carne Bucaramanga, bandas transportadoras Santander, calderas industriales',
};

export default function EquiposIndustrialesPage() {
  const categories = [
    {
      title: 'Industria Alimentaria',
      description: 'Sistemas automáticos y semiautomáticos en acero inoxidable para procesamiento de alimentos. Diseños higiénicos y eficientes que cumplen normas sanitarias (INVIMA).',
      image: '/images/HILADORAS/1791566225020.jpg',
      icon: <Cpu className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Hiladora Industrial de Queso', href: '/equipos-industriales/hiladora-de-queso' },
        { label: 'Tanques de Almacenamiento de Leche', href: '/equipos-industriales/tanques-de-leche' },
        { label: 'Mezclador de Carne', href: '/equipos-industriales/mezclador-de-carne' },
      ],
    },
    {
      title: 'Transporte de Materiales',
      description: 'Sistemas de bandas transportadoras y elevadores mecánicos diseñados para un flujo ágil, continuo y seguro de productos en su línea de empaque o procesamiento.',
      image: '/images/ELEVADOR%20DE%20CARNE/elevador_carne_1.jpg',
      icon: <Settings className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Bandas Transportadoras', href: '/equipos-industriales/bandas-transportadoras' },
        { label: 'Elevadores de Carne (por carro/canastilla)', href: '/equipos-industriales/elevador-de-carne' },
      ],
    },
    {
      title: 'Calderas Industriales',
      description: 'Equipos de calentamiento y generación de vapor de alta eficiencia para procesos de cocción, pasteurización, esterilización y limpieza a presión en plantas.',
      image: '/images/CALDERAS/caldera_gas_1.jpg',
      icon: <ShieldAlert className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Calderas de Vapor y Gas', href: '/equipos-industriales/calderas' },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent uppercase tracking-wider text-sm font-semibold mb-3 block">
            Ingeniería y Fabricación B2B
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Equipos Industriales para Optimizar su Producción
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
            Diseñamos y comercializamos equipos industriales orientados a mejorar la productividad, reducir tiempos operativos y garantizar procesos más eficientes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#categorias">Explorar Categorías</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
              <Link href="/#contacto">Hablar con un Ingeniero</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categorias" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Categorías de Maquinaria</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nuestras soluciones abarcan sectores críticos de la manufactura y la agroindustria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.title} className="flex flex-col overflow-hidden shadow-lg border-none hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative h-48 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 bg-secondary rounded-lg">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed text-justify">
                    {cat.description}
                  </CardDescription>
                  
                  <div className="space-y-2 pt-2 border-t border-border">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Equipos Disponibles:</span>
                    <ul className="space-y-2">
                      {cat.products.map((prod) => (
                        <li key={prod.label}>
                          <Link href={prod.href} className="text-sm text-[#0052cc] hover:text-accent font-semibold flex items-center gap-1 transition-colors">
                            <span className="text-accent">•</span> {prod.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-primary hover:bg-primary/95 text-primary-foreground flex items-center justify-center gap-2">
                    <Link href={cat.products[0].href}>
                      Ver Equipos <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-muted py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-3">¿Tiene un proyecto o requerimiento de equipo especial?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fabricamos maquinaria según los planos o necesidades específicas de su línea de producción. Solicite asesoría sin compromiso.
          </p>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
            <Link href="https://wa.me/573167835605?text=Hola,%20quisiera%20cotizar%20un%20equipo%20industrial%20a%20medida." target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5 fill-white" />
              Cotizar por WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
