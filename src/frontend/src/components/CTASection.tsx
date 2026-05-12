import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

interface CTASectionProps {
  onConsultationOpen: () => void;
}

export function CTASection({ onConsultationOpen }: CTASectionProps) {
  return (
    <section
      id="contact"
      data-ocid="cta.section"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050e1c 0%, #0d1f3c 40%, #1a0505 100%)",
      }}
    >
      {/* Animated gradient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(204,0,0,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-5">
            Get Started Today
          </p>
          <h2 className="text-display-md text-white mb-5 leading-tight">
            Looking for the Right
            <br />
            Commercial Property?
          </h2>
          <p className="text-white/55 text-base mb-12 max-w-xl mx-auto leading-relaxed">
            Get expert consulting tailored to your business goals. No
            obligation, just honest advice from Delhi NCR's most trusted
            commercial advisors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="button"
              data-ocid="cta.consultation_button"
              onClick={onConsultationOpen}
              size="lg"
              className="bg-accent hover:bg-accent/85 text-white font-semibold tracking-wide px-10 h-13 shadow-elevated transition-smooth text-sm"
            >
              Book Consultation
            </Button>
            <a
              href="tel:+919999999999"
              data-ocid="cta.call_button"
              className="inline-flex items-center gap-2.5 border border-white/25 text-white hover:bg-white/8 hover:border-white/50 h-13 px-8 text-sm font-semibold tracking-wide rounded-md transition-smooth"
            >
              <Phone size={15} />
              Call Now: +91 99999 99999
            </a>
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-14 border-t border-white/10 pt-10"
          >
            {[
              "🏢 Commercial Property Experts",
              "📍 Bhikaji Cama Specialists",
              "💼 Investment Advisory",
            ].map((item) => (
              <span key={item} className="text-white/40 text-xs tracking-wide">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
