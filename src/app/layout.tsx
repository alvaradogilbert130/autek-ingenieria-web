
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import Providers from '@/components/providers'; // Import Providers

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Servicios Eléctricos en Bucaramanga | Variadores, PLC y Tableros',
  description: 'Instalación de variadores de frecuencia, mantenimiento de tableros eléctricos y programación de PLC en Bucaramanga y Santander. Atención inmediata con técnicos especializados.',
  keywords: 'servicios eléctricos Bucaramanga, variadores de frecuencia Santander, mantenimiento tableros eléctricos, programación PLC Bucaramanga, arrancadores suaves Bucaramanga, fallas eléctricas Santander',
  authors: [{ name: 'Autek Ingeniería' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Servicios Eléctricos en Bucaramanga | Variadores, PLC y Tableros',
    description: 'Instalación de variadores de frecuencia, mantenimiento de tableros eléctricos y programación de PLC en Bucaramanga y Santander. Atención inmediata con técnicos especializados.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com',
    siteName: 'Autek Ingeniería',
    images: [
      {
        url: '/images/inicio_1.png', // Imagen destacada para redes sociales
        width: 1200,
        height: 630,
        alt: 'Servicios eléctricos industriales y automatización',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Eléctricos en Bucaramanga | Variadores, PLC y Tableros',
    description: 'Instalación de variadores de frecuencia, mantenimiento de tableros eléctricos y programación de PLC en Bucaramanga y Santander. Atención inmediata con técnicos especializados.',
    images: ['/images/inicio_1.png'], // Imagen para Twitter Cards
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com',
  },
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton />
          <Footer />
          <Toaster /> {/* Add Toaster for notifications */}
        </Providers>
      </body>
    </html>
  );
}
