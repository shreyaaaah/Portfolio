import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-12 relative z-10 bg-background/50 backdrop-blur-md">
    <div className="container mx-auto px-6">
      <div className="flex justify-start mb-8">
        <a href="#" className="flex-shrink-0 text-2xl font-bold tracking-tight text-foreground">
          Shreya S
        </a>
      </div>

      <div className="flex justify-center items-center gap-8 mb-10">
        <a href="https://github.com/shreyaaaah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Github className="w-5 h-5" strokeWidth={1.5} />
        </a>
        <a href="https://www.linkedin.com/in/shreya-s-vijay/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Linkedin className="w-5 h-5" strokeWidth={1.5} />
        </a>
        <a href="mailto:shreyashanthivijay@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Mail className="w-5 h-5" strokeWidth={1.5} />
        </a>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shreya S All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with passion for <span className="text-primary font-bold tracking-wide">AI & Design</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
