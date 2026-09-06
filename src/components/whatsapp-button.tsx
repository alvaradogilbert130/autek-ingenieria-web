import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const whatsappNumber = "573167835605";
  const message = "Hola, me gustaría solicitar una cotización.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="icon"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-14 w-14 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M19.5 15.5c-1.1 0-2.15-.35-3.08-.99-.35-.24-.8-.21-1.11.08l-1.61 1.61c-2.61-1.33-4.78-3.5-6.11-6.11l1.61-1.61c.29-.31.32-.76.08-1.11C8.85 6.65 8.5 5.6 8.5 4.5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
        </svg>
      </Button>
    </Link>
  );
}
