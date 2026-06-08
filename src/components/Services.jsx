import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, HeartPulse, Zap, Flame, Target } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8 text-neon-red" />,
      title: "Muscle Forge",
      desc: "Hypertrophy-focused hypertrophy training designed to maximize strength, power output, and sculpt a symmetrical, powerful physique.",
      accent: "hover:border-neon-red/50 hover:shadow-[0_0_20px_rgba(255,62,62,0.15)]",
      lineColor: "bg-neon-red",
    },
    {
      icon: <Users className="w-8 h-8 text-neon-cyan" />,
      title: "Elite 1-on-1 Coaching",
      desc: "Custom workout plans, lifestyle modification guides, and personal tracking with our dedicated professional training coaches.",
      accent: "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
      lineColor: "bg-neon-cyan",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-neon-red" />,
      title: "Metabolic Burn",
      desc: "High-intensity athletic conditioning programs targeting visceral fat loss, cardiovascular stamina, and metabolic rate elevation.",
      accent: "hover:border-neon-red/50 hover:shadow-[0_0_20px_rgba(255,62,62,0.15)]",
      lineColor: "bg-neon-red",
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-cyan" />,
      title: "Combat CrossFit",
      desc: "An intensive combination of Olympic lifting, speed drills, gymnastics, and functional endurance to unlock raw physical athleticism.",
      accent: "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
      lineColor: "bg-neon-cyan",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-dark-card/30 border-y border-dark-border relative overflow-hidden">
      {/* Decorative geometric details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
            Elite Training <span className="text-gradient-cyan-red">Specialties</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Select a specialized training discipline custom-engineered by our sports science experts to crush your specific fitness objectives.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`flex flex-col h-full bg-dark-card border border-dark-border/60 rounded-2xl p-8 transition-all duration-300 ${service.accent} group relative overflow-hidden`}
            >
              {/* Subtle top indicator line */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${service.lineColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Service Icon */}
              <div className="w-14 h-14 rounded-xl bg-dark-bg border border-dark-border/80 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-white/10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed flex-grow">
                {service.desc}
              </p>

              {/* Action arrow button */}
              <div className="mt-8 pt-4 border-t border-dark-border/30 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                <span>Learn More</span>
                <Target className="w-4 h-4 text-gray-500 group-hover:text-neon-cyan transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom gym floor statistics */}
        <div className="mt-20 glassmorphic border-dark-border p-8 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-display text-4xl font-extrabold text-neon-cyan">2,500+</span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">Active Members</p>
          </div>
          <div>
            <span className="font-display text-4xl font-extrabold text-neon-red">15,000+</span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">Sq. Feet Facility</p>
          </div>
          <div>
            <span className="font-display text-4xl font-extrabold text-neon-cyan">40+</span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">Certified Trainers</p>
          </div>
          <div>
            <span className="font-display text-4xl font-extrabold text-neon-red">99.2%</span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">Success Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}
