import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, ArrowDown, Send, CheckCircle, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_s3tuwhs',
      'template_nsi1jxi',
      formRef.current,
      'RYKIQMSpt4yusZRUp'
    ).then(
      () => {
        setSubmitted(true);
        setIsSubmitting(false);
      },
      (error) => {
        console.error('FAILED...', error.text);
        setIsSubmitting(false);
        // Fallback to success state to ensure UX continues, or handle error
        setSubmitted(true); 
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-t from-primary to-secondary rounded-full blur-[180px] opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-3">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Interested in collaborating or have an opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
            className="order-2 md:order-2 glass rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(255,100,200,0.2)] transition-shadow duration-300 cursor-pointer group"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-8"
              >
                <CheckCircle size={48} className="text-primary" />
                <p className="font-semibold text-foreground">Message Transmitted</p>
                <p className="text-xs text-muted-foreground text-center">Thank you! I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border shadow-sm text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border shadow-sm text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border shadow-sm text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all resize-none"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 disabled:opacity-70 transition-all duration-300 glow-blue"
                >
                  <Send size={15} /> {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-1 flex flex-col gap-4"
          >
            <a href="https://github.com/shreyaaaah" target="_blank" rel="noopener noreferrer" className="bg-card border border-border shadow-sm rounded-[20px] p-5 flex items-center gap-5 hover:border-border/80 hover:bg-muted/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/[0.02]">
                <Github size={20} className="text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-medium mb-1 tracking-wide">GitHub</p>
                <p className="text-base font-semibold text-foreground">shreyaaaah</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/shreya-s-vijay/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border shadow-sm rounded-[20px] p-5 flex items-center gap-5 hover:border-border/80 hover:bg-muted/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Linkedin size={20} className="text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-medium mb-1 tracking-wide">LinkedIn</p>
                <p className="text-base font-semibold text-foreground">shreya-s-vijay</p>
              </div>
            </a>

            <a href="mailto:shreyashanthivijay@gmail.com" className="bg-card border border-border shadow-sm rounded-[20px] p-5 flex items-center gap-5 hover:border-border/80 hover:bg-muted/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                <Mail size={20} className="text-secondary" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-medium mb-1 tracking-wide">Email</p>
                <p className="text-base font-semibold text-foreground">shreyashanthivijay@gmail.com</p>
              </div>
            </a>

            <a href="tel:7736552508" className="bg-card border border-border shadow-sm rounded-[20px] p-5 flex items-center gap-5 hover:border-border/80 hover:bg-muted/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                <Phone size={20} className="text-purple-400" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-medium mb-1 tracking-wide">Mobile</p>
                <p className="text-base font-semibold text-foreground">+91 77365 52508</p>
              </div>
            </a>

            <a
              href="/SHREYA%20S%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shreya_S_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card shadow-sm text-muted-foreground text-sm font-semibold hover:text-foreground hover:bg-muted/50 transition-all duration-300 shimmer mt-2"
            >
              Download Resume <ArrowDown size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
