import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <div>
          <h4 className="text-base font-semibold text-foreground">
            Gilbert Alvarado — Consultoría en Ingeniería Mecatrónica & Automatización Industrial
          </h4>
          <p className="text-xs text-muted-foreground mt-1 max-w-3xl">
            Servicios de diseño, ensamble de tableros y control de procesos con el respaldo técnico de Autek • Bucaramanga, Santander, Colombia
          </p>
        </div>

        <div className="w-full border-t border-border/60 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
          <p>&copy; {currentYear} Gilbert Alvarado (Autek Colombia). Todos los derechos reservados.</p>
          <p>Bucaramanga, Santander • Colombia</p>
        </div>
      </div>
    </footer>
  );
}
