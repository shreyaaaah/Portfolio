import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    { label: "B.Tech CSE (AIML)", place: "Lovely Professional University", year: "2023–2027" },
    { label: "12th Grade", place: "97.5% Aggregate", year: "2022" },
    { label: "10th Grade", place: "95% Aggregate", year: "2020" },
  ];

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Education Heading */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Learning</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Education
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full glow-primary mt-2" />
            </div>

            <div className="relative border-l border-white/[0.1] ml-5 md:ml-10 space-y-12 pb-4">
              {education.map((e, i) => (
                <motion.div 
                  key={i} 
                  className="relative pl-8 md:pl-12"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[6px] top-2 w-[11px] h-[11px] rounded-full bg-primary glow-primary" />
                  
                  <motion.div 
                    className="glass rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(255,100,200,0.15)] transition-shadow duration-300 cursor-pointer group"
                    style={{ background: "rgba(20, 20, 25, 0.4)", border: "1px solid rgba(255,255,255,0.05)" }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h4 className="font-semibold text-foreground text-xl">{e.label}</h4>
                      <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {e.year}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground">{e.place}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
