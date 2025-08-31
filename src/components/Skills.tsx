import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const techStack = [
    {
      title: "Web Development",
      color: "bg-blue-500",
      items: ["React.js", "MERN Stack", "Tailwind CSS", "Next.js", "Firebase"]
    },
    {
      title: "Design",
      color: "bg-pink-500",
      items: ["Figma", "Canva", "Photoshop", "Adobe Illustrator"]
    },
    {
      title: "Game Development",
      color: "bg-purple-500",
      items: ["Unity", "Blender", "Unreal Engine 5", "Adobe Animate"]
    },
    {
      title: "Mobile Development",
      color: "bg-green-500",
      items: ["Android Studio (Java/XML)", "Flutter"]
    },
    {
      title: "Deployment",
      color: "bg-yellow-500",
      items: ["Vercel", "Cpanel", "Play Store"]
    },
    {
      title: "Version Control",
      color: "bg-gray-700",
      items: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            Like a race car's precision-engineered components, each skill has been 
            honed to deliver maximum performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStack.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="font-racing font-bold text-xl">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((item, itemIdx) => (
                  <Badge
                    key={itemIdx}
                    variant="secondary"
                    className="px-4 py-2 font-professional racing-border hover-lift cursor-default transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

  {/* No extra stack card, all techs are shown above by category */}
      </div>
    </section>
  );
};

export default Skills;