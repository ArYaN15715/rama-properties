import { ArrowRight, Building2, MapPin, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

interface CategoryCard {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  color: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    icon: Building2,
    title: "Office Spaces",
    description:
      "Premium Grade-A offices in Delhi's most sought-after business districts with modern amenities.",
    tag: "Most Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    color: "from-[#0d1f3c]/80 to-[#0d1f3c]/40",
  },
  {
    icon: MapPin,
    title: "Commercial Floors",
    description:
      "Entire commercial floors and buildings for growing enterprises needing scalable space.",
    tag: "",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    color: "from-[#0d1f3c]/80 to-[#0d1f3c]/40",
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    description:
      "High-yield commercial assets in prime Delhi zones with proven ROI potential.",
    tag: "High ROI",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    color: "from-[#0d1f3c]/80 to-[#0d1f3c]/40",
  },
  {
    icon: Users,
    title: "Retail Spaces",
    description:
      "Prime retail and showroom locations across Delhi NCR's highest footfall corridors.",
    tag: "",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    color: "from-[#0d1f3c]/80 to-[#0d1f3c]/40",
  },
];

interface PropertyCategoriesProps {
  onConsultationOpen: () => void;
}

export function PropertyCategories({
  onConsultationOpen,
}: PropertyCategoriesProps) {
  return (
    <section
      id="properties"
      data-ocid="properties.section"
      className="py-28 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
            What We Offer
          </motion.p>
          <h2 className="text-display-md text-foreground mb-4">
            Commercial Property Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Specialist advisory across every commercial property category in
            Delhi NCR.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.title}
              cat={cat}
              index={i}
              onConsultationOpen={onConsultationOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  index,
  onConsultationOpen,
}: {
  cat: CategoryCard;
  index: number;
  onConsultationOpen: () => void;
}) {
  const Icon = cat.icon;
  return (
    <motion.div
      data-ocid={`properties.item.${index + 1}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.34, 1.1, 0.64, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onConsultationOpen}
      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth border border-border"
      style={{ minHeight: 320 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cat.imageUrl}
          alt={cat.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-112"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${cat.color} group-hover:opacity-95 transition-opacity duration-300`}
        />
      </div>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 0 1.5px rgba(204,0,0,0.55), 0 0 30px 0 rgba(204,0,0,0.18)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-20 p-7 flex flex-col justify-between h-full"
        style={{ minHeight: 320 }}
      >
        <div>
          {cat.tag && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="inline-block bg-accent/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider mb-4"
            >
              {cat.tag}
            </motion.span>
          )}
          <motion.div
            className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 transition-smooth"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.35 }}
          >
            <Icon size={20} className="text-white" />
          </motion.div>
          <h3 className="font-display font-bold text-lg text-white mb-2">
            {cat.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {cat.description}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-white text-xs font-semibold tracking-wide group-hover:gap-3.5 transition-all duration-300">
          Enquire Now
          <motion.span className="group-hover:translate-x-1 transition-transform duration-200">
            <ArrowRight size={14} />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
