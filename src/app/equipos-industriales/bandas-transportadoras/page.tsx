"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function BandasTransportadorasPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_1.jpg",
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_2.jpg",
    "/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_3.jpg",
    "/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_1.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para un sistema de Bandas Transportadoras Industriales.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización de Bandas Transportadoras",
      message: "Hola, me interesa conocer más sobre las Bandas Transportadoras Industriales. Solicito una cotización formal y asesoría de diseño.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización de Bandas Transportadoras",
            message: "Hola, me interesa conocer más sobre las Bandas Transportadoras Industriales. Solicito una cotización formal y asesoría de diseño.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Mayor productividad",
      description: "Optimiza los tiempos de traslado de materiales e insumos, permitiendo una mayor tasa de procesamiento.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Flujo constante de material",
      description: "Mantiene la línea de producción alimentada de forma continua para evitar paradas y cuellos de botella.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor esfuerzo operativo",
      description: "Reduce la manipulación física por parte del personal, disminuyendo riesgos de fatiga y lesiones laborales.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Integración con procesos automatizados",
      description: "Diseño preparado para conectarse con sensores, pesadoras, envasadoras y otros equipos de la línea.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de tiempos muertos",
      description: "Equipos de alta fiabilidad y bajo mantenimiento, minimizando interrupciones en la producción.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Plantas cárnicas", desc: "Transporte higiénico y seguro de canales, cortes y productos procesados." },
    { name: "Procesamiento de alimentos", desc: "Movimiento de materias primas, frutas, verduras y masas en ambientes limpios." },
    { name: "Líneas de empaque", desc: "Desplazamiento eficiente de envases, bandejas y cajas selladas hacia embalaje." },
    { name: "Transporte de materias primas", desc: "Alimentación continua de tolvas, mezcladoras y estaciones de dosificación." },
    { name: "Procesos de clasificación y distribución", desc: "Separación y direccionamiento de productos según características de proceso." }
  ];

  const features = [
    "Control de velocidad mediante variador de frecuencia.",
    "Operación continua y confiable.",
    "Diseño modular.",
    "Fabricación en acero inoxidable.",
    "Adaptación a diferentes capacidades y longitudes.",
    "Fácil limpieza y mantenimiento."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Sistemas de Logística y Transporte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bandas Transportadoras Industriales
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Transporte eficiente para procesos continuos de producción
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Diseñamos y fabricamos bandas transportadoras industriales para optimizar el flujo de materiales dentro de plantas de procesamiento alimentario y líneas de producción.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-5 w-5 fill-white" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/ELEVADOR%20DE%20CARNE/elevador_carne_1.jpg"
              alt="Bandas Transportadoras Industriales"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  Nuestras bandas transportadoras permiten el movimiento seguro y eficiente de materias primas y productos terminados, reduciendo tiempos de operación y minimizando la manipulación manual.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  El sistema incorpora variador de frecuencia para controlar la velocidad de transporte según las necesidades específicas de cada proceso.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica ajustada a su proyecto (especifique longitud, ancho y peso máximo).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detalles de Diseño</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero una banda de 4 metros de longitud, ancho de 40cm en PVC sanitario para transporte de pollo..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4 fill-white" /> Hablar por WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
