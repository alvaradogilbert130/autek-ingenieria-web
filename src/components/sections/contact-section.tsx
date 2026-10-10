
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import React from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  companyRole: z.string().optional(),
  phone: z.string().min(7, {
    message: "Por favor, introduce un número de teléfono o WhatsApp válido.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  clientType: z.string({
    required_error: "Por favor, selecciona el tipo de cliente.",
  }).min(1, { message: "Por favor, selecciona el tipo de cliente." }),
  projectRequirement: z.string({
    required_error: "Por favor, selecciona el requerimiento principal.",
  }).min(1, { message: "Por favor, selecciona el requerimiento principal." }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const whatsappNumber = "573167835605"; 
  const whatsappMessage = "Hola Ing. Gilbert, quiero cotizar el diseño y ensamble de un tablero o automatización para mi proyecto"; 
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyRole: "",
      phone: "",
      email: "",
      clientType: "",
      projectRequirement: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Recibida",
            description: result.message,
          });
          form.reset();
        } else {
          toast({
            title: "Error al Enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo o escríbeme directamente por WhatsApp.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <section id="contacto" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            Consultoría & Cotización Directa
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed">
            Asesoría técnica y cotización personalizada de ingeniero mecatrónico para fabricantes OEM y plantas industriales. Solicita una propuesta técnica o contáctame directamente por WhatsApp para evaluar tu proyecto sin intermediarios.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <a href="mailto:autekingenieria@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                autekingenieria@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a href={`tel:+${whatsappNumber}`} className="text-muted-foreground hover:text-primary transition-colors">
                (+57) 316 7835605
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">Bucaramanga - Santander, Colombia</span>
            </div>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-md">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5 fill-white" />
              Contactar al Ingeniero por WhatsApp
            </Link>
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Nombre Completo *</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="custom-form-input"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">
                    Empresa y Cargo <span className="text-xs text-slate-500 font-normal">(Opcional)</span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Ej. Industrias ABC - Gerente de Planta / Director de Proyecto"
                      className="custom-form-input"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="custom-form-label">Teléfono / WhatsApp *</FormLabel>
                    <FormControl>
                      <input
                        type="tel"
                        placeholder="Ej. +57 300 123 4567"
                        className="custom-form-input"
                        {...field}
                        disabled={isPending}
                      />
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
                    <FormLabel className="custom-form-label">Correo Electrónico *</FormLabel>
                    <FormControl>
                      <input
                        type="email"
                        placeholder="carlos@empresa.com"
                        className="custom-form-input"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="clientType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Tipo de Cliente *</FormLabel>
                  <FormControl>
                    <select
                      className="custom-form-select"
                      {...field}
                      disabled={isPending}
                    >
                      <option value="" disabled hidden>
                        Seleccione el tipo de cliente
                      </option>
                      <option value="Fabricante de Maquinaria (OEM)">Fabricante de Maquinaria (OEM)</option>
                      <option value="Planta de Producción / Empresa">Planta de Producción / Empresa</option>
                      <option value="Integrador / Contratista">Integrador / Contratista</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectRequirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Requerimiento Principal *</FormLabel>
                  <FormControl>
                    <select
                      className="custom-form-select"
                      {...field}
                      disabled={isPending}
                    >
                      <option value="" disabled hidden>
                        Seleccione su requerimiento
                      </option>
                      <option value="Fabricación de tablero nuevo con planos">Fabricación de tablero nuevo con planos</option>
                      <option value="Automatización / Programación de máquina (PLC/HMI)">Automatización / Programación de máquina (PLC/HMI)</option>
                      <option value="Modernización / Migración de control existente">Modernización / Migración de control existente</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Detalles del Proyecto *</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Describa las especificaciones técnicas del tablero, número de motores, señales, marca requerida de componentes o alcances del proyecto..."
                      className="custom-form-input min-h-[110px] resize-y"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold text-white transition-colors" disabled={isPending}>
              {isPending ? 'Procesando...' : 'Solicitar Propuesta Técnica'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
