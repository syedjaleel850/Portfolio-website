
import React from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import instagram from '../Assets/instagram.png'
import notes from '../Assets/notes.png'
import cybermind from '../Assets/cybermind.png'
const Projects: React.FC = () => {
  const projects = [
    {
  title: 'Modern Job Board Application',
  description: 'A responsive full-stack job portal designed for both job seekers and recruiters, featuring smart filtering, salary conversion, and real-time search capabilities.',
  year: '2025',
  link: 'https://cybermind-works-1.onrender.com', // replace with your live site link
  githubLink: 'https://github.com/syedjaleel850/Cybermind-Works', // replace with your repo link
  image: cybermind, // replace with project image if available
  points: [
    'Built a modern and responsive UI using React.js, Tailwind CSS, and Vite for optimal performance.',
    'Implemented advanced real-time filtering with multiple search parameters and job type options.',
    'Developed an interactive salary range slider with automatic monthly-to-LPA conversion.',
    'Enabled location-based job searches and smart company logo management.',
    'Ensured comprehensive error handling and clean empty-state management for smooth UX.',
    'Designed modular component architecture for maintainable and scalable development.',
    'Integrated robust backend using Node.js, Express.js, and MongoDB with REST APIs.',
    'Followed a mobile-first approach ensuring seamless experience across all devices.'
  ],
  technologies: [
    'React.js',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Jest'
  ]
},
    {
  title: 'Full-Stack Note-Taking Application',
  description: 'A secure MERN stack note-taking web app with JWT authentication and email OTP verification.',
  year: '2025',
  link: 'https://notes-app-1-tg65.onrender.com/', // <-- replace with your actual frontend URL
  githubLink: 'https://github.com/syedjaleel850/Notes-app', // <-- replace with your GitHub repo
  image: notes,
  points: [
    'Developed a secure full-stack note-taking application with JWT-based user authentication and password hashing.',
    'Implemented CRUD (Create, Read, Update, Delete) functionality for managing notes efficiently.',
    'Integrated email OTP verification for user signup using Nodemailer.',
    'Built a responsive and mobile-first UI with Tailwind CSS for an optimized user experience.',
    'Deployed the app using Render (backend) and MongoDB Atlas (database).'
  ],
  technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Nodemailer']
  },
  {
  title: 'Instagram Clone – Full-Stack Web Application',
  description: 'A full-stack social media clone with core Instagram features like posts, stories, likes, and comments.',
  year: '2025',
  link: 'https://syedjaleel-insta.netlify.app/',
  githubLink: 'https://github.com/syedjaleel850/instagram_clone', // <-- replace with your actual repo link
  image: instagram,
  points: [
    'Built a full-stack Instagram clone featuring posts, stories, likes, and comments functionality.',
    'Developed RESTful APIs with Express.js and JSON Server for real-time CRUD operations.',
    'Designed a clean, responsive UI using React (Vite) and Bootstrap for a seamless user experience.',
    'Implemented navigation and state management using React Router and React Hooks.',
    'Deployed frontend on Netlify and backend on Render for smooth cloud integration.'
  ],
  technologies: ['React (Vite)', 'Express.js', 'JSON Server', 'Bootstrap', 'Netlify', 'Render', 'REST API']
},
    {
      title: 'Smart Grocery List & Expiry Tracker',
      description: 'A full-stack web application for efficient grocery tracking with expiry alerts.',
      year: '2025',
      link: 'https://grocery-minder-hero.netlify.app/',
      githubLink: 'https://github.com/syedjaleel850/grocery-minder-hero.git',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000',
      points: [
        'Built a full-stack web application using React for efficient grocery tracking with expiry alerts.',
        'Implemented user authentication, search & filters, email notifications (Nodemailer), and a dashboard with insights.',
        'Designed a responsive UI with optimized API performance for seamless user experience.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'JWT', 'Responsive Design']
    },
    {
      title: 'Netflix UI Clone',
      description: 'A fully responsive web application that adapts seamlessly across various devices.',
      year: '2024',
      link: 'https://syedjaleelclone.netlify.app/',
      githubLink: 'https://github.com/syedjaleel850/Netflix.git',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000',
      points: [
        'Responsive Web Design: Developed a fully responsive web application that adapts seamlessly across various devices.',
        'Interactive Features: Implemented interactive elements using HTML, CSS, and JavaScript, including dynamic buttons and video content.',
        'Cross-Browser Compatibility: Ensured cross-browser compatibility by testing and optimizing the application for major web browsers.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Cross-browser Testing']
    },
    {
      title: 'Diabetic Retinopathy Lesion Segmentation using Swin UNet',
      description: 'A deep learning model to segment five key lesions in diabetic retinopathy images.',
      year: '2025',
      link: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000',
      points: [
        'Developed a deep learning model using Swin Transformer U-Net to segment five key lesions (HM, HE, SE, MA, OD) in diabetic retinopathy images.',
        'Developed a machine learning model for Diabetic Retinopathy detection, achieving an Overall Accuracy of 99.70% and an Overall IoU of 96.70%.',
        'Utilized Python, TensorFlow, and OpenCV for image processing and model training, demonstrating strong technical skills in data science.'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Image Processing', 'Healthcare']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-primary/90 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of my recent work. Each project demonstrates my problem-solving approach and technical expertise.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <a 
                href="https://github.com/syedjaleel850" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View My GitHub Profile</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              link={project.link}
              githubLink={project.githubLink}
              image={project.image}
              points={project.points}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
        <Button variant="outline" size="lg" className="group" asChild>
          <a 
            href="https://github.com/syedjaleel850" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 mx-auto"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Explore My GitHub</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
