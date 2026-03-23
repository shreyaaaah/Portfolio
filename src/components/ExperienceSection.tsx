import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mlCert from "@/assets/ml-cert.png";
import aiCert from "@/assets/ai-cert.png";
import { ExternalLink } from "lucide-react";

const experience = [
  { 
    title: "Machine Learning Training", 
    place: "LPU", 
    period: "Jul 2025", 
    bullets: [
      "Completed comprehensive training workflows at LPU.",
      "Built data preprocessing and model evaluation pipelines.",
      "Trained scalable models covering practical ML use cases."
    ],
    skills: ["Python", "Scikit-Learn", "Data Science"],
    image: mlCert,
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12320371_893_20_08_2025.pdf?_gl=1%2Au3i2xd%2A_gcl_au%2AMTE2MDAyNzgxMi4xNzYzOTE5NjAz%2A_ga%2AMTA5Mzk2MDQ1LjE2OTI1NTAwMjU.%2A_ga_WKLQCVXZ47%2AczE3NjM5MTk2MDMkbzE3JGcxJHQxNzYzOTE5NjE3JGo0NiRsMCRoMA"
  },
  { 
    title: "Artificial Intelligence Training", 
    place: "Placify Technologies", 
    period: "Apr 2025", 
    bullets: [
      "Completed rigorous AI training program with real-world applications.",
      "Implemented supervised and unsupervised learning algorithms.",
      "Learned model deployment and production integration strategies."
    ],
    skills: ["AI", "Python", "Deep Learning"],
    image: aiCert,
    link: "https://drive.google.com/file/d/1Fl_VE-nyqMRnn4Hw6AuEPIcICBmjutXY/view?usp=drive_link"
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Training & Growth</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group glass rounded-[20px] overflow-hidden flex flex-col h-full bg-[#0e0e11] border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,100,200,0.1)]"
            >
              {/* Image Header */}
              <div className="w-full aspect-video relative flex-shrink-0 bg-black/40 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    const sibling = e.currentTarget.nextElementSibling?.nextElementSibling as HTMLElement;
                    if (sibling && sibling.tagName === 'SPAN') sibling.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Date Tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/10 shadow-xl">
                  {e.period}
                </div>
                
                <span className="text-muted-foreground text-sm hidden font-medium tracking-wide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">Image Not Found</span>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-foreground text-xl md:text-2xl mb-5 leading-tight group-hover:text-primary transition-colors duration-300">
                  {e.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {e.bullets.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary/70 font-mono text-sm leading-tight mt-0.5">{'>'}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {e.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-white/[0.03] border border-white/10 text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer (Button) */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 mt-auto">
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] transition-colors border border-white/[0.05] text-sm font-semibold text-foreground group/btn"
                >
                  <ExternalLink size={16} className="group-hover/btn:text-primary transition-colors" /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
