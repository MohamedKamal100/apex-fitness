import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles } from "lucide-react";
import transformBefore from "../assets/transform_before.png";
import transformAfter from "../assets/transform_after.png";

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="results" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-neon-red" />
            Visual Evidence
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
            The Power of <span className="text-gradient-cyan-red">Transformation</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Drag the slider to witness the raw physical evolution. Results speak louder than promises.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="relative max-w-4xl mx-auto aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden border border-dark-border shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
          
          {/* Base Layer: Before Image */}
          <div className="absolute inset-0 w-full h-full bg-dark-card">
            <img
              src={transformBefore}
              alt="Before Transformation"
              className="w-full h-full object-cover select-none"
            />
            {/* Before Tag */}
            <div className="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-lg glassmorphic border-white/10 text-white text-xs font-bold uppercase tracking-wider">
              Before
            </div>
          </div>

          {/* Top Layer: After Image (Clipped dynamically) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <img
              src={transformAfter}
              alt="After Transformation"
              className="w-full h-full object-cover select-none"
            />
            {/* After Tag */}
            <div className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-lg glassmorphic border-neon-cyan/35 text-neon-cyan text-xs font-bold uppercase tracking-wider">
              After: 12 Weeks
            </div>
          </div>

          {/* Interactive Native Slider Range Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize slider-thumb"
            aria-label="Before and after slider handle"
          />

          {/* Custom Visual Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-neon-cyan z-20 pointer-events-none shadow-[0_0_10px_rgba(0,229,255,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle button in the center */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-bg border-2 border-neon-cyan text-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.6)]">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>

        </div>

        {/* Supporting details card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 max-w-2xl mx-auto glassmorphic border-neon-cyan/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6"
        >
          <div className="text-center md:text-left flex-grow">
            <h3 className="font-display font-bold text-white text-lg">Alex Mercer's Transformation</h3>
            <p className="text-xs uppercase font-semibold text-neon-cyan tracking-wider mt-1">12-Week Custom Muscle Forge Program</p>
            <p className="text-sm text-gray-400 mt-3 font-sans leading-relaxed">
              "Working with Coach Marcus rebuilt my posture, strength, and mindset. I lost 8% body fat while packing on lean mass."
            </p>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center">
            <div className="bg-dark-bg/60 border border-dark-border px-5 py-3.5 rounded-xl min-w-[100px]">
              <span className="font-display font-bold text-neon-red text-xl">-14 lbs</span>
              <p className="text-[10px] text-gray-500 uppercase font-semibold mt-1">Fat Loss</p>
            </div>
            <div className="bg-dark-bg/60 border border-dark-border px-5 py-3.5 rounded-xl min-w-[100px]">
              <span className="font-display font-bold text-neon-cyan text-xl">+6 lbs</span>
              <p className="text-[10px] text-gray-500 uppercase font-semibold mt-1">Lean Muscle</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
