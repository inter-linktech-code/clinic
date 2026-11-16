
import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "27730423979";

export function getWhatsAppLink(country = "General") {
  const message =
    country === "General"
      ? "Hello Sarah's Women's Clinic. I would like to make a general enquiry."
      : `Hello Sarah's Women's Clinic. I would like to make an enquiry regarding your information and services for ${country}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppButton({ country = "General", className = "" }) {
  return (
    <a
      href={getWhatsAppLink(country)}
      className={`swc-floating-whatsapp ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact Sarah's Women's Clinic on WhatsApp${country !== "General" ? ` - ${country}` : ""}`}
    >
      <MessageCircle size={25} />
      <span className="swc-whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
