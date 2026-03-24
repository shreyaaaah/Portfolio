import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
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
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Shreya S
        </a>

        {/* Desktop */}
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

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-white/[0.06]"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleScroll(e, l.href)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => { setIsLight(!isLight); setOpen(false); }}
                  className="flex justify-center items-center gap-2 text-center text-sm font-medium px-5 py-2.5 rounded-lg border border-white/[0.08] text-foreground hover:bg-white/[0.05] transition-all"
                >
                  {isLight ? <><Moon size={16} /> Dark Mode</> : <><Sun size={16} /> Light Mode</>}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="block text-center text-sm font-medium px-5 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 cursor-pointer"
                >
                  Hire Me
                </a>
                <a
                  href="/SHREYA%20S%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shreya_S_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center gap-2 text-center text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white glow-primary"
                >
                  <Download size={16} /> Download
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
