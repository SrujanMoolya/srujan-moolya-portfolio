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
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional leading-relaxed">
            I'm a passionate software engineer with expertise spanning multiple domains. 
            Like a Formula 1 driver who masters every aspect of racing, I've developed 
            proficiency across the entire technology spectrum.
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

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-racing font-bold mb-4">
              Target <span className="text-accent">Companies</span>
            </h3>
            <p className="text-muted-foreground font-professional mb-6">
              Ready to contribute to world-class organizations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Google", "Microsoft", "OpenAI", "Meta", "Apple", "Tesla", "Netflix", "Amazon"].map((company) => (
              <Badge 
                key={company}
                variant="outline" 
                className="px-4 py-2 text-sm font-professional racing-border hover-lift cursor-default"
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;