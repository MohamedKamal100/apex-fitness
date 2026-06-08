import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Flame } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", plan: "apex" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // Simulate API submit
      setSubmitted(true);
      setTimeout(() => {
        // Reset after success
        setFormData({ name: "", email: "", plan: "apex" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-red/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Motivational Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/20 text-neon-red text-[10px] font-bold uppercase tracking-widest mb-6">
                <Flame className="w-3.5 h-3.5 fill-neon-red" />
                Join the Apex Culture
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                No Excuses. <br />
                Just <span className="text-gradient-cyan-red">Physical Legacy</span>.
              </h2>
              
              <p className="mt-6 text-gray-300 font-sans leading-relaxed text-base">
                Stop waiting for the "perfect day". Build your discipline, unlock your true potential, and dominate your fitness targets. Register today to lock in a complimentary 1-on-1 coaching session with one of our certified trainers.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center font-display text-[10px] font-bold text-neon-cyan">✓</div>
                  <span className="text-sm font-medium text-gray-300">Free 3D body composition scan on day one</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center font-display text-[10px] font-bold text-neon-cyan">✓</div>
                  <span className="text-sm font-medium text-gray-300">Custom meal planning templates built by experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center font-display text-[10px] font-bold text-neon-cyan">✓</div>
                  <span className="text-sm font-medium text-gray-300">Full access to recovery sauna & compression gear</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive High-Converting Sign-Up Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glassmorphic border-neon-red/30 p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Form header */}
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-white text-2xl uppercase">Claim Your Pass</h3>
                <p className="text-xs text-gray-400 mt-1.5 font-sans">Enter details to secure your registration and trainer slot.</p>
              </div>

              {/* Form Submission States */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full bg-dark-bg/60 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@domain.com"
                        className="w-full bg-dark-bg/60 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan transition-colors"
                      />
                    </div>

                    {/* Plan Selection Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="plan" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Select Roadmap</label>
                      <select
                        id="plan"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-dark-bg/60 border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none cursor-pointer"
                      >
                        <option value="basic" className="bg-dark-card text-white">Base Camp Plan - $29/mo</option>
                        <option value="apex" className="bg-dark-card text-white">Apex Path Plan - $59/mo</option>
                        <option value="elite" className="bg-dark-card text-white">Absolute Elite Plan - $99/mo</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full group mt-2 inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-display font-bold uppercase tracking-wider bg-neon-red text-white hover:bg-neon-red/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,62,62,0.4)]"
                    >
                      <span>Secure Promotion</span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-10 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] mb-6" />
                    <h4 className="font-display font-bold text-white text-2xl uppercase">Pass Claimed!</h4>
                    <p className="text-sm text-gray-400 mt-2 max-w-sm font-sans leading-relaxed">
                      Thank you, <span className="text-neon-cyan font-bold">{formData.name}</span>. We've sent a pass code to <span className="text-white font-medium">{formData.email}</span>. A trainer will reach out within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-xs font-semibold text-gray-500 hover:text-white uppercase tracking-wider underline cursor-pointer"
                    >
                      Submit Another Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
