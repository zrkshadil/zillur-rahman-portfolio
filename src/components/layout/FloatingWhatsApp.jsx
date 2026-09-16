import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export const FloatingWhatsApp = () => {
  const { enabled, number, defaultMessage } = siteConfig.whatsapp;

  // If not enabled or no number specified, hide automatically
  if (!enabled || !number || !number.trim()) {
    return null;
  }

  const cleanNumber = number.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(defaultMessage || "Hello Zillur Rahman");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <aside
      className="fixed bottom-6 right-6 z-40"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 border border-emerald-400/30 group"
        aria-label="Chat directly with Zillur Rahman on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
