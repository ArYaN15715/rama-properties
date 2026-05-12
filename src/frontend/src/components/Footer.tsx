import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  Properties: [
    { label: "Office Spaces", href: "#properties" },
    { label: "Commercial Floors", href: "#properties" },
    { label: "Investment", href: "#properties" },
    { label: "Retail Spaces", href: "#properties" },
  ],
  Services: [
    { label: "Consulting", href: "#services" },
    { label: "Investment Advisory", href: "#services" },
    { label: "Negotiation Support", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer data-ocid="footer" className="bg-[#050e1c] border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/logo-019e16aa-2718-718b-a354-8b642ee0ec24.png"
                alt="Rama Properties"
                className="h-11 w-auto mb-5"
              />
              <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
                Premium office space and commercial property advisory in Delhi
                NCR. Bhikaji Cama Place's most trusted consultants.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Bhikaji+Cama+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/40 hover:text-white/70 transition-colors text-xs"
                >
                  <MapPin
                    size={13}
                    className="flex-shrink-0 mt-0.5 text-accent/70"
                  />
                  Bhikaji Cama Place, New Delhi — 110066
                </a>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors text-xs"
                >
                  <Phone size={13} className="flex-shrink-0 text-accent/70" />
                  +91 99999 99999
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/40 hover:text-accent/80 transition-colors text-xs"
                >
                  <MessageCircle
                    size={13}
                    className="flex-shrink-0 text-accent/70"
                  />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
            >
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white/75 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {year} Rama Properties. All rights reserved. Bhikaji Cama
            Place, New Delhi.
          </p>
          <p className="text-white/20 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/45 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
