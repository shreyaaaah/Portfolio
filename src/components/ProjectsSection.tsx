import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import projectHr from "@/assets/project-hr.jpg";
import projectAqi from "@/assets/project-aqi.png";
import projectFuzzy from "@/assets/project-fuzzy.png";

const projects = [
  {
    title: "Smart HR Assistant (ATS Score Predictor)",
    date: "Oct 2025",
    bullets: [
      "Engineered an ML + LLM-based resume scoring system for automated ATS pipeline evaluation.",
      "Integrated Natural Language Processing (NLP) to parse context and accurately select candidates.",
      "Generated dynamic, role-specific interview questions by extracting latent semantic features."
    ],
    tech: ["Python", "Machine Learning", "LLM", "NLP"],
    image: projectHr,
    github: "https://github.com/shreyaaaah/Smart-HR-Assistant",
  },
  {
    title: "BreatheWise – Smart AQI Predictor",
    date: "Jul 2025",
    bullets: [
      "Developed a web-based Air Quality Index (AQI) prediction system for real-time assessment.",
      "Architected ML pipelines using OpenWeather data to generate precise AQI computations.",
      "Delivered a Streamlit interface displaying pollutants and predicted versus actual AQI trends."
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "OpenWeather API"],
    image: projectAqi,
    github: "https://github.com/shreyaaaah/AQI_PREDICTOR",
  },
  {
    title: "Fuzzy Logic Controller for Air Conditioning",
    date: "Mar 2025",
    bullets: [
      "Engineered a fuzzy logic-based temperature control system utilizing real-time sensor metrics.",
      "Defined custom membership functions and adaptive rule sets to drive optimal thermal decision-making.",
      "Generated immediate responsive feedback through optimized inference algorithms, ensuring stability."
    ],
    tech: ["Python", "Scikit-Fuzzy", "MATLAB", "Sensor Modules"],
    image: projectFuzzy,
    github: "https://github.com/shreyaaaah/group_2_Int_256",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Premium Artifacts</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group glass rounded-[20px] overflow-hidden flex flex-col h-full bg-[#0e0e11] border border-white/[0.05] hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,100,200,0.15)] cursor-pointer"
            >
              {/* Image Header */}
              <div className="w-full aspect-video relative flex-shrink-0 bg-black/40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Date Tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/10 shadow-xl">
                  {p.date}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-foreground text-xl md:text-2xl mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {p.bullets.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary/70 font-mono text-sm leading-tight mt-0.5">{'>'}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-white/[0.03] border border-white/10 text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer (Button) */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] transition-colors border border-white/[0.05] text-sm font-semibold text-foreground group/btn"
                >
                  <Github size={16} className="group-hover/btn:text-primary transition-colors" /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
