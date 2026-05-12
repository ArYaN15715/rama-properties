import { Building, CheckCircle, MessageSquare, Search } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Consultation",
    description:
      "Share your space needs, budget, timeline, and business goals with our expert advisors.",
  },
  {
    number: "02",
    icon: Search,
    title: "Curated Space Selection",
    description:
      "We handpick properties that perfectly match your requirements from our exclusive portfolio.",
  },
  {
    number: "03",
    icon: Building,
    title: "Site Visits",
    description:
      "Guided property tours with expert market context and neighbourhood intelligence.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Deal Closure",
    description:
      "Professional negotiation and end-to-end transaction support to a seamless handover.",
  },
];

export function ConsultationProcess() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-28 bg-muted/20"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">
            How We Work
          </p>
          <h2 className="text-display-md text-foreground mb-4">
            Smart Consultation Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            A structured, transparent process designed to get you into the right
            space as quickly as possible.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px overflow-hidden"
            ref={lineRef}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="absolute inset-0 origin-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(26,58,107,0.15), rgba(204,0,0,0.5), rgba(26,58,107,0.15))",
              }}
            />
            {/* Shimmer dot */}
            <motion.div
              initial={{ left: "0%" }}
              animate={lineInView ? { left: "100%" } : { left: "0%" }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2"
              style={{ boxShadow: "0 0 8px 2px rgba(204,0,0,0.4)" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                data-ocid={`services.step.${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex gap-5 relative pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-accent/40 to-border" />
                )}
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-primary/30 bg-card shadow-subtle flex items-center justify-center z-10">
                  <span className="font-display font-bold text-xs text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-accent" />
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const Icon = step.icon;
  return (
    <motion.div
      data-ocid={`services.step.${index + 1}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col items-center text-center cursor-default"
    >
      {/* Number circle */}
      <div className="relative z-10 w-20 h-20 rounded-full border-2 border-border bg-card shadow-subtle flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:shadow-elevated transition-smooth">
        <span className="font-display font-bold text-2xl text-primary group-hover:text-accent transition-smooth">
          {step.number}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-accent flex-shrink-0" />
        <h3 className="font-display font-semibold text-base text-foreground">
          {step.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}
