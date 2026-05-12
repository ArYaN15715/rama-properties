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

      {/* Secondary drifting orb */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,58,107,0.3) 0%, transparent 70%)",
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
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-widest uppercase font-semibold mb-5"
          >
            Get Started Today
          </motion.p>
          <h2 className="text-display-md text-white mb-5 leading-tight text-shimmer">
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="button"
                data-ocid="cta.consultation_button"
                onClick={onConsultationOpen}
                size="lg"
                className="bg-accent hover:bg-accent/85 text-white font-semibold tracking-wide px-10 h-13 shadow-elevated transition-smooth text-sm"
              >
                Book Consultation
              </Button>
            </motion.div>
            <motion.a
              href="tel:+919999999999"
              data-ocid="cta.call_button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 border border-white/25 text-white hover:bg-white/8 hover:border-white/50 h-13 px-8 text-sm font-semibold tracking-wide rounded-md transition-smooth"
            >
              <Phone size={15} />
              Call Now: +91 99999 99999
            </motion.a>
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
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                className="text-white/40 text-xs tracking-wide hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
