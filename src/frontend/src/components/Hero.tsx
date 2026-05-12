import { Button } from "@/components/ui/button";
import { ArrowDown, Building2, MapPin, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const TRUST_ITEMS = [
  { icon: Building2, label: "Commercial Property Experts" },
  { icon: MapPin, label: "Bhikaji Cama Specialists" },
  { icon: TrendingUp, label: "Investment Advisory" },
];

interface HeroProps {
  onConsultationOpen: () => void;
}

export function Hero({ onConsultationOpen }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToProperties = () => {
    document
      .querySelector("#properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      data-ocid="hero.section"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="/assets/generated/hero-delhi-commercial.dim_1920x1080.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Layered gradient overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1829]/90 via-[#0d1f3c]/75 to-[#0a1829]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1829]/80 via-transparent to-[#0a1829]/30" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(204,0,0,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow badge with bob float */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/15 glass-effect-dark text-white/70 text-sm tracking-widest uppercase animate-bob"
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
          Bhikaji Cama Place, New Delhi
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-display-lg text-white mb-6 leading-[1.08]"
        >
          Find the Right
          <br />
          <span className="text-white/90">Commercial Space</span>
          <br />
          <span className="relative">
            in Delhi.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-accent origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          Professional consulting for office spaces, investments, and commercial
          properties. Trusted advisors for serious business decisions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              data-ocid="hero.consultation_button"
              onClick={onConsultationOpen}
              className="bg-accent hover:bg-accent/90 text-white h-12 px-8 text-sm font-semibold tracking-wide rounded shadow-elevated transition-smooth group"
            >
              Schedule Consultation
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              data-ocid="hero.explore_button"
              variant="outline"
              onClick={scrollToProperties}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 h-12 px-8 text-sm font-semibold tracking-wide rounded bg-transparent transition-smooth"
            >
              Explore Properties
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust strip with staggered entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.14 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2.5 text-white/60 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon size={16} className="text-accent/80" />
              </motion.div>
              <span className="text-sm tracking-wide">{item.label}</span>
              {i < TRUST_ITEMS.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-white/20 ml-4" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        data-ocid="hero.scroll_indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={scrollToProperties}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
