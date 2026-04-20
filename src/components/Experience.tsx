import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Trophy,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      logo: "https://www.svvaap.in/assets/logo_dark-DGRfYr3V.png",
      company: "Svvaap Innovations (21xEngineers)",
      role: "Lead Software Engineer",
      type: "Community",
      location: "Udupi, India",
      duration: "Apr 2021 - Present",
      description: "Architected and shipped 20+ production full-stack applications using Node.js, TypeScript, React, and PostgreSQL, serving real customers with zero-downtime SLAs.",
      achievements: [
        "Developed Menucraft.in, a production-ready restaurant POS platform with web and mobile apps, supporting real users",
        "Contributed to TrackMyBuy, an AI-driven system for predicting bus timings and recommending efficient travel routes",
        "Collaborated with multiple clients to design and build responsive, business-focused websites"
      ],
      technologies: ["Node.js", "TypeScript", "React.js", "PostgreSQL", "JWT", "REST APIs", "Real-time Systems"]
    },
    {
      logo: "https://feelitbuy.com/logo.png",
      company: "FeelItBuy",
      role: "Software Engineer - SD1",
      type: "Product",
      location: "Udupi, India",
      duration: "Jan 2026 - Present",
      description: "Software Engineer managing mobile app deployment (iOS/Android), QA testing, messaging integrations, and feature development for a growing e-commerce startup.",
      achievements: [
        "Managed release pipelines and deployment workflows for both iOS and Android clients",
        "Strengthened QA testing coverage across user journeys and checkout flows",
        "Built responsive, accessible UI components used across web and React Native clients",
        "Implemented a secure, scalable order-management API powering multi-client consumption"
      ],
      technologies: ["React.js", "React Native", "Node.js", "TypeScript", "REST APIs", "Mobile Deployment", "QA"]
    },
    {
      logo: "https://chipsyservices.com/wp-content/uploads/2024/09/Group-1.png",
      company: "Chipsy IT",
      role: "Web Developer Intern",
      type: "Internship",
      location: "Remote",
      duration: "Jan 2024 - Mar 2024",
      description: "Developed a modern e-commerce application with React.js, integrating third-party REST APIs and implementing a responsive user interface.",
      achievements: [
        "Built and shipped production-ready responsive frontend modules",
        "Integrated third-party REST APIs for catalog and transactional flows",
        "Collaborated in agile sprints, reviews, and iterative releases",
        "Delivered with zero critical production bugs"
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

  const focusAreas = [
    "System Design",
    "Full-Stack Delivery",
    "Mobile + Web",
    "Performance Optimization",
    "Team Mentorship",
  ];

  return (
    <section id="experience" className="py-24 bg-muted/20 section-shell">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-professional font-medium text-accent mb-6">
            <BriefcaseBusiness className="h-4 w-4" />
            Career Snapshot
          </div>
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-5">
            Professional <span className="text-accent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            A proof-of-work timeline focused on outcomes, ownership, and delivery
            velocity across startups and product engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Card className="p-6 bg-card/90 border border-border shadow-speed">
                <h3 className="font-display text-xl font-bold mb-4">Profile Signal</h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="rounded-xl bg-muted/70 p-3 border border-border">
                    <p className="font-display text-2xl font-bold text-accent">20+</p>
                    <p className="text-xs text-muted-foreground">Shipped Products</p>
                  </div>
                  {/* <div className="rounded-xl bg-muted/70 p-3 border border-border">
                    <p className="font-display text-2xl font-bold text-accent">4+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div> */}
                  <div className="rounded-xl bg-muted/70 p-3 border border-border">
                    <p className="font-display text-2xl font-bold text-accent">3</p>
                    <p className="text-xs text-muted-foreground">Core Roles</p>
                  </div>
                  
                </div>
                <h4 className="font-professional font-semibold mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((item) => (
                    <Badge key={item} variant="secondary" className="font-professional">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/90 border border-border shadow-speed">
                <h4 className="font-display text-lg font-bold mb-2">Open To</h4>
                <p className="text-sm text-muted-foreground font-professional leading-relaxed">
                  Software Engineering roles, product-focused startup teams, and
                  high-impact freelance collaborations.
                </p>
              </Card>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="mb-8">
              <h3 className="text-3xl font-racing font-bold">
                Work <span className="text-accent">Experience</span>
              </h3>
            </div>

            <div className="relative border-l border-border ml-3 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[11px] top-6 h-5 w-5 rounded-full border-2 border-accent bg-background" />
                  <Card
                    className="p-6 md:p-8 hover-lift bg-card border border-border animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="h-11 w-11 rounded-xl bg-white border border-accent/20 shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="h-full w-full object-contain p-1.5"
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-xl leading-tight">{exp.company}</h4>
                          <p className="font-professional font-semibold text-accent">{exp.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="font-professional w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-professional text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-professional text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-professional mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-5">
                      <h6 className="font-professional font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Key Contributions
                      </h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                            <span className="font-professional text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="font-professional">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;