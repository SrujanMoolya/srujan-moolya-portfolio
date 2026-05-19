import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CinematicHeroScene: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate scene load
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-magenta-500/20 to-transparent blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(0deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent),_linear-gradient(90deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]" />

        {/* Animated floating spheres */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-cyan-400/50"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: '50%',
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
        <motion.div
          className="text-center pointer-events-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main title with glow */}
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
            animate={{ textShadow: ['0 0 20px #00ffff', '0 0 40px #ff00ff', '0 0 20px #00ffff'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            GAME DEVELOPER
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-cyan-400 font-mono mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SRUJAN'S CINEMATIC PORTFOLIO
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">EXPLORE PROJECTS</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-magenta-500 text-magenta-400 font-bold rounded-lg cursor-pointer hover:bg-magenta-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scan lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
};
