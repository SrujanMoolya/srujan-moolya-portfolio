import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import f1Car from "@/assets/f1-car.png";
import motogpBike from "@/assets/motogp-bike.png";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Software Engineer",
    "Web Developer",
    "App Developer", 
    "Game Developer",
    "AI/ML Enthusiast",
    "Robotics Explorer"
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            <div className="flex justify-center mb-4">
              <img
                src="/public/profilephoto.png"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-accent shadow-lg object-cover"
              />
            </div>
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-racing font-bold tracking-wider">
              SRUJAN
              <span className="block text-accent">MOOLYA21</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-professional text-muted-foreground h-8">
              <span className="typing-cursor">{currentText}</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-professional">
              Building the future through code. Passionate about creating exceptional 
              digital experiences that push the boundaries of technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="racing-border hover-lift font-professional font-semibold px-8 py-6 text-lg"
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