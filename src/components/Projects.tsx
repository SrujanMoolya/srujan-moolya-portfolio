import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
       {
      title: "Createx - Idea to Code",
  description: "AI-powered idea-to-code platform that translates user concepts into working front-end prototypes. Features natural language parsing for requirements, instant mock generation, and Supabase-powered persistence for iterative improvements.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS", "Ai api"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "createx.svvaap.in",
        github: "https://github.com/SrujanMoolya/CreateX"
      }
    },
    {
      title: "Digital Menu System [P.O.S]",
  description: "Menucraft: a modern digital POS and menu management system with AI-assisted menu optimization, online ordering, and admin dashboard. Integrates website ordering with real-time inventory tracking and analytics.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase","postgrdSql"],
      type: "Web Development",
      status: "Live",
      links: {
        demo: "menucraft.in",
        github: "https://github.com/svvaap/menucraft-ai"
      }
    },
    {
      title: "Job Portal Platform",
  description: "A full-featured job marketplace connecting candidates with recruiters. Includes intelligent matching, real-time chat, resume parsing, and advanced filtering to surface the best opportunities for both job seekers and employers.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Firebase"],
      type: "Web Development",
      status: "Live",
      links: {
        demo: "jobhunt4u.in",
        github: "https://github.com/svvaap/jobhunt4u"
      }
    },
       {
      title: "PIM-Hostel Managemnt System",
  description: "Customized hostel management solution built for academic institutions — handles student allocation, fee management, attendance, and maintenance requests with role-based access for admins and staff.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "pimhostel.svvaap.in",
        github: "https://github.com/SrujanMoolya/pim-hostel"
      }
    },
    {
      title: "BikeHub - bike rentel system",
  description: "bike",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "pimhostel.svvaap.in",
        github: "https://github.com/SrujanMoolya/pim-hostel"
      }
    },
     {
      title: "TrackMyBus",
  description: "TrackMyBus provides real-time bus location tracking, ETA predictions, and route notifications. Designed for low-bandwidth environments and includes driver sign-in, live ETA push notifications, and route analytics.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "mybustime.svvaap.in",
        github: "https://github.com/svvaap/mybustime.in"
      }
    },
    {
      title: "UiBuilder - AI UI Generator",
  description: "AI-powered idea-to-ui bulder that givers ui/ux design and xml code for android studio. Features natural language parsing for requirements, instant mock generation, and Supabase-powered persistence for iterative improvements.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS", "Ai api"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "https://uibuilder.svvaap.in",
        github: "https://github.com/SrujanMoolya/uibuilder-ai"
      }
    },
    {
      title: "svvaap - Company Website",
  description: "A sleek, modern company website for SVVAAP Technologies showcasing services, portfolio, team bios, and contact forms. Built with React and Tailwind CSS for a responsive, engaging user experience.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "svvaap.in",
        github: "https://github.com/svvaap/svvaap-innovations"
      }
    },
    {
      title: "Travel Agency Website - client project",
  description: "A dynamic travel agency platform with destination browsing, booking management, user reviews, and admin dashboards. Features advanced search filters, secure payment integration, and personalized recommendations.",
      technologies: ["React.js", "PHP + SQL CRUD API", "Tailwind CSS", "cPanel Hosting"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "https://shrideviprasadtravels.com",
        github: "https://github.com/svvaap/ShriDeviPrasad-travel-web"
      }
    },
    {
      title: "Real Estate Platform",
  description: "A modern real-estate portal with searchable property listings, virtual tours, seller dashboards, and advanced filters for location, price, and amenities. Optimized for fast search and mobile-first browsing.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "a2zpremiumdeals.com",
        github: "https://github.com/SrujanMoolya"
      }
    },
      
       {
      title: "ideogram - idea hub",
  description: "Ideogram is a collaborative idea-hub that enables users to post concepts, vote, and iterate. Built-in versioning, tagging, and AI-assisted tagging help teams discover and develop high-potential ideas.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development", 
      status: "Live",
      links: {
        demo: "ideogram.svvaap.in",
        github: "https://github.com/svvaap/ideogram"
      }
    },

     // android

    {
      title: "Food Delivery App",
  description: "End-to-end food delivery platform with order management, real-time driver tracking, secure payments, and restaurant dashboards for menu and order flow control. Designed for scalability and low-latency updates.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      technologies: ["java - Android studio",  "Firebase"],
      type: "App Development",
      status: "Live",
      links: {
        demo: "play.google.com/store/apps/details?id=com.svvaap.superdrop&hl=en_IN",
        github: "https://github.com/SrujanMoolya"
      }
    },
   
    {
      title: "Book Catelogue App",
  description: "BookHive is a mobile-first bookstore app featuring catalog browsing, secure checkout, cloud-managed media assets, and easy content management for administrators.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      technologies: ["java - Android studio",  "Firebase", " cloudinary"],
      type: "App Development",
      status: "Live",
      links: {
        demo: "play.google.com/store/apps/details?id=com.svvaap.bookhive&hl=en_IN",
        github: "https://github.com/SrujanMoolya/BookHive"
      }
    },
    // game dev
    {
      title: "Animal Kingdom - 3D shooting Game",
  description: "A 3D third-person shooter built in Unity with modular enemy AI, procedurally generated levels, and a persistent progression system. Focused on optimized mobile and desktop performance.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        demo: "#",
        github: "https://github.com/SrujanMoolya"
      }
    },
    {
      title: "NinjaKnights - 2D Game",
  description: "NinjaKnights is a 2D action-platformer with tight combat, collectible systems, and spline-based level progression. Designed for addictive short-session gameplay with leaderboard integration.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        demo: "#",
        github: "https://github.com/SrujanMoolya"
      }
    },
    {
      title: "car3d - car parkore game",
  description: "car3d is a physics-driven driving game featuring parkour-style courses, collectible vehicles, drift mechanics, and competitive leaderboards. Built with reusable vehicle handling components and native input support.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        demo: "#",
        github: "https://github.com/SrujanMoolya"
      }
    },

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "In Development": return "bg-yellow-500";
      case "Research": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  // Filters
  const filters = ["All", "Web Development", "App Development", "Game Development"];
  const [filter, setFilter] = useState<string>("All");
  const filteredProjects = projects.filter(p => filter === "All" ? true : p.type === filter);

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

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map(f => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              className={`racing-border font-professional ${filter === f ? "bg-accent text-accent-foreground" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift racing-border bg-card/50 backdrop-blur-sm animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="font-professional text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                    <span className="text-xs text-muted-foreground font-professional">{project.status}</span>
                  </div>
                </div>
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
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <Button 
            size="lg"
            variant="outline" 
            className="racing-border hover-lift font-professional font-semibold px-8 py-6 mr-4"
          >
            <Play className="mr-2 h-5 w-5" />
            Project Showcased On Youtube
          </Button>
          </a>
          <a href="https://github.com/SrujanMoolya" target="_blank" rel="noreferrer">
          <Button 
            size="lg"
            variant="outline" 
            className="racing-border hover-lift font-professional font-semibold px-8 py-6 mr-4"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
          </a>
          <a href="https://www.producthunt.com/" target="_blank" rel="noreferrer">
          <Button 
            size="lg"
            variant="outline" 
            className="racing-border hover-lift font-professional font-semibold px-8 py-6"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Project On ProductHunt
          </Button>
          </a>
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