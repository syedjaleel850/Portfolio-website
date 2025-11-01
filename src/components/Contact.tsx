import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <a href="mailto:syedjaleel850@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors">
                      syedjaleel850@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <a href="tel:7092199238" className="text-lg text-foreground hover:text-primary transition-colors">
                      +91 7092199238
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                    <p className="text-lg text-foreground">Villupuram, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-foreground">Connect with me</h4>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/syed-jaleel-2b7878281/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/20 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/syedjaleel850" target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-gray-800/10 text-gray-800 rounded-lg hover:bg-gray-800/20 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="mailto:syedjaleel850@gmail.com" 
                     className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <form className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Let's Connect 🚀
                </Button>
                
                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                  <a
                    href="https://www.linkedin.com/in/syedjaleel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/syedjaleel850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
