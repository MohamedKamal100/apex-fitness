import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, ShieldAlert, Award, CalendarDays, Flame } from "lucide-react";
import gymAbout from "../assets/gym_about.png";

export default function About() {
  const strengths = [
    {
      icon: <Dumbbell className="w-6 h-6 text-neon-cyan" />,
      title: "State-of-the-Art Gear",
      desc: "Train with professional-grade biomechanically optimized weight machines, Olympic lifting platforms, and dedicated turf zones.",
    },
    {
      icon: <Award className="w-6 h-6 text-neon-red" />,
      title: "Elite Specialists",
      desc: "Work out alongside IFBB pros, weight loss consultants, and certified athletic coaches committed to your physical evolution.",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-neon-cyan" />,
      title: "Hyper-Flexible Tiers",
      desc: "Choose from contract-free monthly options, high-access memberships, or custom personal training packages built for your schedule.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Images & Visual Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-dark-border group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
              <img
                src={gymAbout}
                alt="State-of-the-Art Gym Interior"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 z-20 glassmorphic border-neon-red/30 p-4 rounded-xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neon-red/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-neon-red" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base leading-tight">EST. 2026</h4>
                  <p className="text-xs text-gray-400">Pushing Human Boundaries</p>
                </div>
              </div>
            </div>

            {/* Futuristic floating card border accent */}
            <div className="absolute -inset-2 rounded-[24px] border border-neon-cyan/25 pointer-events-none -z-10 blur-[1px]"></div>
          </motion.div>

          {/* Right Side: Copy & Strengths */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan">
                Who We Are
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
                We Forge Elite <br />
                <span className="text-gradient-red-cyan">Athletes & Beginners</span>
              </h2>
              <p className="mt-6 text-gray-300 font-sans leading-relaxed text-base">
                At APEX Fitness, we believe physical transformation is the catalyst for absolute self-mastery. We have engineered a premium, high-octane environment equipped with futuristic athletic tools, elite sports science guidance, and an unwavering community mindset.
              </p>
            </motion.div>

            {/* Strengths List */}
            <div className="mt-10 flex flex-col gap-6">
              {strengths.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl border border-dark-border bg-dark-card/40 hover:bg-dark-card/80 transition-colors duration-300 hover:border-dark-border/80 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(0,229,255,0.15)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
