import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      color: "bg-blue-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "App Development", 
      color: "bg-green-500",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Android (Java)", level: 88 },
        { name: "iOS (Swift)", level: 82 },
        { name: "Firebase", level: 90 }
      ]
    },
    {
      title: "Game Development",
      color: "bg-purple-500", 
      skills: [
        { name: "Unity", level: 88 },
        { name: "C#", level: 90 },
        { name: "Unreal Engine", level: 80 },
        { name: "3D Graphics", level: 85 },
        { name: "Game Physics", level: 82 }
      ]
    },
    {
      title: "AI & Machine Learning",
      color: "bg-red-500",
      skills: [
        { name: "Python", level: 92 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 88 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 82 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "Python", "TypeScript", "C#", "Java", "Swift", "Kotlin",
    "React", "React Native", "Next.js", "Vue.js", "Angular", "Flutter",
    "Node.js", "Express", "Django", "Flask", "FastAPI", "Spring Boot",
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase",
    "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Git",
    "Unity", "Unreal Engine", "TensorFlow", "PyTorch", "OpenCV", "ROS"
  ];

  return (
    <section id="skills" className="h-screen flex items-center justify-center snap-start">
      <div className="container mx-auto px-4 md:px-6 py-12 max-h-screen overflow-y-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            Like a race car's precision-engineered components, each skill has been 
            honed to deliver maximum performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="font-racing font-bold text-xl">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-professional font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 racing-border"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm">
          <h3 className="font-racing font-bold text-2xl mb-6 text-center">
            Technology <span className="text-accent">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 font-professional racing-border hover-lift cursor-default transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;