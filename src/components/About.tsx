import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Gamepad2, Brain, Bot, Zap } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and cutting-edge technologies."
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Interactive gaming experiences with immersive gameplay and stunning visuals."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems and algorithms that learn, adapt, and solve complex problems."
    },
    {
      icon: Bot,
      title: "Robotics",
      description: "Bridging the gap between software and hardware through innovative robotic solutions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring emerging technologies to create the future."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img
               src="/srujanMoolya.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-accent shadow-lg object-cover"
              />
            </div>
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional leading-relaxed">
           I'm a passionate software engineer with hands-on experience across multiple domains. Skilled in designing and developing user-friendly, scalable solutions, I continuously adapt to new technologies. Driven to contribute effectively and create real business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-racing font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground font-professional">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default About;