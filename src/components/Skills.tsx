import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillGroups = [
    {
      title: "Full-Stack Engineering",
      summary: "Production-grade web apps and APIs with clean architecture.",
      items: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "Mobile Development",
      summary: "Cross-platform product delivery with app release workflows.",
      items: ["React Native", "Android", "Firebase", "SQLite"],
    },
    {
      title: "Product & Design",
      summary: "User-first interfaces with fast prototyping and iteration.",
      items: ["Figma", "Tailwind CSS", "UX Systems", "Accessibility"],
    },
    {
      title: "Deployment & Quality",
      summary: "Reliable shipping with testing, monitoring, and CI-friendly delivery.",
      items: ["Vercel", "Docker", "GitHub", "QA"],
    },
  ];

  const coreStack = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "React Native",
    "Supabase",
    "Docker",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-24 section-shell">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-professional">
            A focused snapshot of the stack I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border border-border bg-card/70 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="font-display font-bold text-xl mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground font-professional mb-4">
                {group.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-professional">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/70 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-professional mb-3">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <Badge key={item} variant="outline" className="font-professional">
                {item}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;