import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="container mx-auto bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Syed Jaleel</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Full Stack developer that always seeks to create high-quality, scalable web development.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/syedjaleel850"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/syedjaleel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:syedjaleel850@gmail.com"
                className="p-2 bg-card hover:bg-primary/10 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Frontend Development</li>
              <li className="text-muted-foreground">Backend Development</li>
              <li className="text-muted-foreground">Database Design</li>
              <li className="text-muted-foreground">UI/UX Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:syedjaleel850@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  syedjaleel850@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href="tel:7092199238"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Available for freelance / contract work remotely
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Based in Villupuram, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syed Jaleel S. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Designed & Developed with ❤️ using React & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
