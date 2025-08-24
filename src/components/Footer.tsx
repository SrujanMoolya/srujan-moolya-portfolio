import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center justify-center">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="hover:bg-white/10 text-primary-foreground hover:text-primary-foreground"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="font-racing font-bold text-2xl tracking-wider">
            SM<span className="text-accent">.</span>
          </div>
          
          <p className="font-professional text-muted-foreground max-w-md">
            Crafting the future of technology, one line of code at a time. 
            Ready to accelerate innovation together.
          </p>
          
          <div className="flex items-center gap-2 text-sm font-professional">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and precision engineering</span>
          </div>
          
          <div className="pt-6 border-t border-white/10 w-full">
            <p className="text-sm text-muted-foreground font-professional">
              © 2024 Srujan Moolya. All rights reserved. | Ready for the next challenge.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;