import { BriefcaseBusiness, CircleDot } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  timeline: string;
  location: string;
  bullets: string[];
};

type GameDevExperienceProps = {
  experience: ExperienceItem[];
};

const GameDevExperience = ({ experience }: GameDevExperienceProps) => {
  return (
    <section className="mt-16 space-y-8" id="experience">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Professional background</h2>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/55 md:block">
          Built for speed and stability
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {experience.map((item) => (
          <article key={item.role} className="rounded-[1.75rem] border border-white/10 bg-[#0d141d] p-6 shadow-[0_18px_50px_hsl(220_30%_4%/0.35)] transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="font-display text-2xl font-bold text-white">{item.role}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.32em] text-accent">{item.company}</p>
              </div>
              <BriefcaseBusiness className="h-5 w-5 text-white/35" />
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/45">
              <span>{item.timeline}</span>
              <span className="h-px w-6 bg-white/20" />
              <span>{item.location}</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <CircleDot className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GameDevExperience;