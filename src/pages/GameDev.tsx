import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, Github, Mail, Gamepad2, PlayCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import f1Car from "@/assets/f1-car.png";
import motogpBike from "@/assets/motogp-bike.png";
import CrazyArcade from "@/assets/crazyArcade.png";
import ArrowPuzzle from "@/assets/arrowpuzzle.png"

const heroStats = [
  { label: "Game Projects", value: "5", note: "Animal Kingdom, NinjaKnights, Car3D, Crazy Arcade, Arrow Puzzle" },
  { label: "Core Stack", value: "Unity + C#", note: "2D, 3D, physics, AI" },
  { label: "Focus", value: "Gameplay", note: "feel, systems, polish" },
];

const skillGroups = [
  { label: "Game Engines", value: "Unity (2D & 3D), Unreal Engine 5" },
  { label: "Languages", value: "C#, Java, JavaScript, TypeScript, Python" },
  { label: "Game Design", value: "Level Design, Combat Loops, UI/UX" },
  { label: "Tools", value: "Blender, Adobe Animator , Photoshop,  Git, Android Studio, React Native" },
];

const projects = [
  {
    title: "Animal Kingdom",
    description: "3D third-person shooter with modular enemy AI, procedural levels, and a persistent progression system.",
    stack: ["Unity", "C#"],
    status: "In Development",
    primaryLabel: "Watch",
    link: "https://youtu.be/phN5X-O23eU?si=_zeBnOGI_I8oXf58",
    galleryImages: [
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-1.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-2.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-3.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-4.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-5.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-6.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-7.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-8.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-9.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-10.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-11.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-12.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-13.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-14.png",
      "https://sen10games.in/img/TheAnimalKingdom/TheAnimalKingdom-15.png",
    ],
  },
  {
    title: "NinjaKnights",
    description: "2D action-platformer with tight combat, collectible systems, and spline-based level progression.",
    stack: ["Unity", "C#"],
    status: "In Development",
    primaryLabel: "Watch",
    link: "https://youtu.be/Y0WIHQEQv9w?si=f1p2lKDPjvoe-H3q",
    galleryImages: ["https://sen10games.in/img/NinjaKnights/ninjaKnight-1.jpg", 
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-2.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-3.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-4.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-5.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-6.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-7.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-8.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-9.jpg",
      "https://sen10games.in/img/NinjaKnights/ninjaKnight-10.jpg"
    ],
  },
  {
    title: "Car3D",
    description: "Physics-driven driving game featuring parkour-style courses, drift mechanics, and competitive leaderboards.",
    stack: ["Unity", "C#"],
    status: "In Development",
    primaryLabel: "Watch",
    link: "https://youtu.be/hnLtbrHregA?si=M745HFJo5YxlIxau",
    galleryImages: [
      "https://sen10games.in/img/SuperCarRacing/supercar-1.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-2.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-3.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-4.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-5.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-6.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-7.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-8.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-9.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-10.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-11.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-12.jpg",
      "https://sen10games.in/img/SuperCarRacing/supercar-13.jpg"
     
    ],
  },
   {
    title: "SketchMan vs StickMan",
    description: "Developed a 2D fighting game in Unity 2D, featuring intense battles between Sketchman and Stickman. Integrated multiplayer functionality using Photon Server, allowing players to compete online. Focused on smooth animations and responsive controls for an engaging gameplay experience.",
    stack: ["Unity", "C#"],
    status: "In Development",
    primaryLabel: "Watch",
    link: "https://youtu.be/pyhGmdBueRs?si=pN6rxhTAiT5HHR5K",
    galleryImages: ["https://sen10games.in/img/sketchmanvsstickman/sketchmanvsstickman-1.jpg", 
      "https://sen10games.in/img/sketchmanvsstickman/sketchmanvsstickman-2.jpg",
      "https://sen10games.in/img/sketchmanvsstickman/sketchmanvsstickman-3.jpg",
      "https://sen10games.in/img/sketchmanvsstickman/sketchmanvsstickman-4.jpg",
    ],
  },
  {
    title: "Crazy Arcade",
    description: "Casual offline arcade game published on the Google Play Store, built for smooth gameplay on low-end Android devices.",
    stack: ["React Native"],
    status: "In Development",
    primaryLabel: "Play Now",
    link: "https://play.google.com/store/apps/details?id=com.sen10games.crazyarcade&hl=en_IN",
    previewImage: CrazyArcade,
  },
  {
    title: "Arrow Puzzle – Maze Escape",
    description: "Offline-first maze puzzle game with increasingly complex levels and a satisfying difficulty ramp.",
    stack: ["React Native"],
    status: "In Development",
    primaryLabel: "Play Now",
    link: "https://play.google.com/store/apps/details?id=com.sen10games.arrow",
    previewImage: ArrowPuzzle,
  },
];

