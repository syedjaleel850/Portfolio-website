
import React from 'react';
import { Calendar, GraduationCap, School } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  grade: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: 'University College of Engineering, Villupuram',
      degree: '🎓 B.E, Computer Science Engineering',
      year: '2021 - 2025',
      grade: 'CGPA: 8.16',
      icon: <GraduationCap size={24} className="text-primary" />,
    },
    {
      institution: 'Government Higher Secondary School, Keelperumpakkam',
      degree: '📚 12th Grade',
      year: '2020 - 2021',
      grade: 'Percentage: 91.3%',
      icon: <School size={24} className="text-primary" />,
    },
    {
      institution: 'Railway Mixed High School',
      degree: '📚 10th Grade',
      year: '2018 - 2019',
      grade: 'Percentage: 87.8%',
      icon: <School size={24} className="text-primary" />,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-10">
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className="relative animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-12 p-2 bg-card rounded-full border-2 border-primary">
                  {item.icon}
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">{item.institution}</h3>
                  <p className="text-muted-foreground mb-2">{item.degree}</p>
                  <p className="font-medium text-primary">{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
