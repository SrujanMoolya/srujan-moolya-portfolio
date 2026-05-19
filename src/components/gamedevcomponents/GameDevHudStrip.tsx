import { Activity, BadgeCheck, Gamepad2, Gauge, Swords, Target, Trophy, Zap } from "lucide-react";

const hudStats = [
  { icon: Gauge, label: "XP", value: "03 Games", note: "3 core projects" },
  { icon: Swords, label: "Combat", value: "AI + Physics", note: "state machines, drift, loops" },
  { icon: Target, label: "Focus", value: "Gameplay", note: "feel, pacing, readability" },
  { icon: Trophy, label: "Ship Signal", value: "Mobile Ready", note: "published titles" },
];

const hudBadges = [
  "Unity 2D / 3D",
  "C# Systems",
  "Level Design",
  "UI / UX for Games",
  "AI Behaviours",
  "Physics Tuning",
];

const GameDevHudStrip = () => {
  return (
    <section className="mt-16 rounded-[1.75rem] border border-white/10 bg-[#0c121a] px-6 py-6 shadow-[0_16px_50px_hsl(220_30%_4%/0.35)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            <Activity className="h-4 w-4" />
            live player hud
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Recruiter-facing game dev snapshot
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            This is the part that makes the page feel like a playable profile instead of a plain resume: game focus, shipped work,
            and clear proof of hands-on development.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/70 shadow-[0_12px_30px_hsl(220_30%_5%/0.25)]">
          <div className="flex items-center gap-3 text-accent">
            <Gamepad2 className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.35em]">Status</span>
          </div>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/85">Ready for interviews</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {hudStats.map(({ icon: Icon, label, value, note }, index) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111926] p-5"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="flex items-center gap-3 text-accent">
              <Icon className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.35em]">{label}</span>
            </div>
            <p className="mt-4 font-racing text-2xl font-bold text-white">{value}</p>
            <p className="mt-2 text-sm leading-6 text-white/65">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {hudBadges.map((badge, index) => (
          <span
            key={badge}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111926] p-5">
          <div className="flex items-center gap-3 text-accent">
            <BadgeCheck className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.35em]">Recruiter signal</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Clear game-specific experience with Unity, C#, AI, physics, and published mobile work.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111926] p-5">
          <div className="flex items-center gap-3 text-accent">
            <Zap className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.35em]">Motion language</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Animated stats, marquee motion, floating hardware art, and a HUD-style hierarchy.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111926] p-5">
          <div className="flex items-center gap-3 text-accent">
            <Target className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.35em]">Best use</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Show this instead of a plain CV when you want the recruiter to remember your game-dev identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameDevHudStrip;