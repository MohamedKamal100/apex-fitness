import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Chris Vance",
      program: "Metabolic Burn",
      rating: 5,
      comment: "APEX completely changed my relationship with fitness. The coaches actually understand nutrition biochemistry. The atmosphere is intense but extremely welcoming.",
      avatar: "C",
      borderGlow: "hover:border-neon-cyan/45 hover:shadow-[0_0_15px_rgba(0,229,255,0.1)]",
    },
    {
      name: "Liam Cross",
      program: "Muscle Forge",
      rating: 5,
      comment: "The equipment is easily the best in the city. Bio-mechanically optimized machines have saved my joints, and Coach Marcus's strength program has me lifting heavier than ever.",
      avatar: "L",
      borderGlow: "hover:border-neon-red/45 hover:shadow-[0_0_15px_rgba(255,62,62,0.1)]",
    },
    {
      name: "Sarah Jennings",
      program: "Combat CrossFit",
      rating: 5,
      comment: "I love the community here. The energy is unmatched. Every single workout pushes you to your absolute limits. Plus, the recovery lab options are elite.",
      avatar: "S",
      borderGlow: "hover:border-neon-cyan/45 hover:shadow-[0_0_15px_rgba(0,229,255,0.1)]",
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-dark-card/30 border-y border-dark-border relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-red/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan">
            Client Voices
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
            What Our <span className="text-gradient-red-cyan">Members Say</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Real feedback from dedicated members who committed to the APEX lifestyle and transformed their physique.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glassmorphic border-dark-border/60 rounded-2xl p-8 transition-all duration-300 relative group ${review.borderGlow}`}
            >
              {/* Quote Decorative Icon */}
              <Quote className="w-10 h-10 text-dark-border absolute top-6 right-6 opacity-30 group-hover:scale-110 transition-transform duration-300" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-4.5 h-4.5 text-neon-red fill-neon-red drop-shadow-[0_0_4px_rgba(255,62,62,0.6)]"
                  />
                ))}
              </div>

              {/* Feedback comment */}
              <p className="text-gray-300 text-sm leading-relaxed font-sans min-h-[100px]">
                "{review.comment}"
              </p>

              {/* Divider */}
              <hr className="border-dark-border/40 my-6" />

              {/* User Metadata */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-neon-red to-neon-cyan flex items-center justify-center font-display font-bold text-white text-base shadow-[0_0_8px_rgba(0,229,255,0.4)]">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base leading-tight">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-neon-cyan font-bold uppercase tracking-widest mt-0.5 block">
                    Completed: {review.program}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
