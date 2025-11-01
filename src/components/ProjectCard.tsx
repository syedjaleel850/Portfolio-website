import React from 'react';
import { Calendar, ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Technology icons mapping with better emoji representations
const techIcons: Record<string, { emoji: string, color: string }> = {
  'React': { emoji: '⚛️', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  'Node.js': { emoji: '🟢', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
  'Express': { emoji: '🚀', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
  'MongoDB': { emoji: '🍃', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
  'Nodemailer': { emoji: '📧', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300' },
  'JWT': { emoji: '🔑', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
  'HTML5': { emoji: '🖥️', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
  'CSS3': { emoji: '🎨', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
  'JavaScript': { emoji: '📜', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  'Python': { emoji: '🐍', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  'TensorFlow': { emoji: '🧠', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
  'OpenCV': { emoji: '👁️', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
  'Responsive Design': { emoji: '📱', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
  'Deep Learning': { emoji: '🤖', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
  'Image Processing': { emoji: '🖼️', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300' },
  'Healthcare': { emoji: '🏥', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
  'Cross-browser Testing': { emoji: '🌐', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' }
};

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  link?: string;
  githubLink?: string;
  image?: string;
  points: string[];
  technologies: string[];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  year,
  link,
  githubLink,
  image,
  points,
  technologies,
  featured,
}) => {
  return (
    <div className="group h-full flex flex-col rounded-lg bg-card border border-border/40 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 overflow-hidden animate-fade-in hover:-translate-y-0.5">
      {image && (
        <div className="h-36 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
          <img
            src={image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 z-10">
            <div className="flex items-center gap-1.5">
              <div className="text-[11px] font-medium inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/40 text-foreground/80">
                <Calendar size={10} className="text-primary" />
                {year}
              </div>
              {featured && (
                <div className="inline-flex items-center gap-0.5 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-600 dark:text-amber-400">
                  <Star size={10} className="fill-amber-400 text-amber-400" />
                  Featured
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        
        {points && points.length > 0 && (
          <ul className="space-y-1.5 mb-3">
            {points.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start group/point">
                <span className="text-primary mr-1.5 mt-0.5 opacity-80 group-hover/point:opacity-100 transition-opacity flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="text-xs text-muted-foreground leading-snug line-clamp-2">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {technologies.slice(0, 4).map((tech) => {
                const techData = techIcons[tech] || { emoji: '🔹', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300' };
                return (
                  <Badge 
                    key={tech} 
                    variant="outline"
                    className={`${techData.color} border-0 text-[11px] font-medium px-2 py-0.5 h-auto rounded flex items-center gap-1 group/tech`}
                  >
                    <span className="opacity-80 group-hover/tech:opacity-100 transition-opacity">
                      {techData.emoji}
                    </span>
                    <span className="whitespace-nowrap">{tech}</span>
                  </Badge>
                );
              })}
              {technologies.length > 4 && (
                <Badge variant="outline" className="text-[11px] px-2 py-0.5 h-auto rounded bg-background/50 backdrop-blur-sm">
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/40">
          {githubLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 flex-1 sm:flex-none justify-center gap-1.5 group/btn bg-background/50 hover:bg-background/70 transition-all border-border/40 text-xs"
              asChild
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="font-medium">
                <Github size={12} className="opacity-80 group-hover/btn:opacity-100 transition-opacity" />
                <span>Code</span>
                <ArrowRight size={12} className="ml-0 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
              </a>
            </Button>
          )}
          {link && (
            <Button 
              variant="default" 
              size="sm" 
              className="h-8 flex-1 sm:flex-none justify-center gap-1.5 group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all shadow-sm shadow-primary/10 text-xs"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium">
                <span>Live Demo</span>
                <ExternalLink size={12} className="opacity-80 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
