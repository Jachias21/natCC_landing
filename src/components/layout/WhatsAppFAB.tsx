import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/content";

export default function WhatsAppFAB() {
  return (
    <Link
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-forest-700 text-cream-50 p-3.5 rounded-full shadow-lg hover:bg-forest-900 transition-colors"
    >
      <MessageCircle size={22} strokeWidth={1.5} />
    </Link>
  );
}
