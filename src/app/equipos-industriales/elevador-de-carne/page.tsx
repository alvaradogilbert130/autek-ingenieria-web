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

export default function ElevadorDeCarnePage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_1.jpg",
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_2.jpg",
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_3.jpg",
    "/images/ELEVADOR%20DE%20CARNE/elevador_carne_4.jpg",
    "/images/ELEVADOR%202%20PLANTAS/foto_elevador_sencillo_3.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para un Elevador de Carne Industrial por carro o canastilla.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Elevador de Carne Industrial",
      message: "Hola, me interesa conocer más sobre los Elevadores de Carne por medio de carro o canastilla. Solicito una cotización formal y asesoría de altura y capacidad.",
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
            service: "Cotización Elevador de Carne Industrial",
            message: "Hola, me interesa conocer más sobre los Elevadores de Carne por medio de carro o canastilla. Solicito una cotización formal y asesoría de altura y capacidad.",
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
      title: "Mayor seguridad para los operarios",
      description: "Previene accidentes laborales al automatizar el proceso de elevación y volteo de cargas pesadas.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de esfuerzo físico",
      description: "Elimina la necesidad de cargar manualmente materias primas pesadas, mejorando la ergonomía de la planta.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor tiempo de carga de equipos",
      description: "Optimiza los ciclos de producción acelerando el llenado de mezcladoras, embutidoras o tolvas.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Incremento de productividad",
      description: "Reduce tiempos muertos entre lotes de producción mediante un vaciado rápido y eficiente.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Integración con líneas automatizadas",
      description: "Sistemas de control preparados para interactuar eléctricamente con los equipos receptores de carga.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Mezcladores de carne", desc: "Alimentación rápida de masas cárnicas y materias primas preparadas." },
    { name: "Tolvas de alimentación", desc: "Carga continua de tolvas de embutidoras, porcionadoras u otros sistemas." },
    { name: "Procesos de embutidos", desc: "Suministro constante a líneas de producción de embutidos frescos y cocidos." },
    { name: "Plantas cárnicas industriales", desc: "Solución robusta para el manejo de carga vertical en salas de desposte y empaque." }
  ];

  const features = [
    "Sistema de elevación mediante piñón y cadena.",
    "Control automático de parada.",
    "Micros de final de carrera para posicionamiento preciso.",
    "Descarga por gravedad.",
    "Diseño robusto para trabajo industrial continuo.",
    "Construcción en acero inoxidable."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Equipos de Carga y Dosificación vertical
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Elevadores de Carne
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Transporte vertical seguro y automatizado
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Los elevadores de carne permiten elevar carros de transporte hasta una altura determinada para descargar automáticamente el producto dentro de mezcladores, tolvas o equipos de procesamiento.
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
              alt="Elevadores de Carne"
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
                  El sistema utiliza un mecanismo de piñón y cadena diseñado para soportar cargas pesadas de forma segura y eficiente.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  La posición final de elevación es controlada mediante micros de final de carrera que garantizan una parada precisa del equipo en el punto de descarga.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Una vez alcanzada la posición programada, el material es transferido por gravedad al equipo receptor, reduciendo esfuerzos manuales y mejorando la seguridad operativa.
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
                    Complete el formulario y le enviaremos una oferta económica (especifique la altura de la tolva receptora y el peso máximo a elevar).
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
                          <FormLabel>Detalles de Altura/Carga</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Necesito un elevador con altura de volcado de 1.8 metros, para elevar carros estándar de 200 litros..."
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
