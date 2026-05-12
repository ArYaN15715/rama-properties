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
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">
            Client Testimonials
          </p>
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActiveIndex(i)}
              className={`glass-effect-dark rounded-xl p-7 cursor-pointer transition-all duration-300 ${
                activeIndex === i
                  ? "border border-accent/40 shadow-elevated"
                  : "border border-white/5 hover:border-white/15"
              }`}
              style={{
                boxShadow:
                  activeIndex === i
                    ? "0 0 0 1px rgba(204,0,0,0.35), 0 12px 32px rgba(0,0,0,0.4)"
                    : undefined,
              }}
            >
              <Quote size={20} className="text-accent/60 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].slice(0, t.rating).map((n) => (
                  <Star key={n} size={12} className="fill-accent text-accent" />
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

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              data-ocid={`testimonials.tab.${i + 1}`}
              onClick={() => {
                setActiveIndex(i);
                startAuto();
              }}
              className={`rounded-full transition-smooth ${
                activeIndex === i
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
