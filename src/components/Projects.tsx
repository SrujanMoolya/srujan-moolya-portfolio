import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Play, PlayCircle } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const logoPartners = [
    {
      name: "Chipsy IT",
      logo: "https://chipsyservices.com/wp-content/uploads/2024/09/Group-1.png",
      className: "h-10",
    },
    
    {
      name: "Cognizant",
      logo: "https://www.cognizant.com/us/media_1808da395be9f77c0124de824530b0338915414a8.svg",
      className: "h-10",
    },
    {
      name: "99Games",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbuGZUjeoyI7PbQ4-Uiwl5RMq9ccB1PNZkQ&s",
      className: "h-10",
    },
    {
      name: "HirePro",
      logo: "https://hirepro.in/wp-content/uploads/2025/05/HirePro-logo.svg",
      className: "h-10",
    },
    {
      name: "FeelItBuy",
      logo: "https://feelitbuy.com/logo.png",
      className: "h-14 bg-white rounded-xl p-2 shadow-sm",
    },
    {
      name: "SVVAAP",
      logo: "https://www.svvaap.in/assets/logo_dark-DGRfYr3V.png",
      className: "h-10",
    },
  ];

  const projects = [
    
    {
      title: "Menucraft.in - Digital Menu System [P.O.S]",
      description: "Menucraft: a modern digital POS and menu management system with AI-assisted menu optimization, online ordering, and admin dashboard. Integrates website ordering with real-time inventory tracking and analytics.",
      technologies: ["React.js", "Supabase", "postgrdSql"],
      type: "Web Development",
      status: "Live",
      links: {
        project: "menucraft.in",
        video: "https://youtu.be/4qvteQkSrp4",
        github: "https://github.com/svvaap/menucraft-ai"
      }
    },
    {
      title: "Jobhunt4u.in - Job Portal Platform",
      description: "A full-featured job marketplace connecting candidates with recruiters. Includes intelligent matching, real-time chat, resume parsing, and advanced filtering to surface the best opportunities for both job seekers and employers.",
      technologies: ["React.js", "Node.js", "Firebase"],
      type: "Web Development",
      status: "Live",
      links: {
        project: "jobhunt4u.in",
        video:"https://youtu.be/p6hkz3n6stY",
        github: "https://github.com/svvaap/jobhunt4u"
      }
    },
    {
      title: "PIM-Hostel Managemnt System",
      description: "Customized hostel management solution built for academic institutions — handles student allocation, fee management, attendance, and maintenance requests with role-based access for admins and staff.",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development",
      status: "Live",
      links: {
        project: "pimhostel.svvaap.in",
        image: "https://i.imgur.com/1ZQZ1ZL.png",
        github: "https://github.com/SrujanMoolya/pim-hostel"
      }
    },
    {
      title: "FeelItBuy - E-commerce Platform",
      description: "Full-stack e-commerce platform for electronics and furniture, built with the React js & Supabase. Features include secure payments with Razorpay, real-time order tracking via Socket.IO, AWS S3 image storage, admin dashboard, and JWT authentication for users and admins.",
      technologies: ["React.js", "Node.js", "Express.js", "supabase", "Tailwind CSS", "Razorpay", "AWS S3", "Socket.IO"],
      type: "Web Development",
      status: "In Progress",
      links: {
        video:"https://youtu.be/dg9GBa7PaaI",
        project: "https://feelitbuy.com",
       
      }
    },
{
      title: "Createx - Idea to Code Ai",
      description: "AI-powered idea-to-code platform that translates user concepts into working front-end prototypes. Features natural language parsing for requirements, instant mock generation, and Supabase-powered persistence for iterative improvements.",
      technologies: ["React.js", "Supabase", "Tailwind CSS", "Ai api"],
      type: "Web Development",
      status: "Live",
      links: {
        project: "createx.svvaap.in",
        video:"https://youtu.be/W7pwJE0FGPc",
        github: "https://github.com/SrujanMoolya/CreateX"
      }
    },
    {
      title: "BikeHub - bike rentel system",
      description: "BikeHub is a superbike bike rental management system that streamlines reservations, Features user-friendly booking interfaces, real-time availability, and admin dashboards for efficient operations.",
      technologies: ["PHP", "MySql",],
      type: "Web Development",
      status: "Live",
      links: {
        video: "https://youtu.be/BUCDb59O5nE?si=_A4x0CwQVBrGVJ0-",
        github: "https://github.com/SrujanMoolya/bikehub"
      }
    },
    {
      title: "TrackMyBus",
      description: "TrackMyBus provides real-time bus location tracking, ETA predictions, and route notifications. Designed for low-bandwidth environments and includes driver sign-in, live ETA push notifications, and route analytics.",
      technologies: ["React.js", "Supabase", "Tailwind CSS"],
      type: "Web Development",
      status: "Live",
      links: {
        project: "trackmybus.svvaap.in",
        video:"https://youtu.be/yQk5LIi2p6E",
        github: "https://github.com/svvaap/trackmybus.in"
      }
    },
    
    

    // {
    //   title: "ideogram - idea hub",
    //   description: "Ideogram is a collaborative idea-hub that enables users to post concepts, vote, and iterate. Built-in versioning, tagging, and AI-assisted tagging help teams discover and develop high-potential ideas.",
    //   technologies: ["React.js", "Supabase", "Tailwind CSS"],
    //   type: "Web Development",
    //   status: "Live",
    //   links: {
    //     project: "ideogram.svvaap.in",
    //     github: "https://github.com/svvaap/ideogram"
    //   }
    // },

    // android

    {
      title: "superdrop - Food Delivery App",
      description: "End-to-end food delivery platform with order management, real-time driver tracking, secure payments, and restaurant dashboards for menu and order flow control. Designed for scalability and low-latency updates.",
      technologies: ["java - Android studio", "Firebase"],
      type: "App Development",
      status: "Live",
      links: {
        project: "https://play.google.com/store/apps/details?id=com.svvaap.superdrop2",
        previewImage: "https://srujanmoolya.svvaap.in/assets/superdrop.jpg",
        github: "https://github.com/SrujanMoolya"
      }
    },

    {
      title: "Bookhive - Book Catelogue App",
      description: "BookHive is a mobile-first bookstore app featuring catalog browsing, secure checkout, cloud-managed media assets, and easy content management for administrators.",
      technologies: ["java - Android studio", "Firebase", " cloudinary"],
      type: "App Development",
      status: "Live",
      links: {
        project: "https://play.google.com/store/apps/details?id=com.svvaap.bookhive&hl=en_IN",
        previewImage: "https://srujanmoolya/assets/bookhive.jpg",
        github: "https://github.com/SrujanMoolya/BookHive"
      }
    },
    // game dev
    {
      title: "Animal Kingdom - 3D shooting Game",
      description: "A 3D third-person shooter built in Unity with modular enemy AI, procedurally generated levels, and a persistent progression system. Focused on optimized mobile and desktop performance.",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        video: "https://youtu.be/phN5X-O23eU?si=_zeBnOGI_I8oXf58",
        github: "https://github.com/SrujanMoolya"
      }
    },
    {
      title: "NinjaKnights - 2D Game",
      description: "NinjaKnights is a 2D action-platformer with tight combat, collectible systems, and spline-based level progression. Designed for addictive short-session gameplay with leaderboard integration.",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        video: "https://youtu.be/Y0WIHQEQv9w?si=f1p2lKDPjvoe-H3q",
        github: "https://github.com/SrujanMoolya"
      }
    },
    {
      title: "car3d - car parkore game",
      description: "car3d is a physics-driven driving game featuring parkour-style courses, collectible vehicles, drift mechanics, and competitive leaderboards. Built with reusable vehicle handling components and native input support.",
      technologies: ["Unity", "C#"],
      type: "Game Development",
      status: "In Development",
      links: {
        video: "https://youtu.be/hnLtbrHregA?si=M745HFJo5YxlIxau",
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

  // Normalize a URL: ensure it has a protocol. Returns empty string for falsy values.
  const normalizeUrl = (u?: string) => {
    if (!u) return "";
    const trimmed = u.trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const normalized = normalizeUrl(url);
    if (!normalized) return "";

    try {
      const parsed = new URL(normalized);
      if (parsed.hostname.includes("youtu.be")) {
        const id = parsed.pathname.replace("/", "");
        return id
          ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`
          : "";
      }

      if (parsed.hostname.includes("youtube.com")) {
        const id = parsed.searchParams.get("v");
        return id
          ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`
          : "";
      }
    } catch {
      return "";
    }

    return "";
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border border-border bg-card/80 backdrop-blur-sm animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {(() => {
                const projectUrl = normalizeUrl(project.links?.project);
                const videoUrl = normalizeUrl(project.links?.video);
                const previewImage = normalizeUrl(project.links?.previewImage ?? project.links?.image);
                const youtubeEmbed = videoUrl ? getYouTubeEmbedUrl(videoUrl) : "";
                const isVideo = Boolean(youtubeEmbed);

                return (
                  <div className="relative border-b border-border bg-muted/50">
                    <div className="absolute top-3 left-3 z-10">
                      <Badge
                        variant="secondary"
                        className="font-professional text-xs bg-background/90 backdrop-blur-sm"
                      >
                        {isVideo ? "Video Preview" : previewImage ? "Screenshot Preview" : "Website Preview"}
                      </Badge>
                    </div>

                    {isVideo ? (
                      <div className="aspect-video w-full bg-black">
                        <iframe
                          className="h-full w-full"
                          src={youtubeEmbed}
                          title={`${project.title} video preview`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : previewImage ? (
                      <div className="relative aspect-video w-full overflow-hidden bg-background">
                        <img
                          src={previewImage}
                          alt={`${project.title} screenshot preview`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-3 left-3 z-10">
                          <Badge
                            variant="secondary"
                            className="font-professional text-xs bg-background/90 backdrop-blur-sm"
                          >
                            Screenshot Preview
                          </Badge>
                        </div>
                      </div>
                    ) : projectUrl ? (
                      <div className="relative aspect-video w-full bg-background">
                        <iframe
                          className="h-full w-full"
                          src={projectUrl}
                          title={`${project.title} website preview`}
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                        <div className="absolute bottom-2 right-2 rounded-full bg-background/90 p-1.5 text-accent shadow-sm">
                          <Globe className="h-4 w-4" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                          <div className="rounded-full bg-white/15 p-3 mb-3 text-white">
                            <Globe className="h-5 w-5" />
                          </div>
                          <p className="text-white font-display text-lg leading-tight max-w-xs">
                            {project.title}
                          </p>
                          <p className="text-white/80 text-xs font-professional mt-2">
                            Add a YouTube link in links.video to show auto-preview here
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

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
                  {(() => {
                    const projectUrl = normalizeUrl(project.links?.project);
                    const videoUrl = normalizeUrl(project.links?.video);
                    const githubUrl = normalizeUrl(project.links?.github);
                    const hasVideo = videoUrl ? Boolean(getYouTubeEmbedUrl(videoUrl)) : false;

                    return (
                      <>
                        {projectUrl ? (
                          <a href={projectUrl} target="_blank" rel="noreferrer" className="flex-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full racing-border hover-lift font-professional"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Project
                            </Button>
                          </a>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            className="flex-1 racing-border opacity-60 cursor-not-allowed font-professional"
                            title="Project link not available"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Project
                          </Button>
                        )}

                        {videoUrl ? (
                          <a href={videoUrl} target="_blank" rel="noreferrer" className="flex-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full racing-border hover-lift font-professional"
                            >
                              <PlayCircle className="mr-2 h-4 w-4" />
                              {hasVideo ? "Watch" : "Video"}
                            </Button>
                          </a>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            className="flex-1 racing-border opacity-60 cursor-not-allowed font-professional"
                            title="Video link not available"
                          >
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Video
                          </Button>
                        )}

                        {githubUrl ? (
                          <a href={githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full racing-border hover-lift font-professional"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                          </a>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            className="flex-1 racing-border opacity-60 cursor-not-allowed font-professional"
                            title="Code not available"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        )}
                      </>
                    );
                  })()}
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
      <div className="mt-20">
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm shadow-speed overflow-hidden">
          <div className="px-6 pt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-professional font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Trusted by builders
            </div>
            <h3 className="text-2xl md:text-3xl font-racing font-bold mb-2">
              Appreciated by engineers from
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-professional max-w-2xl mx-auto">
               startups, and technology brands connected to the work.
            </p>
          </div>

          <div className="relative marquee mt-8 pb-8">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card via-card/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card via-card/90 to-transparent z-10 pointer-events-none" />

            <div className="marquee-track flex w-max items-center gap-10 px-6 py-4">
              {[...logoPartners, ...logoPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-20 min-w-[160px] items-center justify-center rounded-2xl border border-border bg-background/70 px-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`max-h-full max-w-full object-contain opacity-90 transition duration-300 hover:opacity-100 ${partner.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Projects;