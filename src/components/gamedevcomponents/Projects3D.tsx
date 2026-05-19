import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Github, ExternalLink, X } from 'lucide-react';

interface Project3D {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  details?: string;
}

const projects3D: Project3D[] = [
  {
    id: '1',
    title: 'Animal Kingdom',
    description: 'Immersive 3D animal simulation game',
    image: '/public/bookhive.jpg',
    technologies: ['Unity', 'C#', 'Blender'],
    demoLink: '#',
    githubLink: '#',
    details: 'A creature-based simulation game where players can raise and interact with various virtual animals. Features realistic physics, AI-driven creatures, and immersive sound design.',
  },
  {
    id: '2',
    title: 'NinjaKnights',
    description: 'Fast-paced multiplayer action game',
    image: '/public/superdrop.png',
    technologies: ['Unreal Engine', 'C++', 'Blueprints'],
    demoLink: '#',
    githubLink: '#',
    details: 'A competitive multiplayer game combining ninja mechanics with knight-based combat. Features dynamic environments, advanced AI opponents, and real-time multiplayer support.',
  },
  {
    id: '3',
    title: 'Car3D',
    description: 'High-fidelity racing simulation engine',
    image: '/public/pim-hostel.png',
    technologies: ['Three.js', 'WebGL', 'GLSL'],
    demoLink: '#',
    details: 'A browser-based racing simulation with realistic physics, dynamic weather, and multiple tracks. Optimized for high FPS with advanced shader effects.',
  },
];

interface Projects3DProps {
  onProjectSelect?: (project: Project3D) => void;
}

export const Projects3D: React.FC<Projects3DProps> = ({ onProjectSelect }) => {
  const [selectedProject, setSelectedProject] = useState<Project3D | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      {/* Section background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(0deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent),_linear-gradient(90deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            PROJECTS<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-lg text-cyan-400/70 font-mono">
            Interactive 3D Game Development Portfolio
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects3D.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Holographic card */}
              <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg opacity-0 blur-xl -z-10"
                  animate={{ opacity: hoveredId === project.id ? 0.5 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project image */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                </div>

                {/* Content */}
                <div className="p-6 h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay with CTA */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded cursor-pointer"
                    onClick={() => {
                      setSelectedProject(project);
                      onProjectSelect?.(project);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW PROJECT <ChevronRight size={18} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 rounded-lg max-w-3xl w-full max-h-96 overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded transition-colors"
                >
                  <X size={24} className="text-cyan-400" />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-black text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-cyan-400/70 font-mono text-sm mb-4">
                    {selectedProject.description}
                  </p>

                  <p className="text-gray-300 mb-6">
                    {selectedProject.details || selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="text-cyan-400 font-bold mb-2">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm border border-cyan-500/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {selectedProject.demoLink && (
                      <motion.a
                        href={selectedProject.demoLink}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} /> PLAY DEMO
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        className="flex items-center gap-2 px-6 py-2 border-2 border-magenta-500 text-magenta-400 font-bold rounded cursor-pointer hover:bg-magenta-500/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} /> CODE
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
