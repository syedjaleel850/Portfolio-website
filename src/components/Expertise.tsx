import React from 'react';
import { Code2, Database, Server, Layers } from 'lucide-react';

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'Crafting responsive UIs with React, Tailwind, and modern CSS frameworks.',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Building secure, high-performance APIs using Node.js and Express.',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'API Design']
    },
    {
      icon: <Layers size={32} />,
      title: 'Full Stack Solutions',
      description: 'Delivering seamless integrations from database to deployment.',
      skills: ['MERN Stack', 'Git & GitHub', 'Deployment', 'Testing', 'Debugging']
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'Designing efficient data models with MongoDB and SQL databases.',
      skills: ['MongoDB', 'SQL', 'Database Design', 'Data Modeling', 'Query Optimization']
    }
  ];

  return (
    <section className="container mx-auto py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto text-center mb-16  flex justify-center items-center flex-col">
          <h2 className="section-title text-foreground">My Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