const experience = [
  {
    role: "Game Designer Intern",
    company: "Khel.Fun (Web3 Gaming)",
    timeline: "Dec 2025 - Present",
    location: "Remote",
    bullets: [
      "Designed a production crypto game built on Base in collaboration with founders.",
      "Created UI/UX flows, gameplay mechanics, and pitch decks for the Zunno ecosystem.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Svvaap Innovations (21xEngineers)",
    timeline: "Apr 2021 - Present",
    location: "Remote",
    bullets: [
      "Built and shipped 20+ production apps using Node.js, TypeScript, React, and PostgreSQL.",
      "Handled planning, design, build, deploy, and monitoring across multiple client products.",
    ],
  },
  {
    role: "Software Engineer SD1",
    company: "FeelItBuy Innovations",
    timeline: "Dec 2025 - Present",
    location: "Karkala",
    bullets: [
      "Managed mobile app deployment, QA testing, messaging integrations, and feature delivery.",
      "Built responsive UI components and a scalable order-management API for web and React Native clients.",
    ],
  },
];

const resolvePreviewImage = (title: string, previewImage?: string) => {
  if (previewImage) return previewImage;
  if (title === "Animal Kingdom") return f1Car;
  if (title === "NinjaKnights") return motogpBike;
  if (title === "Crazy Arcade") return CrazyArcade;
  if (title === "Arrow Puzzle – Maze Escape") return ArrowPuzzle;
  return "/favicon.png";
};

const getYouTubeEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0` : "";
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0` : "";
    }
  } catch {
    return "";
  }

  return "";
};

const wireframeImages = [
  "https://sen10games.in/img/wireframe/wrieframe2.jpg",
  "https://sen10games.in/img/wireframe/wrieframe1.jpg",
  "https://sen10games.in/img/wireframe/wrieframe5.jpg",
  "https://sen10games.in/img/wireframe/wrieframe3.jpg",
  "https://sen10games.in/img/wireframe/wrieframe4.jpg",
  "https://sen10games.in/img/wireframe/wrieframe7.jpg",
];

type GalleryState = {
  title: string;
  images: string[];
  index: number;
};

const useInView = (rootMargin = "240px") => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, rootMargin]);

  return { ref, isInView };
};

