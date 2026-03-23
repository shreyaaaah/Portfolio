import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, MapPin } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const educationCards = [
    { label: "Degree", value: "B.Tech CSE (AIML)", icon: <GraduationCap size={20} className="text-primary" /> },
    { label: "College", value: "Lovely Professional University", icon: <Building2 size={20} className="text-secondary" /> },
    { label: "Location", value: "Phagwara, India", icon: <MapPin size={20} className="text-purple-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 glow-primary" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
           className="w-full"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Hi, I am Shreya S
          </h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base mb-12">
            <p>
              I am an AI/ML Engineer and Full-Stack Developer driven by a deep curiosity to transform complex data into intelligent, real-world applications. I thrive at the intersection of powerful Machine Learning architectures and modern web technologies, actively specializing in the MERN stack to build systems that are both computationally robust and intuitively designed.
            </p>
            <p>
              Beyond just writing clean and scalable code, I am deeply passionate about creating seamless user experiences. I approach every challenge as an opportunity to push technical boundaries, constantly exploring emerging AI advancements and refining my design aesthetics to grow both as an engineer and a creator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-3xl p-6 flex flex-col gap-4 border border-white/[0.05] hover:border-primary/20 transition-colors cursor-pointer"
                style={{ background: "rgba(20, 20, 25, 0.4)" }}
              >
                <div className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center shrink-0">
                     {card.icon}
                   </div>
                   <div>
                     <p className="text-xs text-muted-foreground font-medium mb-1">{card.label}</p>
                     <p className="text-sm font-semibold text-foreground">{card.value}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
