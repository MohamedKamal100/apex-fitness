import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import trainer3 from "../assets/trainer3.png";

export default function Trainers() {
  const trainers = [
    {
      name: "Marcus Steel",
      role: "Head Strength Coach",
      specialty: "Hypertrophy & Powerlifting",
      image: trainer1,
      bio: "Former IFBB Pro competitor with 12+ years coaching athletes to build explosive power and optimal symmetry.",
      accent: "border-neon-red/30",
    },
    {
      name: "Sarah Storm",
      role: "CrossFit Director",
      specialty: "High-Intensity Functional Fitness",
      image: trainer2,
      bio: "8-time regional CrossFit competitor. Specializes in metabolic conditioning, mobility, and gymnastic strength.",
      accent: "border-neon-cyan/30",
    },
    {
      name: "Damian Vance",
      role: "Nutrition & Fat Loss Specialist",
      specialty: "Metabolic Restructuring",
      image: trainer3,
      bio: "M.S. in Sports Nutrition. Has helped over 800+ clients rebuild their metabolism and sustain fat loss.",
      accent: "border-neon-red/30",
    },
  ];

  return (
    <section id="trainers" className="py-24 md:py-32 bg-dark-card/30 border-y border-dark-border relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan">
            Elite Squad
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
            Meet Your <span className="text-gradient-red-cyan">Coaches</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Our certified master coaches bring decades of competitive experience, sports science degrees, and custom training systems.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group bg-dark-card border rounded-2xl overflow-hidden relative ${trainer.accent} transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Image Box */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/10 to-transparent opacity-90 z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 scale-100 group-hover:scale-105"
                />

                {/* Floating Certificate Icon */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg glassmorphic border-neon-cyan/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-neon-cyan" />
                </div>
              </div>

              {/* Info & Hover Details Card */}
              <div className="p-6 relative z-20 bg-dark-card">
                <span className="text-xs font-semibold text-neon-cyan uppercase tracking-widest">
                  {trainer.role}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1 group-hover:text-neon-red transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                  {trainer.specialty}
                </p>

                {/* Hover Reveal Drawer */}
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out border-t border-dark-border/40 pt-4">
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {trainer.bio}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 mt-5">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-red transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan transition-colors"
                      aria-label="YouTube"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                        <polyline points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
