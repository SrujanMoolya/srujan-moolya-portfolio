import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

export const ContactTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    Array<{ type: 'user' | 'system'; text: string }>
  >([
    { type: 'system', text: 'GAME_DEV_TERMINAL v2.0.1 - Welcome!' },
    { type: 'system', text: 'Type commands to initiate contact sequence...' },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { type: 'user' as const, text: `> ${input}` }];

    const lowerInput = input.toLowerCase().trim();
    if (lowerInput === 'email') {
      newMessages.push({
        type: 'system',
        text: '📧 Email: srujan@example.com',
      });
    } else if (lowerInput === 'github') {
      newMessages.push({
        type: 'system',
        text: '🔗 GitHub: github.com/srujan',
      });
    } else if (lowerInput === 'linkedin') {
      newMessages.push({
        type: 'system',
        text: '💼 LinkedIn: linkedin.com/in/srujan',
      });
    } else if (lowerInput === 'help') {
      newMessages.push({
        type: 'system',
        text: 'Available commands: email | github | linkedin | projects | clear',
      });
    } else if (lowerInput === 'projects') {
      newMessages.push({
        type: 'system',
        text: 'Projects loaded: Animal Kingdom | NinjaKnights | Car3D',
      });
    } else if (lowerInput === 'clear') {
      setMessages([
        { type: 'system', text: 'GAME_DEV_TERMINAL v2.0.1 - Cleared' },
      ]);
      setInput('');
      return;
    } else {
      newMessages.push({
        type: 'system',
        text: `Command not recognized: "${input}". Type "help" for available commands.`,
      });
    }

    setMessages(newMessages);
    setInput('');
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(0deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent),_linear-gradient(90deg,_transparent_24%,_rgba(68,_214,_238,_0.05)_25%,_rgba(68,_214,_238,_0.05)_26%,_transparent_27%,_transparent_74%,_rgba(68,_214,_238,_0.05)_75%,_rgba(68,_214,_238,_0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            CONTACT<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-lg text-cyan-400/70 font-mono">
            Access the communication matrix
          </p>
        </motion.div>

        {/* Terminal container */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-black/80 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-2 border-b border-cyan-500/30 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-cyan-400 font-mono text-sm ml-2">
              terminal.gamedev [2026]
            </p>
          </div>

          {/* Terminal content */}
          <div className="p-6 h-96 overflow-y-auto font-mono text-sm space-y-2">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.p
                  key={idx}
                  className={`${
                    msg.type === 'user'
                      ? 'text-green-400'
                      : 'text-cyan-400'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </motion.p>
              ))}
            </AnimatePresence>

            {/* Blinking cursor */}
            <motion.span
              className="text-green-400 animate-pulse"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              █
            </motion.span>
          </div>

          {/* Terminal input */}
          <form onSubmit={handleCommand} className="p-4 border-t border-cyan-500/20">
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-mono">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-green-400 font-mono outline-none placeholder:text-slate-600"
                placeholder="Type command..."
                autoFocus
              />
              <motion.button
                type="submit"
                className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Quick links */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="mailto:srujan@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} /> EMAIL
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-magenta-500 text-magenta-400 font-bold rounded-lg hover:bg-magenta-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} /> GITHUB
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} /> LINKEDIN
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