const GameDev = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryState | null>(null);

  const selectedImage = selectedGallery ? selectedGallery.images[selectedGallery.index] : null;

  const showGalleryImage = (gallery: string[], index: number, title: string) => {
    if (!gallery.length) return;

    const normalizedIndex = ((index % gallery.length) + gallery.length) % gallery.length;
    setSelectedGallery({ title, images: gallery, index: normalizedIndex });
  };

  const showNextImage = () => {
    if (!selectedGallery) return;
    showGalleryImage(selectedGallery.images, selectedGallery.index + 1, selectedGallery.title);
  };

  const showPreviousImage = () => {
    if (!selectedGallery) return;
    showGalleryImage(selectedGallery.images, selectedGallery.index - 1, selectedGallery.title);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 section-shell">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 opacity-10 animate-float">
              <img src={f1Car} alt="F1 Car" className="h-32 w-auto" />
            </div>
            <div className="absolute top-1/3 -right-1 transform -translate-y-1/2 opacity-10 animate-float-delayed">
              <img src={motogpBike} alt="MotoGP Bike" className="h-24 w-auto" />
            </div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-professional font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                Game Developer | Unity | C# | 2D + 3D | Mobile Titles
              </div>

              <div className="flex justify-center mb-4">
                <img
                  src="/srujanMoolya.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-accent shadow-lg object-cover"
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-8xl font-racing font-bold tracking-wider leading-tight">
                  GAME
                  <span className="block text-accent">DEVELOPER</span>
                </h1>
                <div className="text-xl md:text-2xl font-professional text-muted-foreground h-8">
                  <span className="typing-cursor">Playable systems, polish, and game feel</span>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-professional">
                  I build games with Unity and C#, focusing on mechanics, AI, physics, and responsive gameplay.
                  The goal is to make the gamedev portfolio feel like the same portfolio language you use on the main site.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-card/70 p-4">
                    <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{stat.note}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="racing-border hover-lift font-professional font-semibold px-8 py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View Projects
                </Button>

                <Button variant="outline" size="lg" className="racing-border hover-lift font-professional font-semibold px-8 py-6 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>

              <div className="pt-8">
                <Button variant="ghost" size="sm" className="animate-bounce hover-lift">
                  <ChevronDown className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 speed-line opacity-20" />
        </section>

       

        <section id="skills" className="py-24 section-shell">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-racing font-bold mb-5">
                Skills <span className="text-accent">Stack</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
                The same clean card system from the original site, but centered on game development abilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((skill) => (
                <Card key={skill.label} className="p-6 bg-card border border-border hover-lift">
                  <h3 className="font-display text-xl font-bold mb-3">{skill.label}</h3>
                  <p className="text-muted-foreground leading-relaxed font-professional">{skill.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-muted/20 section-shell">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-racing font-bold mb-5">
                Game <span className="text-accent">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
                These are the same game projects already in the portfolio, plus the two React Native games you asked to add.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const previewImage = resolvePreviewImage(project.title, project.previewImage);
                const projectLink = project.link;
                const youtubeEmbed = getYouTubeEmbedUrl(projectLink);
                const isVideo = Boolean(youtubeEmbed);
                const carouselImages = project.galleryImages ?? [];
                const { ref: cardRef, isInView } = useInView();

                return (
                  <Card ref={cardRef} key={project.title} className="overflow-hidden hover-lift border border-border bg-card/80 backdrop-blur-sm animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative border-b border-border bg-muted/50">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge variant="secondary" className="font-professional text-xs bg-background/90 backdrop-blur-sm">
                          {isVideo ? "Video Preview" : "Screenshot Preview"}
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
                      ) : (
                        <div className="relative aspect-video w-full overflow-hidden bg-background">
                          <img
                            src={previewImage}
                            alt={`${project.title} screenshot preview`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="font-professional text-xs">
                          Game Development
                        </Badge>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
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
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-professional racing-border">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {carouselImages.length ? (
                        <div className="mb-4">
                          {isInView ? (
                            <Carousel className="w-full" opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}>
                              <CarouselContent>
                                {carouselImages.map((image, imageIndex) => (
                                  <CarouselItem key={image} className="basis-[88%] sm:basis-1/2 lg:basis-[42%]">
                                    <button
                                      type="button"
                                      onClick={() => showGalleryImage(carouselImages, imageIndex, project.title)}
                                      className="group relative block w-full overflow-hidden rounded-xl border border-border bg-muted/40"
                                    >
                                      <img
                                        src={image}
                                        alt={`${project.title} gallery ${imageIndex + 1}`}
                                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                      />
                                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-left text-xs text-white">
                                        Tap to view full image
                                      </div>
                                    </button>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              {carouselImages.length > 1 ? <CarouselPrevious /> : null}
                              {carouselImages.length > 1 ? <CarouselNext /> : null}
                            </Carousel>
                          ) : (
                            <div className="aspect-video w-full rounded-xl border border-dashed border-border bg-muted/30 animate-pulse flex items-center justify-center text-sm text-muted-foreground">
                              Gallery loads on scroll
                            </div>
                          )}
                        </div>
                      ) : null}

                      <div className="flex gap-2">
                        <a href={projectLink} target="_blank" rel="noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full racing-border hover-lift font-professional">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            {project.primaryLabel ?? "Watch"}
                          </Button>
                        </a>

                        <a href="https://github.com/SrujanMoolya" target="_blank" rel="noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full racing-border hover-lift font-professional">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>

                        <a href={projectLink} target="_blank" rel="noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full racing-border hover-lift font-professional">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Project
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="wireframes" className="py-24 section-shell">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-racing font-bold mb-5">
                Wireframe <span className="text-accent">Gallery</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
                These are the wireframe and concept images from the previous portfolio, now included as part of the game portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wireframeImages.map((image, index) => (
                <Card key={image} className="overflow-hidden border border-border bg-card/80 backdrop-blur-sm hover-lift">
                  <button
                    type="button"
                    onClick={() => showGalleryImage(wireframeImages, index, "Wireframe concept")}
                    className="relative block aspect-video w-full overflow-hidden bg-muted/40"
                  >
                    <img
                      src={image}
                      alt={`Wireframe concept ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 section-shell">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-racing font-bold mb-5">
                Experience <span className="text-accent">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
                Kept in the same timeline style as the main portfolio for consistency and readability.
              </p>
            </div>

            <div className="grid gap-8">
              {experience.map((item) => (
                <Card key={item.role} className="p-6 md:p-8 bg-card border border-border hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{item.role}</h3>
                      <p className="mt-2 text-accent font-semibold">{item.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-professional lg:text-right">
                      <p>{item.timeline}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-muted-foreground font-professional leading-relaxed">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-muted/30 section-shell">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
                Let's <span className="text-accent">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
                If you want the main portfolio theme applied to the gamedev route, this page now follows the same layout and styling.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm">
                <h3 className="font-racing font-bold text-2xl mb-6">Contact</h3>
                <div className="space-y-4 text-muted-foreground font-professional">
                  <p><span className="text-foreground font-semibold">Email:</span> SrujanMoolya3@gmail.com</p>
                  <p><span className="text-foreground font-semibold">Phone:</span> +91 86606 30502</p>
                  <p><span className="text-foreground font-semibold">Location:</span> Udupi, Karnataka, India</p>
                </div>
              </Card>

              <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm flex flex-col justify-between">
                <h3 className="font-racing font-bold text-2xl mb-6">Open To</h3>
                <p className="text-muted-foreground font-professional leading-relaxed mb-6">
                  Game development roles, gameplay programming, Unity engineering, and collaborations that need a clean, production-ready portfolio presentation.
                </p>
                <Button asChild size="lg" className="w-fit racing-border hover-lift font-professional font-semibold">
                  <a href="mailto:SrujanMoolya3@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <Dialog open={Boolean(selectedGallery)} onOpenChange={(open) => !open && setSelectedGallery(null)}>
          <DialogContent className="max-w-5xl border-border bg-background/95 p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Image preview</DialogTitle>
              <DialogDescription>Full-size view of the selected project or wireframe image.</DialogDescription>
            </DialogHeader>
            {selectedGallery && selectedImage ? (
              <div className="relative overflow-hidden rounded-lg bg-black">
                <img
                  src={selectedImage}
                  alt={`${selectedGallery.title} preview ${selectedGallery.index + 1}`}
                  className="max-h-[85vh] w-full object-contain bg-black"
                />

                {selectedGallery.images.length > 1 ? (
                  <>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 text-foreground shadow-lg"
                      onClick={showPreviousImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous image</span>
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 text-foreground shadow-lg"
                      onClick={showNextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next image</span>
                    </Button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                      {selectedGallery.index + 1} / {selectedGallery.images.length}
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default GameDev;
