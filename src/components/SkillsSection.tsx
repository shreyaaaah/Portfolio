import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Brain, Palette, Wrench, Cloud, Lightbulb } from "lucide-react";

const categories = [
  { title: "Programming", icon: Code, skills: ["Python", "C++", "Java", "JavaScript"] },
  { title: "Web Development", icon: Globe, skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB"] },
  { title: "AI / ML", icon: Brain, skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision", "XGBoost", "Pandas", "NumPy"] },
  { title: "UI/UX", icon: Palette, skills: ["Figma", "UI Design", "UX Principles"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "MySQL", "Streamlit", "Flask"] },
  { title: "Other", icon: Cloud, skills: ["Cloud Computing", "DevOps"] },
];

const softSkills = { title: "Soft Skills", icon: Lightbulb, skills: ["Problem-Solving", "Time Management", "Leadership", "Adaptability", "Critical Thinking"] };

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Technical Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
                className="glass rounded-2xl p-6 cursor-pointer transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6),0_0_40px_rgba(255,100,200,0.2)] hover:border-primary/20 group"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={16} className="text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Soft Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
            className="glass rounded-2xl p-6 cursor-pointer transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6),0_0_40px_rgba(255,100,200,0.2)] hover:border-primary/20 group lg:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <softSkills.icon size={16} className="text-primary" />
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{softSkills.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
