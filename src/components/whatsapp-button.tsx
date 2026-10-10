import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export function WhatsAppButton() {
  const whatsappNumber = "573167835605";
  const message = "Hola Ing. Gilbert, me gustaría consultar sobre un proyecto de tableros o automatización industrial.";
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
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-14 w-14 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
      </Button>
    </Link>
  );
}
