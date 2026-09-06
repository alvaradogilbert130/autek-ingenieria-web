import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Autek Ingenieria. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
        </div>
      </div>
    </footer>
  );
}
