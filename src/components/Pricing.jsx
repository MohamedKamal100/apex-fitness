import React from "react";
import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Base Camp",
      price: "29",
      period: "month",
      desc: "Essential gym access for individual fitness self-starters.",
      features: [
        "24/7 Gym & Turf Area Access",
        "Full locker room & sauna access",
        "Initial 3D body scans assessment",
        "1 Guest pass per month",
        "APEX mobile app tracking",
      ],
      isPopular: false,
      accentColor: "border-dark-border hover:border-neon-cyan/45",
      btnClass: "bg-transparent text-white border border-dark-border hover:border-neon-cyan hover:bg-neon-cyan/5",
      tagColor: "text-gray-400",
    },
    {
      name: "Apex Path",
      price: "59",
      period: "month",
      desc: "Our most popular tier. Designed for rapid results with full classes.",
      features: [
        "All Base Camp features",
        "Unlimited group fitness classes",
        "Custom nutritional templates",
        "Bi-weekly progress audits",
        "10% discount on APEX bar",
        "3 Guest passes per month",
      ],
      isPopular: true,
      accentColor: "border-neon-red/50 neon-shadow-red scale-100 lg:scale-105",
      btnClass: "bg-neon-red text-white hover:bg-neon-red/90 shadow-[0_0_15px_rgba(255,62,62,0.4)]",
      tagColor: "text-neon-red",
    },
    {
      name: "Absolute Elite",
      price: "99",
      period: "month",
      desc: "All-inclusive premium coaching and bio-hacking recovery access.",
      features: [
        "All Apex Path features",
        "2 Private training sessions / mo",
        "Cryotherapy & compression lab",
        "Complementary workout towels",
        "Custom workout program updates",
        "Unlimited guest passes",
      ],
      isPopular: false,
      accentColor: "border-dark-border hover:border-neon-cyan/45",
      btnClass: "bg-transparent text-white border border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]",
      tagColor: "text-neon-cyan",
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-sm font-bold uppercase tracking-widest text-neon-cyan">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
            Invest in Your <span className="text-gradient-cyan-red">Legacy</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Transparent pricing options with zero hidden fees. Select a roadmap tailored to command your physical targets.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col bg-dark-card border rounded-2xl p-8 md:p-10 relative transition-all duration-300 ${plan.accentColor}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(255,62,62,0.8)] animate-pulse">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <span className={`text-xs font-bold uppercase tracking-widest ${plan.tagColor}`}>
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-white text-5xl font-extrabold font-display">${plan.price}</span>
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>
              </div>

              <hr className="border-dark-border/60 my-6" />

              {/* Features List */}
              <div className="flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Membership Perks:
                </h4>
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full py-4 rounded-xl text-center font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 ${plan.btnClass}`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* Membership Guarantee Card */}
        <div className="mt-16 text-center text-xs text-gray-500 max-w-md mx-auto">
          All plans include a 7-day money-back guarantee. No questions asked. You can freeze or cancel your plan at any time through our member portal.
        </div>

      </div>
    </section>
  );
}
