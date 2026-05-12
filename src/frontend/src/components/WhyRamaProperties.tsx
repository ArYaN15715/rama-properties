import { BarChart2, Briefcase, Network, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AUTHORITY_POINTS = [
  {
    icon: BarChart2,
    title: "Commercial Market Expertise",
    description:
      "10+ years of focused experience in Delhi NCR's commercial property market. We know every building, every landlord, and every opportunity.",
  },
  {
    icon: Network,
    title: "Prime Delhi Network",
    description:
      "Exclusive access to Bhikaji Cama Place and premium commercial zones. Our relationships open doors that are never publicly listed.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description:
      "ROI-focused advisory for commercial investors. We analyse yield potential, market trends, and exit strategies for every asset.",
  },
  {
    icon: Briefcase,
    title: "Professional Negotiation Support",
    description:
      "End-to-end deal management from initial offer to final handover. We protect your interests at every stage of the transaction.",
  },
];

const STATS = [
  { value: 20, suffix: "+", label: "Commercial Projects" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 4.4, suffix: "\u2605", label: "Client Rating", isDecimal: true },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
  inView,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const duration = 1400;
    const steps = isDecimal ? 44 : 60;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - (1 - progress) * (1 - progress);
      const val = target * eased;
      setCount(
        isDecimal ? Math.min(val, target) : Math.min(Math.round(val), target),
      );
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export function WhyRamaProperties() {
  const lineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-28 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs tracking-widest uppercase font-semibold mb-4"
          >
            Why Choose Us
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-display-md text-foreground max-w-lg leading-tight">
              Delhi's Trusted
              <br />
              <span className="relative inline-block">
                Commercial Advisors
                <motion.span
                  ref={lineRef}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.0,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.3,
                  }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent origin-left block"
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md lg:text-right">
              With deep roots in Bhikaji Cama Place and an expansive network
              across Delhi NCR, we deliver market intelligence and negotiation
              expertise that drives better outcomes.
            </p>
          </div>
        </motion.div>

        {/* Authority points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {AUTHORITY_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                data-ocid={`about.authority.${i + 1}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.34, 1.1, 0.64, 1],
                }}
                whileHover={{ y: -4 }}
                className="group flex gap-5 p-7 rounded-xl border border-border bg-card shadow-subtle hover:shadow-elevated hover:border-primary/25 transition-all duration-300"
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/[0.07] flex items-center justify-center group-hover:bg-primary/[0.13] transition-smooth"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon size={22} className="text-primary" />
                </motion.div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-base text-foreground">
                      {point.title}
                    </h3>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                    className="h-px w-16 bg-accent/50 mb-3 origin-left"
                  />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip with animated counters */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-ocid={`about.stat.${i + 1}`}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={statsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="text-center py-8 px-4 rounded-xl bg-[#0d1f3c] border border-white/5 hover:border-accent/25 transition-all duration-300 cursor-default"
            >
              <p className="text-display-sm text-white mb-1.5 font-display font-bold">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  inView={statsInView}
                />
              </p>
              <p className="text-white/50 text-xs tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
