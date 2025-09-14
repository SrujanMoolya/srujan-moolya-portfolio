import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Minimal icon mapping (SVG or emoji fallback). Add more entries as needed.
const IconFor = ({ name }: { name: string }) => {
  const key = name.toLowerCase();
  switch (key) {
    case "react.js":
    case "react":
      return (
        <svg className="h-6 w-6" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 76a12 12 0 100-24 12 12 0 000 24z" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="64" cy="64" rx="36" ry="12"/>
            <ellipse cx="64" cy="64" rx="36" ry="12" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="36" ry="12" transform="rotate(120 64 64)"/>
          </g>
        </svg>
      );
    case "javascript":
    case "typescript":
      return <div className="text-sm font-bold">{key === 'typescript' ? 'TS' : 'JS'}</div>;
    case "unity":
      return <div className="text-sm">🎮</div>;
    case "flutter":
      return <div className="text-sm">🦋</div>;
    case "figma":
      return <div className="text-sm">🎨</div>;
    case "git":
      return <div className="text-sm">🔧</div>;
    default:
      return <div className="text-sm">•</div>;
  }
};

const Skills = () => {
  const techStack = [
    {
      title: "Web Development",
      color: "bg-blue-500",
      items: ["React.js", "MERN Stack", "Tailwind CSS", "Next.js", "Firebase", "Supabase"]
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-professional">
            A concise overview of the technologies and tools I use across web, mobile, game, and design workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStack.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                <h3 className="font-racing font-bold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center justify-between bg-muted/20 p-2 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center text-accent">
                        <IconFor name={item} />
                      </div>
                      <div className="font-professional">{item}</div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;