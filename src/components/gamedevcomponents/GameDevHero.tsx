import { Button } from "@/components/ui/button";
import { Layers3, PlayCircle, Sparkles, Trophy } from "lucide-react";
import f1Car from "@/assets/f1-car.png";
import motogpBike from "@/assets/motogp-bike.png";
import type { ElementType } from "react";

type HeroStat = {
  label: string;
  value: string;
  note: string;
};

type ContactItem = {
  icon: ElementType;
  label: string;
  value: string;
};

type GameDevHeroProps = {
  heroStats: HeroStat[];
  playerLoadout: string[];
  contactItems: ContactItem[];
};

const GameDevHero = ({ heroStats, playerLoadout, contactItems }: GameDevHeroProps) => {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
          <Sparkles className="h-4 w-4" />
          Game Developer | Unity | C# | 2D + 3D | Mobile Titles
        </div>

        <div className="space-y-5">
          <h1 className="max-w-4xl font-racing text-5xl font-black uppercase leading-none tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
            SRUJAN <span className="text-accent">MOOLYA</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Passionate game developer with hands-on experience building 2D and 3D games in Unity and shipping published mobile titles.
            Currently sharpening skills in C#, game physics, AI behaviours, and modern game design patterns.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-[#0d141d] p-5 shadow-[0_12px_30px_hsl(220_30%_5%/0.3)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between text-accent">
                <span className="text-xs uppercase tracking-[0.35em]">{stat.label}</span>
                <Trophy className="h-4 w-4" />
              </div>
              <p className="mt-3 font-racing text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="racing-border hover-lift bg-accent px-8 py-6 text-base font-semibold text-accent-foreground hover:bg-accent/90">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo Reel
          </Button>
          <Button asChild variant="outline" size="lg" className="racing-border hover-lift border-white/15 bg-white/5 px-8 py-6 text-base font-semibold text-white hover:bg-white/10">
            <a href="#projects">
              <Layers3 className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-[#0d141d] p-5">
          <div className="flex items-center gap-3 text-white/75">
            <Sparkles className="h-5 w-5 text-accent" />
            <p className="text-sm uppercase tracking-[0.3em]">Player loadout</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {playerLoadout.map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map(({ icon: Icon, label, value }, index) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#0d141d] p-5 shadow-[0_12px_30px_hsl(220_30%_5%/0.3)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-accent">
                <Icon className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.35em]">{label}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[38rem]">
        <div className="absolute left-[-1rem] top-14 hidden lg:block">
          <img src={f1Car} alt="F1 car" className="w-[23rem] opacity-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] animate-float" />
        </div>
        <div className="absolute right-[-1rem] bottom-10 hidden lg:block">
          <img src={motogpBike} alt="MotoGP bike" className="w-[15rem] opacity-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] animate-float-delayed" />
        </div>

        <div className="relative h-full rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 shadow-[0_24px_80px_hsl(220_35%_4%/0.45)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/45">Resume snapshot</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">Core profile</h2>
            </div>
            <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Unity + Mobile
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#121923] p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Objective</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Passionate game developer with hands-on experience building 2D and 3D games in Unity and shipping published mobile titles.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121923] p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Current focus</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                C#, game physics, AI behaviours, and collaborative game design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDevHero;