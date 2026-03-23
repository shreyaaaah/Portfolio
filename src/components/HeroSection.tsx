import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { useState, useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const roles = [
  "I'm a Problem Solver",
  "I'm an ML Enthusiast",
  "I'm an AI Innovator",
  "I'm a Full-Stack Developer"
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary to-secondary rounded-full blur-[160px] opacity-[0.12]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.p variants={item} className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            AI/ML Engineer · Full Stack Developer · UI/UX Designer
          </motion.p>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1] mb-2">
            Shreya S
          </motion.h1>
          
          <motion.div variants={item} className="h-[48px] sm:h-[56px] lg:h-[72px] mb-6 overflow-hidden relative flex items-center">
            <AnimatePresence mode="popLayout">
              <motion.h2
                key={roleIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-gradient pb-2 whitespace-nowrap absolute"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={item} className="text-base leading-relaxed text-muted-foreground max-w-lg mb-8 mt-2">
            Building intelligent systems with a focus on Machine Learning and user-centric design. An enthusiastic problem solver skilled in the MERN stack and UI/UX, turning complex ideas into scalable, real-world applications.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 glow-blue"
          >
            View Projects <ExternalLink size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground text-sm font-semibold hover:bg-white/[0.06] transition-all duration-300"
          >
            <Mail size={15} /> Hire Me
          </a>
          <a
            href="/SHREYA%20S%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Shreya_S_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-muted-foreground text-sm font-semibold hover:text-foreground hover:border-white/[0.16] transition-all duration-300 shimmer"
          >
            Download Resume <Download size={15} />
          </a>
        </motion.div>
      </motion.div>

      {/* Image Container with Framer Motion Hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="order-1 lg:order-2 flex justify-center relative cursor-pointer"
        whileHover="hover"
      >
        <motion.div 
          className="relative z-10"
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Animated Glow Behind Image */}
          <motion.div 
             className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[100px] scale-110"
             initial={{ opacity: 0.2 }}
             variants={{ hover: { opacity: 0.6, scale: 1.2, transition: { duration: 0.5 } } }}
          />
          
          {/* Main Profile Picture Blob */}
          <motion.div
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-[80px] p-1.5 bg-gradient-to-tr from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift overflow-visible shadow-[0_0_40px_rgba(255,100,200,0.15)]"
            variants={{ hover: { y: -10, boxShadow: "0 10px 50px rgba(255,100,200,0.4)" } }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profileImg}
              alt="Shreya S"
              className="w-full h-full object-cover rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-[80px] bg-background"
            />
          </motion.div>
          
          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            variants={{ hover: { y: -15, scale: 1.08, transition: { duration: 0.3 } } }}
            className="absolute -right-4 top-10 lg:-right-12 lg:top-16 glass rounded-2xl px-6 py-4 shadow-xl border-white/[0.1] z-20 backdrop-blur-xl"
            style={{ background: "linear-gradient(145deg, rgba(30,30,40,0.8) 0%, rgba(20,20,30,0.8) 100%)" }}
          >
            <p className="text-xs text-muted-foreground font-medium mb-1">Projects Completed</p>
            <p className="text-3xl font-bold text-gradient">7+</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">Scroll</span>
        <a href="#about" className="animate-bounce mt-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
