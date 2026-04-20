import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ["about", "skills", "projects", "experience", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-speed border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
               src="/srujanMoolya.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-accent shadow-md object-cover"
              />
              <div className="font-display font-bold text-xl tracking-wider">
                SM21<span className="text-accent">.</span>
              </div>
            </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium capitalize"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="racing-border hover-lift"
            >
              Contact
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-xl border border-border bg-background/95 backdrop-blur-md p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="justify-start capitalize"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;