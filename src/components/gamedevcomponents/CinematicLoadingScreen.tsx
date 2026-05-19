import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const CinematicLoadingScreen: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 100 ? 100 : next;
      });
    }, 300);

    // Complete animation
    timeline.to(
      {},
      {
        duration: 3,
        onComplete: () => {
          clearInterval(interval);
          setProgress(100);
        },
      }
    );

    return () => {
      clearInterval(interval);
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 to-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated logo/core reactor */}
      <motion.div
        className="relative w-24 h-24 mb-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/50" />
        <motion.div
          className="absolute inset-2 rounded-full border border-cyan-400/30"
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-md opacity-40" />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-conic from-magenta-500 via-cyan-500 to-magenta-500 opacity-20 blur-xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.h1
        className="text-3xl font-black tracking-widest text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        INITIALIZING GAME DEV MATRIX
      </motion.h1>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 shadow-lg shadow-cyan-500/50"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Loading percentage */}
      <motion.p className="text-cyan-400 font-mono text-sm">
        {Math.round(progress)}%
      </motion.p>

      {/* Animated scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(0deg,_transparent_25%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_50%,_transparent_50%,_transparent_75%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_100%)] bg-[size:4px_4px] animate-pulse" />
      </div>
    </motion.div>
  );
};
