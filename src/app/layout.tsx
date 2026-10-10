
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://autekcolombia.com'),
  title: 'Gilbert Alvarado | Automatización, PLC y Tableros Eléctricos',
  description: 'Servicios de ingeniería por Gilbert Alvarado (Autek): tableros de control, programación de PLC, variadores y soluciones IoT en Bucaramanga y Colombia.',
  keywords: 'Gilbert Alvarado, Autek, ingenieria mecatronica bucaramanga, tableros de control, programacion de plc, variadores de frecuencia, soluciones iot colombia, diseño tableros electricos, retie',
  authors: [{ name: 'Gilbert Alvarado', url: 'https://autekcolombia.com' }],
  creator: 'Gilbert Alvarado',
  robots: 'index, follow',
  openGraph: {
    title: 'Gilbert Alvarado | Automatización, PLC y Tableros Eléctricos',
    description: 'Servicios de ingeniería por Gilbert Alvarado (Autek): tableros de control, programación de PLC, variadores y soluciones IoT en Bucaramanga y Colombia.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://autekcolombia.com',
    siteName: 'Gilbert Alvarado - Autek Ingeniería',
    images: [
      {
        url: '/images/foto_personal.jpg',
        width: 1200,
        height: 630,
        alt: 'Gilbert Alvarado | Automatización, PLC y Tableros Eléctricos',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilbert Alvarado | Automatización, PLC y Tableros Eléctricos',
    description: 'Servicios de ingeniería por Gilbert Alvarado (Autek): tableros de control, programación de PLC, variadores y soluciones IoT en Bucaramanga y Colombia.',
    images: ['/images/foto_personal.jpg'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://autekcolombia.com',
  },
  icons: {
    icon: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gilbert Alvarado | Autek Ingeniería',
  url: 'https://autekcolombia.com',
  founder: {
    '@type': 'Person',
    name: 'Gilbert Alvarado',
  },
  description: 'Diseño y ensamble de tableros eléctricos, programación de PLC, variadores de frecuencia y soluciones IoT en Bucaramanga y Colombia.',
  telephone: '+57-316-7835605',
  email: 'autekingenieria@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bucaramanga',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Santander',
    },
    {
      '@type': 'Country',
      name: 'Colombia',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
