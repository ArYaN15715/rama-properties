import { BarChart2, Briefcase, Network, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

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
  { value: "20+", label: "Commercial Projects" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.4★", label: "Client Rating" },
  { value: "10+", label: "Years Experience" },
];

export function WhyRamaProperties() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

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
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-4">
            Why Choose Us
          </p>
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
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-5 p-7 rounded-xl border border-border bg-card shadow-subtle hover:shadow-elevated hover:border-primary/25 transition-smooth"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/[0.07] flex items-center justify-center group-hover:bg-primary/[0.13] transition-smooth">
                  <Icon size={22} className="text-primary" />
                </div>
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

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-ocid={`about.stat.${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-8 px-4 rounded-xl bg-[#0d1f3c] border border-white/5"
            >
              <p className="text-display-sm text-white mb-1.5 font-display font-bold">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
