import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import internshipCert from "@/assets/internship-cert.png";
import compCommsCert from "@/assets/computer communications-cert.png";
import symposiumCert from "@/assets/symposium-cert.png";
import pythonCert from "@/assets/python-cert.png";
import brainwaveCert from "@/assets/brainwave-cert.png";

const certs = [
  {
    title: "Brainwave Blitz - 2nd Position",
    issuer: "Competition",
    date: "Sept 2025",
    bullets: ["Secured 2nd position in quick-thinking competition.", "Demonstrated mental agility under high pressure.", "Solved complex analytical puzzles efficiently."],
    skills: ["Problem Solving", "Critical Thinking"],
    image: brainwaveCert,
    link: "https://drive.google.com/file/d/1m0SbqQ8uWQUo41wbQaebEwWLm2GNZMtB/view?usp=drive_link"
  },
  { 
    title: "Virtual Internship Certificate", 
    issuer: "Placify Technologies", 
    date: "Apr 2025",
    bullets: ["Completed virtual internship program successfully.", "Demonstrated core problem-solving capabilities.", "Contributed effectively to team-based analytical tasks."],
    skills: ["Internship", "Teamwork"],
    image: internshipCert, 
    link: "https://drive.google.com/file/d/1KFlMCfkDIKLeHYFjAZyKgDXKTgfUnEIU/view?usp=drive_link" 
  },
  { 
    title: "Computer Communications", 
    issuer: "Coursera", 
    date: "Nov 2024",
    bullets: ["Mastered computer communication layers and protocols.", "Learned networking fundamentals from top instructors.", "Studied TCP/IP architecture in extensive depth."],
    skills: ["Networking", "TCP/IP"],
    image: compCommsCert,
    link: "https://www.coursera.org/account/accomplishments/specialization/SE1YODOQQ3ZW" 
  },
  { 
    title: "Symposium 2.0", 
    issuer: "Lovely Professional University", 
    date: "Apr 2024",
    bullets: ["Participated in Symposium 2.0 technical event at LPU.", "Engaged with student tech communities.", "Explored innovative hardware and software projects."],
    skills: ["Leadership", "Communication"],
    image: symposiumCert,
    link: "https://drive.google.com/file/d/1Wz-RrIXngvmTavcvEhgh6QS6XzdYAOnQ/view?usp=drive_link" 
  },
  { 
    title: "Python Completion Certificate", 
    issuer: "CSE Pathsala", 
    date: "Mar 2024",
    bullets: ["Mastered core Python concepts and syntax.", "Completed hands-on coding and algorithmic challenges.", "Developed foundational analytical scripting skills."],
    skills: ["Python", "Algorithms"],
    image: pythonCert,
    link: "https://drive.google.com/file/d/133XWdwpVvfT6a5_3K4ikyoA-Y5JD6CxI/view?usp=drive_link"
  }
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-3">Achievements</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-10">Certificates & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group glass rounded-[20px] overflow-hidden flex flex-col h-full bg-[#0e0e11] border border-white/[0.05] hover:border-secondary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,100,200,0.1)]"
            >
              {/* Image Header */}
              <div className="w-full aspect-video relative flex-shrink-0 bg-black/40 overflow-hidden">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      const sibling = e.currentTarget.nextElementSibling?.nextElementSibling as HTMLElement;
                      if (sibling && sibling.tagName === 'SPAN') sibling.style.display = 'block';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-black/20">
                     <span className="text-secondary/50 text-xs font-semibold uppercase tracking-widest">{c.issuer}</span>
                     <span className="text-muted-foreground/30 mt-2 text-xs">Image Placeholder</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent pointer-events-none" />

                {/* Floating Date Tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/10 shadow-xl">
                  {c.date}
                </div>
                
                <span className="text-muted-foreground text-sm hidden font-medium tracking-wide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">Image Not Found</span>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-foreground text-xl md:text-2xl mb-5 leading-tight group-hover:text-secondary transition-colors duration-300">
                  {c.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {c.bullets.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-secondary/70 font-mono text-sm leading-tight mt-0.5">{'>'}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {c.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-white/[0.03] border border-white/10 text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer (Button) */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 mt-auto">
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] transition-colors border border-white/[0.05] text-sm font-semibold text-foreground group/btn"
                  >
                    <ExternalLink size={16} className="group-hover/btn:text-secondary transition-colors" /> View Certificate
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.01] border border-white/[0.03] text-sm font-semibold text-muted-foreground/50 opacity-50 cursor-not-allowed">
                    <ExternalLink size={16} /> Link Missing
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
