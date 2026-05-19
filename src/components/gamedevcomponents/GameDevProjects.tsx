import { Button } from "@/components/ui/button";
import { SquareDashedBottomCode } from "lucide-react";

type GameProject = {
  title: string;
  stack: string;
  status: string;
  action: string;
  demo: string;
  description: string;
  bullets: string[];
};

type GameDevProjectsProps = {
  gameProjects: GameProject[];
};

const GameDevProjects = ({ gameProjects }: GameDevProjectsProps) => {
  return (
    <section className="mt-16 space-y-8" id="projects">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Game development projects</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">The three projects from the portfolio</h2>
        </div>
        <p className="max-w-xl text-white/65">
          Kept in the game-dev lane and presented with the same projects from the main portfolio.
        </p>
      </div>

      <div className="grid gap-6">
        {gameProjects.map((project, index) => (
          <article key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c121a] shadow-[0_20px_70px_hsl(220_30%_4%/0.45)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative border-b border-white/10 bg-[linear-gradient(135deg,hsl(220_25%_11%),hsl(220_18%_7%))] p-6 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.18),transparent_35%),radial-gradient(circle_at_70%_70%,hsl(215_45%_22%/0.35),transparent_30%)]" />
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent font-bold">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/45">Project</p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="racing-border border-white/15 bg-white/5 text-white hover:bg-white/10">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        {project.action}
                      </a>
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/55">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{project.stack}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{project.status}</span>
                  </div>

                  <p className="max-w-md text-sm leading-7 text-white/72">{project.description}</p>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="grid gap-4 md:grid-cols-2">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <div key={bullet} className="rounded-2xl border border-white/10 bg-[#121923] p-4" style={{ animationDelay: `${bulletIndex * 80}ms` }}>
                      <p className="text-sm leading-7 text-white/70">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <SquareDashedBottomCode className="h-5 w-5 text-accent" />
                    <span className="text-sm uppercase tracking-[0.3em]">Engine</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{project.stack}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GameDevProjects;