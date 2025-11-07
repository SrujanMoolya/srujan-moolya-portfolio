import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Svvaap Innovations",
      role: "Freelance Software Engineer",
      type: "Startup",
      location: "Udupi, India",
      duration: "Apr 2021 - Present",
      description: "Leading full-stack development initiatives, focusing on innovative web applications and solving real-world problems through technology.",
      achievements: [
        "Developed multiple production-ready web applications",
        "Implemented real-time features using modern frameworks",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Mentored junior developers and established coding best practices"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "AWS"]
    },
    {
      company: "Chipsy IT",
      role: "Web Developer Intern",
      type: "Internship",
      location: "Remote",
      duration: "Jan 2024 - Mar 2024",
      description: "Gained hands-on experience in software development lifecycle and created Ecommerse websites using React.js and FakeStore APIs.",
      achievements: [
        "Built responsive web applications from scratch",
        "Integrated third-party APIs and payment gateways",
        "Participated in code reviews and agile development processes",
        "Delivered projects ahead of schedule with zero critical bugs"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"]
    }
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "poornaprajna Institute for Management",
      location: "Udupi, Karnataka",
      duration: "2024 - 2026",
      percentage: "8.00",
      description: "Advanced studies in computer applications with focus on software development and emerging technologies."
    },
    {
      degree: "BCA (Bachelor of Computer Application)",
      institution: "St. Marys College",
      location: "Shirva, Karnataka",
      duration: "2021 - 2024",
      percentage: "8.04",
      description: "Comprehensive foundation in computer science principles and programming fundamentals."
    },
    {
      degree: "12th Commerce (Computer Science)",
      institution: "St. Cecily's PU College",
      location: "Udupi, Karnataka",
      duration: "2020 - 2021",
      description: "Early exposure to computer science alongside commerce fundamentals."
    }
  ];

  const hackathons = [
    {
      "event": "Polkadot Hackathon",
      "year": 2025,
      "role": "Team Lead (In Progress)",
      "rank": "Pending (Results in Dec 2025)",
      "prize": "To be Announced",
      "description": "Currently participating in the Polkadot Hackathon — building a blockchain-based solution leveraging Substrate and cross-chain communication. Leading the team through ideation, design, and MVP development phase. Submission scheduled for November 10, 2025.",
      "link": "#"
    },
    {
      "event": "MumbaiHacks Hackathon",
      "year": 2025,
      "role": "Team Lead & Developer",
      "rank": "Selected in final Round",
      "prize": "To be Announced",
      "description": "Currently participating in the MumbaiHacks Hackathon — developing an AI-powered web innovation under the 21xEngineers brand. Leading the team in ideation, UI/UX design, and full-stack prototype development. Final submission scheduled for November 28 & 29, 2025.",
      "link": "https://devfolio.co/projects/ayudrishti-fbe0"
    },

  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            Professional <span className="text-accent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            Every great race car driver has a track record of victories.
            Here's my championship history in the world of technology.
          </p>
        </div>

 {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-racing font-bold text-center mb-12">
            Work <span className="text-accent">Experience</span>
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="h-5 w-5 text-accent" />
                      <h4 className="font-racing font-bold text-2xl">{exp.company}</h4>
                      <Badge variant="outline" className="racing-border font-professional">
                        {exp.type}
                      </Badge>
                    </div>

                    <h5 className="font-professional font-semibold text-xl text-accent mb-3">
                      {exp.role}
                    </h5>

                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-professional">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-professional">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground font-professional mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h6 className="font-professional font-semibold mb-3">Key Achievements:</h6>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-professional text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="racing-border font-professional"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hackathons / Competitions */}
        <div className="mt-20">
          <h3 className="text-3xl font-racing font-bold text-center mb-12">
            Hackathons & <span className="text-accent">Competitions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((h, idx) => (
              <Card key={idx} className="p-6 racing-border hover-lift bg-card/50 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-racing font-bold text-lg">{h.event} <span className="text-muted-foreground text-sm">({h.year})</span></h4>
                    <p className="text-sm text-muted-foreground">{h.role} • <span className="font-semibold text-accent">{h.rank}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="font-professional text-sm text-muted-foreground">{h.prize}</p>
                    {h.link && (
                      <a href={h.link} className="text-accent font-professional text-sm" target="_blank" rel="noreferrer">View</a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground font-professional text-sm leading-relaxed">{h.description}</p>
              </Card>
            ))}
          </div>
        </div>

       

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-racing font-bold text-center mb-12">
            Educational <span className="text-accent">Foundation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover-lift racing-border bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <h4 className="font-racing font-bold text-lg mb-2">{edu.degree}</h4>
                  <h5 className="font-professional font-semibold text-accent mb-3">
                    {edu.institution}
                  </h5>

                  <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-professional text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-professional text-sm">{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-professional text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;