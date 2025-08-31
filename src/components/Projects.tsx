import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal Platform",
      description: "A comprehensive job portal connecting job seekers with recruiters. Features real-time messaging, advanced filtering, and intelligent matching algorithms.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
      type: "Web Development",
      status: "Live",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, and advanced search capabilities. Responsive design with seamless user experience.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Firebase", "Maps API", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Food Delivery App",
      description: "Full-stack food delivery application with real-time order tracking, payment integration, and restaurant management system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      technologies: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "Firebase"],
      type: "App Development",
      status: "In Development",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Digital Menu System",
      description: "React-based digital menu management system for restaurants with QR code integration and real-time updates.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop",
      technologies: ["React.js", "QR Code", "Restaurant Management"],
      type: "Web Development",
      status: "Live",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "AI-Powered Game",
      description: "Unity-based game incorporating machine learning for intelligent NPC behavior and procedural content generation.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      technologies: ["Unity", "C#", "ML-Agents", "Procedural Generation"],
      type: "Game Development",
      status: "In Development",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Robotics Control System",
      description: "Advanced robotics control system with computer vision integration for autonomous navigation and object recognition.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "ROS", "Arduino", "Raspberry Pi"],
      type: "Robotics",
      status: "Research",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "In Development": return "bg-yellow-500";
      case "Research": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            A showcase of my engineering prowess across different domains, 
            each project representing a victory lap in technology innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift racing-border bg-card/50 backdrop-blur-sm animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge variant="secondary" className="font-professional text-xs">
                    {project.type}
                  </Badge>
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                  <span className="text-xs text-white font-professional">{project.status}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-racing font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground font-professional mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="text-xs font-professional racing-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 racing-border hover-lift font-professional"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 racing-border hover-lift font-professional"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline" 
            className="racing-border hover-lift font-professional font-semibold px-8 py-6"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
        
      </div>
      <div className="text-center mt-20">
          <div className="mb-8">
            <h3 className="text-2xl font-racing font-bold mb-4">
              Appreciated by engineers from
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {/* Company logos - use reliable SVG/PNG URLs */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10 w-auto grayscale hover:grayscale-0 transition" title="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-10 w-auto grayscale hover:grayscale-0 transition" title="Microsoft" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Meta" className="h-10 w-auto grayscale hover:grayscale-0 transition bg-white rounded-full p-1" title="Meta" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-10 w-auto grayscale hover:grayscale-0 transition" title="Apple" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" className="h-10 w-auto grayscale hover:grayscale-0 transition" title="Tesla" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-10 w-auto grayscale hover:grayscale-0 transition" title="Netflix" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-10 w-auto grayscale hover:grayscale-0 transition bg-white rounded p-1" title="Amazon" />
            <span className="text-2xl font-bold text-muted-foreground">...</span>
          </div>
        </div>
    </section>
    
  );
};

export default Projects;