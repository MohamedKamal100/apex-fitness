import React, { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trainers", href: "#trainers" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-8 h-8 text-neon-red drop-shadow-[0_0_8px_rgba(255,62,62,0.8)] transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -inset-1 rounded-full bg-neon-cyan opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></span>
          </div>
          <span className="font-display text-2xl font-bold tracking-wider text-white">
            APEX<span className="text-neon-cyan">FIT</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-full font-display font-semibold text-sm tracking-wider uppercase bg-transparent text-white border border-neon-red hover:bg-neon-red/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,62,62,0.4)]"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-dark-card/95 border-l border-dark-border z-40 p-8 transform transition-transform duration-300 lg:hidden ease-in-out ${
          isOpen ? "translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-16">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-lg font-semibold text-gray-300 hover:text-neon-cyan transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-neon-red text-white hover:bg-neon-red/90 transition-all shadow-[0_0_10px_rgba(255,62,62,0.3)]"
            >
              Join Now
            </a>
            <div className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} APEX Fitness.
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        ></div>
      )}
    </nav>
  );
}
