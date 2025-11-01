
import React from 'react';
import { Code2, Lightbulb, Palette, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background container mx-auto ">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto text-center mb-12 flex flex-col items-center">
          <h2 className="section-title text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            I started coding by building small projects for myself — simple tools to make my daily tasks easier. That curiosity soon grew into a passion for creating full-stack web apps that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I love crafting clean UIs, building efficient APIs, and delivering user-focused digital experiences using technologies like React, Node.js, and MongoDB.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p>Villupuram, India</p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:syedjaleel850@gmail.com" className="hover:text-primary transition-colors">
                  syedjaleel850@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:7092199238" className="hover:text-primary transition-colors">
                  7092199238
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary" />
                <a href="https://www.linkedin.com/in/syedjaleel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/syedjaleel
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Code2 size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Clean Code</h3>
              <p className="text-muted-foreground">Writing maintainable, well-structured code that follows best practices.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Palette size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Responsive UI</h3>
              <p className="text-muted-foreground">Designing interfaces that work flawlessly across all devices.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: '0.3s' }}>
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Collaboration</h3>
              <p className="text-muted-foreground">Working effectively with teams to deliver exceptional results.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: '0.4s' }}>
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Problem Solving</h3>
              <p className="text-muted-foreground">Finding creative solutions to complex technical challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Missing imports:
import { Mail, Phone, Linkedin } from 'lucide-react';
