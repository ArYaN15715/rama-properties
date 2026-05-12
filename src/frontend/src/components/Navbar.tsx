import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onConsultationOpen: () => void;
}

export function Navbar({ onConsultationOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-ocid="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1f3c]/96 backdrop-blur-xl shadow-elevated border-b border-white/5"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 py-3 px-6 max-w-7xl">
        {/* Logo */}
        <motion.button
          type="button"
          data-ocid="navbar.logo_link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
        >
          <img
            src="/assets/logo-019e16aa-2718-718b-a354-8b642ee0ec24.png"
            alt="Rama Properties"
            className="h-12 w-auto object-contain"
          />
        </motion.button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              onClick={() => scrollTo(link.href)}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                  activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="tel:+919999999999"
            data-ocid="navbar.call_button"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors duration-200"
          >
            <Phone size={15} />
            <span className="hidden lg:inline">+91 99999 99999</span>
          </motion.a>
          <motion.a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="navbar.whatsapp_button"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors duration-200"
          >
            <MessageCircle size={15} />
            <span className="hidden lg:inline">WhatsApp</span>
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              data-ocid="navbar.consultation_button"
              onClick={onConsultationOpen}
              className="bg-accent hover:bg-accent/90 text-white text-sm px-5 h-9 rounded font-semibold tracking-wide transition-smooth btn-press"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          data-ocid="navbar.mobile_menu_button"
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.22 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0d1f3c]/97 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.22 }}
                  className="text-white/80 hover:text-white text-base font-medium text-left transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex gap-3 pt-2 border-t border-white/10">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <Phone size={15} /> Call
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
              <Button
                type="button"
                data-ocid="navbar.mobile_consultation_button"
                onClick={() => {
                  setMobileOpen(false);
                  onConsultationOpen();
                }}
                className="bg-accent hover:bg-accent/90 text-white w-full h-10 font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
