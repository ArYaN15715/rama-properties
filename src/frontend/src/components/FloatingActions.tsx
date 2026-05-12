import { CalendarDays, MessageCircle, Phone, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FloatingActionsProps {
  onConsultationOpen: () => void;
}

export function FloatingActions({ onConsultationOpen }: FloatingActionsProps) {
  const [expanded, setExpanded] = useState(false);

  const actions = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919999999999",
      color: "bg-[#25D366] hover:bg-[#1fbd59]",
      ocid: "floating.whatsapp_button",
    },
    {
      id: "call",
      icon: Phone,
      label: "Call Now",
      href: "tel:+919999999999",
      color: "bg-primary hover:bg-primary/90",
      ocid: "floating.call_button",
    },
    {
      id: "consultation",
      icon: CalendarDays,
      label: "Book Consultation",
      href: null,
      color: "bg-accent hover:bg-accent/90",
      ocid: "floating.consultation_button",
    },
  ];

  return (
    <div
      data-ocid="floating.panel"
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3"
    >
      <AnimatePresence>
        {expanded &&
          actions.map((action, i) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{
                duration: 0.22,
                delay: (actions.length - 1 - i) * 0.06,
              }}
              className="flex items-center gap-2.5"
            >
              <span className="bg-[#0d1f3c]/90 text-white text-xs px-2.5 py-1 rounded-full whitespace-nowrap shadow-elevated backdrop-blur-sm border border-white/10">
                {action.label}
              </span>
              {action.href ? (
                <a
                  href={action.href}
                  target={action.id === "whatsapp" ? "_blank" : undefined}
                  rel={
                    action.id === "whatsapp" ? "noopener noreferrer" : undefined
                  }
                  data-ocid={action.ocid}
                  className={`w-11 h-11 rounded-full ${action.color} text-white flex items-center justify-center shadow-elevated transition-smooth`}
                  aria-label={action.label}
                >
                  <action.icon size={18} />
                </a>
              ) : (
                <button
                  type="button"
                  data-ocid={action.ocid}
                  onClick={() => {
                    setExpanded(false);
                    onConsultationOpen();
                  }}
                  className={`w-11 h-11 rounded-full ${action.color} text-white flex items-center justify-center shadow-elevated transition-smooth`}
                  aria-label={action.label}
                >
                  <action.icon size={18} />
                </button>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        type="button"
        data-ocid="floating.toggle_button"
        onClick={() => setExpanded(!expanded)}
        className="w-13 h-13 rounded-full bg-[#0d1f3c] hover:bg-[#152d54] text-white flex items-center justify-center shadow-elevated border border-white/10 transition-smooth"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 0 4px rgba(204,0,0,0.18), 0 8px 24px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.93 }}
        aria-label="Contact options"
        style={{ width: 52, height: 52 }}
      >
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {expanded ? <X size={20} /> : <Plus size={20} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
