import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    company: "Director, TechCorp",
    text: "Excellent service and professional support throughout our office search. Rama Properties found us the perfect space in Bhikaji Cama in record time.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    company: "MD, Capital Ventures",
    text: "Very good dealer in Bhikaji Cama. Found us the perfect commercial floor with terms that exceeded our expectations. Highly professional team.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "CEO, Delhi Investments",
    text: "Highly professional team with deep market knowledge. Their investment advisory saved us months of research and secured a prime asset. Recommended.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "Partner, Prime Realty",
    text: "Outstanding experience from consultation to deal closure. 5 stars! The team's negotiation support was invaluable to our commercial expansion strategy.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: startAuto/stopAuto are stable refs
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  return (
    <section data-ocid="testimonials.section" className="py-28 bg-[#07122a]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-widest uppercase font-semibold mb-3"
          >
            Client Testimonials
          </motion.p>
          <h2 className="text-display-md text-white mb-4">
            Trusted by Business Leaders
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-base">
            What Delhi's executives say about working with Rama Properties.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.34, 1.1, 0.64, 1],
              }}
              whileHover={{ y: -8, scale: 1.015 }}
              onClick={() => setActiveIndex(i)}
              className={`glass-effect-dark rounded-xl p-7 cursor-pointer transition-all duration-350 ${
                activeIndex === i
                  ? "border border-accent/40 shadow-elevated"
                  : "border border-white/5 hover:border-white/20"
              }`}
              style={{
                boxShadow:
                  activeIndex === i
                    ? "0 0 0 1px rgba(204,0,0,0.35), 0 12px 32px rgba(0,0,0,0.4)"
                    : undefined,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.35 }}
              >
                <Quote size={20} className="text-accent/60 mb-4" />
              </motion.div>
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].slice(0, t.rating).map((n, si) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08 + si * 0.06 + 0.2,
                      duration: 0.25,
                      type: "spring",
                    }}
                  >
                    <Star size={12} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 line-clamp-4">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicator dots with smooth transitions */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.name}
              type="button"
              data-ocid={`testimonials.tab.${i + 1}`}
              onClick={() => {
                setActiveIndex(i);
                startAuto();
              }}
              animate={{
                width: activeIndex === i ? 24 : 8,
                backgroundColor:
                  activeIndex === i
                    ? "rgba(204,0,0,1)"
                    : "rgba(255,255,255,0.25)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-2 rounded-full hover:opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
