
import React from 'react';
import { Code, Database, Cpu, Palette } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: number; // 1-5
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML5', category: 'frontend', level: 4 },
    { name: 'CSS3', category: 'frontend', level: 4 },
    { name: 'JavaScript', category: 'frontend', level: 4.5 },
    { name: 'React', category: 'frontend', level: 4.5 },
    { name: 'Tailwind CSS', category: 'frontend', level: 4.5 },
    { name: 'Bootstrap', category: 'frontend', level: 3 },
    { name: 'Express Js', category: 'backend', level: 4.4 },
    { name: 'Node Js', category: 'backend', level: 4.3 },
    { name: 'Python', category: 'backend', level: 3.5 },
    { name: 'Java', category: 'backend', level: 3 },
    { name: 'Mongodb', category: 'database', level: 4 },
    { name: 'SQL', category: 'database', level: 3 },
    { name: 'Postman', category: 'tools', level: 0 },
    { name: 'Git & GitHub', category: 'tools', level: 0 },
    { name: 'Figma', category: 'tools', level: 0 },
    { name: 'VS Code', category: 'tools', level: 0 },
    
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <Palette className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Cpu className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30 container mx-auto">
      <div className="px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <div className="w-24 h-1.5 bg-primary/90 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg">
            The technologies and tools I use to build great products
          </p>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-5 px-2">
                {category.icon}
                <h3 className="text-3xl font-semibold text-foreground tracking-tight">
                  {category.name}
                </h3>
              </div>
              <div className={`grid ${category.id === 'tools' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-3`}>
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill) => {
                    if (category.id === 'tools') {
                      return (
                        <div
                          key={skill.name}
                          className="px-3 py-2 rounded-md bg-card border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all flex items-center justify-center"
                        >
                          <span className="text-base font-medium text-foreground text-center">{skill.name}</span>
                        </div>
                      );
                    }
                    
                    const percentage = Math.round((skill.level / 5) * 100);
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:shadow-sm transition-all"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium">{percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
