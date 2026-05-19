import { Code2, GraduationCap } from "lucide-react";

type GameDevSkillsEducationProps = {
  skills: [string, string][];
  education: [string, string, string][];
};

const GameDevSkillsEducation = ({ skills, education }: GameDevSkillsEducationProps) => {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/10 bg-[#0d141d] p-6 shadow-[0_20px_70px_hsl(220_30%_4%/0.4)]">
        <div className="flex items-center gap-3 text-accent">
          <Code2 className="h-5 w-5" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Skills</p>
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold text-white">Stack built for games and production delivery.</h2>

        <div className="mt-6 space-y-4">
          {skills.map(([label, value], index) => {
            const width = [96, 92, 88, 90, 84][index];
            return (
              <div key={label} className="rounded-2xl border border-white/10 bg-[#121923] p-4" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/45">
                  <span>{label}</span>
                  <span className="text-accent">{width}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-accent via-orange-400 to-cyan-400"
                    style={{ width: `${width}%` }}
                  />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/75">{value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4 text-sm leading-7 text-white/70">
          Currently sharpening skills in C#, game physics, AI behaviours, and collaborative game design.
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0d141d] p-6 shadow-[0_20px_70px_hsl(220_30%_4%/0.4)]">
        <div className="flex items-center gap-3 text-accent">
          <GraduationCap className="h-5 w-5" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Education</p>
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold text-white">Academic background</h2>

        <div className="mt-6 grid gap-4">
          {education.map(([degree, timeline, institution]) => (
            <div key={degree} className="rounded-2xl border border-white/10 bg-[#121923] p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">{degree}</p>
              <p className="mt-2 text-lg font-semibold text-white">{timeline}</p>
              <p className="mt-2 text-sm leading-7 text-white/70">{institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDevSkillsEducation;