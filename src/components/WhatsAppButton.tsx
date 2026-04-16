import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919390370782?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.19_145)] text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
