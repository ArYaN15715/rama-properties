import { ConsultationModal } from "@/components/ConsultationModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, MapPin, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Property {
  id: number;
  name: string;
  location: string;
  sqft: string;
  price: string;
  type: string;
  imageUrl: string;
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Bhikaji Cama Business Centre",
    location: "Bhikaji Cama Place, New Delhi",
    sqft: "4,500 sq ft",
    price: "₹3.2L / month",
    type: "Office Space",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: 2,
    name: "Connaught Place Corporate Suite",
    location: "Connaught Place, New Delhi",
    sqft: "2,800 sq ft",
    price: "₹2.1L / month",
    type: "Office Space",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 3,
    name: "Aerocity Commercial Tower",
    location: "Aerocity, IGI Airport Area",
    sqft: "8,000 sq ft",
    price: "₹5.8L / month",
    type: "Commercial Floor",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    id: 4,
    name: "Nehru Place Premium Office",
    location: "Nehru Place, South Delhi",
    sqft: "3,200 sq ft",
    price: "₹2.4L / month",
    type: "Office Space",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  },
  {
    id: 5,
    name: "Cyber City Investment Asset",
    location: "DLF Cyber City, Gurugram",
    sqft: "6,500 sq ft",
    price: "₹4.5L / month",
    type: "Investment Property",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: 6,
    name: "Saket Select City Retail",
    location: "Saket, South Delhi",
    sqft: "1,800 sq ft",
    price: "₹1.6L / month",
    type: "Retail Space",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
];

export function FeaturedProperties() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section data-ocid="featured.section" className="py-28 bg-muted/20">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">
            Available Now
          </p>
          <h2 className="text-display-md text-foreground mb-4">
            Featured Office Spaces
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Hand-selected commercial properties in Delhi NCR's most prestigious
            business locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROPERTIES.map((prop, i) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              index={i}
              onEnquire={() => setConsultationOpen(true)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button
            type="button"
            data-ocid="featured.view_all_button"
            variant="outline"
            onClick={() => setConsultationOpen(true)}
            className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/60 px-10 h-12 font-semibold tracking-wide transition-smooth"
          >
            Request Full Portfolio
          </Button>
        </motion.div>
      </div>

      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </section>
  );
}

function PropertyCard({
  property,
  index,
  onEnquire,
}: {
  property: Property;
  index: number;
  onEnquire: () => void;
}) {
  return (
    <motion.div
      data-ocid={`featured.item.${index + 1}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth border border-border bg-card cursor-pointer"
      onClick={onEnquire}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0d1f3c]/0 group-hover:bg-[#0d1f3c]/75 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Button
              type="button"
              data-ocid={`featured.enquire_button.${index + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                onEnquire();
              }}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 shadow-elevated"
            >
              Enquire Now
            </Button>
          </motion.div>
        </div>
        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#0d1f3c]/80 backdrop-blur-sm text-white border-0 text-[10px] font-semibold tracking-wide">
            {property.type}
          </Badge>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-base text-foreground mb-2 line-clamp-1">
          {property.name}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-4">
          <MapPin size={12} className="text-accent flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Maximize2 size={12} />
            <span>{property.sqft}</span>
          </div>
          <div className="flex items-center gap-1 text-foreground font-semibold text-sm">
            <BadgeIndianRupee size={13} className="text-accent" />
            <span>{property.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
