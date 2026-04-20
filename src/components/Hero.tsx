import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Sparkles } from "lucide-react";
import f1Car from "@/assets/f1-car.png";
import motogpBike from "@/assets/motogp-bike.png";
// Profile photo is used via public path in <img src="/profile-photo.png" ... />


const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Software Engineer",
    "Full-Stack Product Builder",
    "Mobile App Developer",
    "AI + Automation Enthusiast",
    "Game Tech Explorer",
    "Startup Collaborator"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 section-shell">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* F1 Car */}
        <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 opacity-10 animate-float">
          <img src={f1Car} alt="F1 Car" className="h-32 w-auto" />
        </div>
        
        {/* MotoGP Bike */}
        <div className="absolute top-1/3 -right-1 transform -translate-y-1/2 opacity-10 animate-float-delayed">
          <img src={motogpBike} alt="MotoGP Bike" className="h-24 w-auto" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-professional font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              Open to internships, freelance, and full-time opportunities
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
              SRUJAN
              <span className="block text-accent">MOOLYA</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-professional text-muted-foreground h-8">
              <span className="typing-cursor">{currentText}</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-professional">
              I design and build products that move from idea to impact fast.
              From scalable web apps to mobile experiences and AI-powered features,
              I focus on clarity, speed, and measurable user value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="font-display text-2xl font-bold text-accent">20+</p>
              <p className="text-sm text-muted-foreground">Shipped Projects</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="font-display text-2xl font-bold text-accent">5+</p>
              <p className="text-sm text-muted-foreground">Tech Domains</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="font-display text-2xl font-bold text-accent">2021</p>
              <p className="text-sm text-muted-foreground">Started Building</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="racing-border hover-lift font-professional font-semibold px-8 py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="racing-border hover-lift font-professional font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="pt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover-lift"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Speed lines effect */}
      <div className="absolute inset-0 speed-line opacity-20"></div>
    </section>
  );
};

export default Hero;