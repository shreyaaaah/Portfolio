import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Machine Learning Made Easy",
    issuer: "Lovely Professional University",
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12320371_893_20_08_2025.pdf?_gl=1%2Au3i2xd%2A_gcl_au%2AMTE2MDAyNzgxMi4xNzYzOTE5NjAz%2A_ga%2AMTA5Mzk2MDQ1LjE2OTI1NTAwMjU.%2A_ga_WKLQCVXZ47%2AczE3NjM5MTk2MDMkbzE3JGcxJHQxNzYzOTE5NjE3JGo0NiRsMCRoMA"
  },
  {
    title: "Artificial Intelligence Industrial Training",
    issuer: "Placify Technologies",
    link: "https://drive.google.com/file/d/1Fl_VE-nyqMRnn4Hw6AuEPIcICBmjutXY/view?usp=drive_link"
  },
  {
    title: "Artificial Intelligence Virtual Internship",
    issuer: "AI Brain (Placify)",
    link: "https://drive.google.com/file/d/1KFlMCfkDIKLeHYFjAZyKgDXKTgfUnEIU/view?usp=drive_link"
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/SE1YODOQQ3ZW"
  },
  {
    title: "CyberSec Symposium 2.0",
    issuer: "iGen Community",
    link: "https://drive.google.com/file/d/1Wz-RrIXngvmTavcvEhgh6QS6XzdYAOnQ/view?usp=drive_link"
  }
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Certifications</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Achievements & Training</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-6 flex flex-col justify-between hover:scale-105 hover:shadow-[0_0_40px_rgba(255,100,200,0.2)] transition-all duration-300 cursor-pointer group h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg leading-snug mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{item.issuer}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
