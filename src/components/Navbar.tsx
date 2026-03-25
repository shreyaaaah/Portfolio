import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const navbarHeight = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", targetId);
    }
    // Delay closing the menu by 300ms to allow the smooth scroll animation to begin unimpeded
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* Desktop Container Wrapper */}
        <div className="w-full flex items-center justify-between">
          <a href="#" className="hidden md:block text-lg font-bold tracking-tight text-foreground">
            Shreya S
          </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="text-sm font-medium px-5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsLight(!isLight)}
              className="p-2 sm:p-2.5 rounded-full border border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-white/[0.05] transition-all"
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>
          <li>
            <a
              href="/SHREYA%20S%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shreya_S_Resume.pdf"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110 glow-primary transition-all duration-300 shadow-lg"
            >
              <Download size={16} /> Download
            </a>
          </li>
        </ul>
        </div>

        {/* Mobile Navigation (Floating Pill Scrollable) */}
        <div className="md:hidden w-full flex justify-center pb-2">
          <div className="flex items-center overflow-x-auto no-scrollbar glass rounded-[2rem] px-1 py-1 sm:px-2 sm:py-2 border border-white/[0.08] w-[95vw] shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative" style={{ background: "rgba(10, 10, 15, 0.85)", backdropFilter: "blur(20px)" }}>
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="relative px-5 py-3 text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 text-muted-foreground hover:text-white flex-shrink-0 active:scale-95 text-shadow-sm rounded-full active:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            
            {/* Theme Toggle within Mobile Pill */}
            <button
              onClick={() => setIsLight(!isLight)}
              className="ml-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all flex-shrink-0 active:scale-95"
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
