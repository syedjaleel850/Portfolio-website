import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '../Assets/Profile.png'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative container mx-auto ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-2">
              <span className="text-2xl">👋</span>
              <span>Hello, I am</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Syed<span className="text-primary">Jaleel</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-foreground/90">
              I love turning real-world problems <span className="text-primary">into fast, scalable web solutions.</span> | MERN Stack Developer
            
            </p>
            <p className="text-lg text-muted-foreground">
              I build scalable and user-focused web applications using the MERN stack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-md bg-primary hover:bg-primary/90">
                <a href="#projects">View My Work →</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md border-border bg-blue-600 hover:bg-blue-700 text-white">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md border-border bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://drive.google.com/file/d/17cqqaKgh-0mN6MV5mTe41PNbVS0bidSi/view?usp=sharing">Resume</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/syedjaleel" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/syedjaleel" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:syedjaleel850@gmail.com" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/917092199238" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center animate-fade-in-left">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <img 
              src={profile} 
              alt="Syed Jaleel" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>
      </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;