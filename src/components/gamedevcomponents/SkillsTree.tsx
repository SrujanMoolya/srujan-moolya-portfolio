import React from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  name: string;
  level: number;
  category: 'engine' | 'graphics' | 'gameplay' | 'tools';
}

const skillsData: SkillNode[] = [
  // Engine
  { name: 'Unity', level: 95, category: 'engine' },
  { name: 'Unreal Engine', level: 85, category: 'engine' },
  { name: 'Godot', level: 75, category: 'engine' },

  // Graphics
  { name: 'Three.js', level: 90, category: 'graphics' },
  { name: 'WebGL', level: 85, category: 'graphics' },
  { name: 'GLSL Shaders', level: 80, category: 'graphics' },

  // Gameplay
  { name: 'Game Physics', level: 88, category: 'gameplay' },
  { name: 'AI Systems', level: 82, category: 'gameplay' },
  { name: 'Multiplayer', level: 78, category: 'gameplay' },

  // Tools
  { name: 'Blender', level: 87, category: 'tools' },
  { name: 'Git', level: 92, category: 'tools' },
  { name: 'Debugging', level: 90, category: 'tools' },
];

const categoryColors: Record<string, string> = {
  engine: 'from-cyan-500 to-blue-600',
  graphics: 'from-magenta-500 to-purple-600',
  gameplay: 'from-green-500 to-emerald-600',
  tools: 'from-yellow-500 to-orange-600',
};

const categoryLabels: Record<string, string> = {
  engine: 'GAME ENGINES',
  graphics: 'GRAPHICS & RENDERING',
  gameplay: 'GAMEPLAY SYSTEMS',
  tools: 'TOOLS & UTILITIES',
};

export const SkillsTree: React.FC = () => {
  const groupedSkills = skillsData.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, SkillNode[]>
  );

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(0deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent),_linear-gradient(90deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            SKILL TREE<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-lg text-cyan-400/70 font-mono">
            Unlock abilities across game development domains
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-16">
          {(Object.keys(groupedSkills) as Array<keyof typeof groupedSkills>).map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-6 text-white">
                <span className={`bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                  {categoryLabels[category]}
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedSkills[category].map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05), duration: 0.5 }}
                  >
                    {/* Skill card */}
                    <div className="relative p-4 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                      {/* Glow on hover */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${categoryColors[category]} rounded-lg opacity-0 blur-xl -z-10`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Skill name and level */}
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`text-sm font-mono bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent font-bold`}>
                          LVL {skill.level}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${categoryColors[category]} shadow-lg`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: (catIdx * 0.1) + (idx * 0.05),
                            duration: 1,
                            ease: 'easeOut',
                          }}
                        />
                        {/* Animated glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} opacity-50 blur-sm`}
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
