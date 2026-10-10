
import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { FileText, Cog, Cpu, Factory, Sliders, Gauge } from 'lucide-react';

const services = [
  {
    icon: <FileText className="h-8 w-8 text-primary mb-3" />,
    title: 'Consultoría y Diseño Eléctrico en CAD',
    description: 'Levantamiento de cargas, cálculo de protecciones, esquemas unifilares y desarrollo de planos normativos bajo RETIE/NTC 2050 para tableros nuevos o regularización de instalaciones.',
  },
  {
    icon: <Cog className="h-8 w-8 text-primary mb-3" />,
    title: 'Ensamble y Fabricación de Tableros Eléctricos',
    description: 'Montaje de gabinetes de control, centros de control de motores (CCM) y distribución en baja tensión. Ruteo ordenado, marquillado técnico y pruebas funcionales FAT en taller.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary mb-3" />,
    title: 'Automatización y Programación de PLC / HMI',
    description: 'Desarrollo de secuencias automáticas, lógica de seguridad e interfaces de operación amigables para maquinaria y líneas continuas (Kinco, Siemens, Delta, Xinje).',
  },
  {
    icon: <Factory className="h-8 w-8 text-primary mb-3" />,
    title: 'Aliado Electromecánico para Fabricantes OEM',
    description: 'Servicio llave en mano para talleres y constructores de maquinaria. Tú construyes la estructura mecánica; yo diseño, armo y programo el sistema de control listo para entregar.',
  },
  {
    icon: <Sliders className="h-8 w-8 text-primary mb-3" />,
    title: 'Control de Procesos e Instrumentación',
    description: 'Lazos de control PID para quemadores, secadores, hornos ciclónicos y calderas. Integración de sensores de temperatura (PT100/termocuplas), transmisores de nivel y presión.',
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary mb-3" />,
    title: 'Variadores de Velocidad, Arrancadores y Factor de Potencia',
    description: 'Parametrización y comunicación Modbus RTU en variadores de frecuencia (VFD), arrancadores suaves para protección de motores y bancos de condensadores para corrección reactiva.',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Servicios & Consultoría Especializada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompañamiento técnico directo de ingeniero mecatrónico para optimizar la confiabilidad, seguridad y automatización de sus procesos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center pb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-foreground leading-snug">{service.title}</h3>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed text-justify">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
