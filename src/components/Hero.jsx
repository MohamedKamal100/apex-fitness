import React from "react";
import { motion } from "framer-motion";
import { Flame, ArrowRight, Activity, ShieldCheck, Trophy } from "lucide-react";
import gymHero from "../assets/gym_hero.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statItems = [
    { icon: <ShieldCheck className="w-5 h-5 text-neon-cyan" />, label: "Certified Elite Trainers" },
    { icon: <Trophy className="w-5 h-5 text-neon-red" />, label: "Premium Modern Gym Facilities" },
    { icon: <Activity className="w-5 h-5 text-neon-cyan" />, label: "Results-Driven Programs" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/75 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10"></div>
        <img
          src={gymHero}
          alt="APEX Fitness Gym Workout"
          className="w-full h-full object-cover object-center scale-105 select-none"
        />
      </div>

      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none opacity-40"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 py-20 lg:py-32 z-20 flex flex-col justify-center min-h-[calc(100vh-64px)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Sub-badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphic border-neon-cyan/35 text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Flame className="w-4 h-4 text-neon-red animate-pulse" />
            Vanguard Fitness Culture
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase"
          >
            Transform Your <span className="text-gradient-cyan-red">Body</span>.<br />
            Transform Your <span className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">Life</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl font-sans leading-relaxed"
          >
            Forge your ultimate physique with elite coaching, high-octane workouts, and state-of-the-art facilities. APEX is more than a gym; it's a transformation chamber.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider bg-neon-red text-white hover:bg-neon-red/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,62,62,0.4)] hover:shadow-[0_0_25px_rgba(255,62,62,0.6)]"
            >
              Join APEX Today
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider bg-transparent text-white border border-dark-border hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Floating Key Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-dark-border/50 flex flex-wrap gap-6 lg:gap-10"
          >
            {statItems.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-dark-border flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
          />
        </div>
      </div>
    </div>
  );
}
