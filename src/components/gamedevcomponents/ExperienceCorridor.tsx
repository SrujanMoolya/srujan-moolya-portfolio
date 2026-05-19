import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    year: '2023',
    title: 'Senior Game Developer',
    company: 'GameStudio XYZ',
    description: 'Led development of AAA multiplayer game',
    highlights: ['Team Leadership', 'Architecture Design', 'Performance Optimization'],
  },
  {
    year: '2022',
    title: 'Graphics Programmer',
    company: 'Render Tech Inc',
    description: 'Specialized in shader development and optimization',
    highlights: ['GLSL/HLSL', 'PostProcessing', '3D Rendering'],
  },
  {
    year: '2021',
    title: 'Game Developer',
    company: 'Indie Studio',
    description: 'Full-stack game development for mobile platforms',
    highlights: ['Unity', 'Mobile Games', 'Cross-Platform'],
  },
  {
    year: '2020',
    title: 'Junior Developer',
    company: 'Tech Startup',
    description: 'Started career in game and interactive applications',
    highlights: ['C#', 'JavaScript', 'Game Engines'],
  },
];

export const ExperienceCorridor: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      {/* Cinematic grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(0deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent),_linear-gradient(90deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            EXPERIENCE<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-lg text-cyan-400/70 font-mono">
            Cinematic timeline of professional growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-magenta-500 to-cyan-500 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Experience entries */}
          <div className="space-y-12">
            {experienceData.map((entry, idx) => (
              <motion.div
                key={entry.year}
                className={`relative flex items-start gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="relative flex items-center justify-center md:w-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                >
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/50 z-10" />
                </motion.div>

                {/* Entry card */}
                <motion.div
                  className={`relative flex-1 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.1, duration: 0.5 }}
                >
                  <div className="group relative p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Card glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg opacity-0 blur-xl -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Year badge */}
                    <motion.div className="inline-block mb-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 font-mono text-sm rounded border border-cyan-500/40">
                      {entry.year}
                    </motion.div>

                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {entry.title}
                    </h3>

                    <p className="text-magenta-400 font-bold mb-3">{entry.company}</p>

                    <p className="text-gray-300 mb-4">{entry.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {entry.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/40"
                          whileHover={{ scale: 1.1 }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
