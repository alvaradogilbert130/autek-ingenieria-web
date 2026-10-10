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

export default function MezcladorDeCarnePage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/MEZCLADOR%20DE%20CARNE/1791566225715.jpg",
    "/images/MEZCLADOR%20DE%20CARNE/1791566225744.jpg",
    "/images/MEZCLADOR%20DE%20CARNE/1791566225783.jpg",
    "/images/MEZCLADOR%20DE%20CARNE/1791566225814.jpg",
    "/images/MEZCLADOR%20DE%20CARNE/1791568785260.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para la Mezcladora Industrial de Carne en acero inoxidable.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Mezclador de Carne Industrial",
      message: "Hola, me interesa conocer más sobre la Mezcladora Industrial de Carne en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
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
            service: "Cotización Mezclador de Carne Industrial",
            message: "Hola, me interesa conocer más sobre la Mezcladora Industrial de Carne en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
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
      title: "Mezclas homogéneas y repetibles",
      description: "Garantiza un amasado y distribución uniforme de ingredientes en cada lote de producción.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de errores operativos",
      description: "La automatización del proceso minimiza el factor de error humano en la dosificación y tiempos.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor desperdicio de materia prima",
      description: "Dosificación exacta de líquidos y control de formulación que reducen mermas y desperdicios.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Control preciso de formulaciones",
      description: "Almacenamiento y ejecución de recetas estandarizadas a través del sistema HMI.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Incremento de productividad",
      description: "Ciclos de mezclado optimizados y menor manipulación manual para aumentar el rendimiento por hora.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Trazabilidad del proceso",
      description: "Monitoreo en tiempo real de temperatura, caudales y tiempos para control de calidad completo.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Embutidos", desc: "Especial para salchichas, salchichones y embutidos de todo tipo." },
    { name: "Hamburguesas", desc: "Amasado preciso para dar la textura y homogeneidad requerida." },
    { name: "Chorizos", desc: "Distribución uniforme de carnes, grasas y condimentos." },
    { name: "Carne marinada", desc: "Incorporación y absorción homogénea de aditivos y salmuera." },
    { name: "Procesos cárnicos industriales", desc: "Ideal para cualquier procesamiento continuo y a gran escala." }
  ];

  const features = [
    "Dosificación automática de líquidos mediante caudalímetro.",
    "Electroválvula de control para ingreso preciso de agua.",
    "Pantalla HMI para operación y configuración.",
    "Gestión de recetas de producción.",
    "Configuración de tiempos de mezclado.",
    "Control de velocidad mediante variador de frecuencia.",
    "Monitoreo de temperatura del proceso.",
    "Monitoreo de caudal en tiempo real.",
    "Construcción sanitaria en acero inoxidable."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Línea de Procesamiento de Carnes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mezclador Industrial de Carne Automatizado
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Mezcla uniforme, control preciso y recetas programables
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Nuestro mezclador industrial de carne ha sido diseñado para optimizar los procesos de producción cárnica mediante automatización avanzada, garantizando mezclas homogéneas, dosificación precisa de líquidos y repetibilidad en cada lote de producción.
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
              src="/images/MEZCLADOR%20DE%20CARNE/1791566225715.jpg"
              alt="Mezclador Industrial de Carne Automatizado"
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
                  El sistema permite la incorporación automática de agua u otros líquidos mediante una electroválvula controlada por caudalímetro, asegurando que cada receta reciba exactamente la cantidad programada.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  La operación es gestionada mediante una pantalla HMI intuitiva que permite configurar y almacenar recetas de producción, ajustar velocidades de mezclado y supervisar variables críticas del proceso.
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
                    Complete el formulario y le enviaremos una oferta económica ajustada a su capacidad de producción (50kg, 100kg, 200kg o más).
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
                          <FormLabel>Requerimientos Especiales</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero capacidad de 100 kg por tanda, con volcamiento neumático..."
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
