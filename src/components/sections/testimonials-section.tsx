import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Assuming Avatar is available

// Placeholder testimonial data
const testimonials = [
  {
    quote: "Muy buen servicio técnico. Puntualidad y claridad en el diseño del tablero. Totalmente recomendados.",
    name: "Carlos R.",
    company: "Empresa Agroindustrial XYZ",
    avatar: "https://picsum.photos/100/100?random=7", // Placeholder avatar
    avatarHint: "man smiling",
  },
  {
    quote: "La instalación del variador fue rápida y profesional. El motor ahora funciona mucho más eficiente.",
    name: "Ana M.",
    company: "Manufacturas ABC",
    avatar: "https://picsum.photos/100/100?random=8",
    avatarHint: "woman professional",
  },
   {
    quote: "El mantenimiento preventivo nos ha evitado paradas inesperadas. Excelente atención y conocimiento.",
    name: "Javier G.",
    company: "Constructora Delta",
    avatar: "https://picsum.photos/100/100?random=9",
    avatarHint: "man construction helmet",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Lo Que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                   <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      {/* Fallback uses first letter of first and last name if available */}
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
