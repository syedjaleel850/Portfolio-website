
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Python Programming',
      issuer: 'Guvi',
      date: 'July 2023',
      link: 'https://drive.google.com/file/d/1fLBJJn-czS1qupO1bDMOfi8JZ-WKeS0w/view?usp=sharing',
    },
    {
      title: 'Introduction to Deep Learning in Python',
      issuer: 'DataCamp',
      date: 'February 2025',
      link: 'https://drive.google.com/file/d/1R2FaPLqKRrd1iw--Gc5yX4fbfipyWIHL/view?usp=sharing',
    },
    {
      title: 'The Web Development Bootcamp',
      issuer: 'Eudonix',
      date: 'January 2025',
      link: 'https://drive.google.com/file/d/1W2hGcP-WFrVUSeAbzpVmpDHd-k7OTuSe/view?usp=sharing',
    },
  ];

  return (
    <section id="certificates" className="container mx-auto py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground">Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            Continuous learning and professional development credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary">
                <Award size={32} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              
              {cert.link && (
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1.5" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
