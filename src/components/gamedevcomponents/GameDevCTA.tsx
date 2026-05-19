import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const GameDevCTA = () => {
  return (
    <section className="mt-16 pb-10">
      <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0d141d] px-6 py-8 shadow-[0_20px_70px_hsl(220_30%_4%/0.4)] md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">Available for game dev roles and collaborations.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/65">
            Open to internships, freelance, and full-time opportunities.
          </p>
        </div>
        <Button asChild size="lg" className="racing-border hover-lift bg-accent px-8 py-6 text-base font-semibold text-accent-foreground hover:bg-accent/90">
          <a href="mailto:SrujanMoolya3@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
};

export default GameDevCTA;