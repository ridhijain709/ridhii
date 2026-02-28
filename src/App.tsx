import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu,
  X,
  Linkedin,
  Mail,
  Instagram
} from 'lucide-react';

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'The Book', href: '#book' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-orange-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-widest uppercase text-slate-900">
          Ridhi <span className="text-orange-600">Jain</span>
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-mono text-[10px] uppercase tracking-widest text-slate-600 hover:text-orange-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

// --- Service Card Component ---
const ServiceCard = ({ tier, name, price, features, isFeatured }: any) => (
  <div className={`p-8 border transition-all duration-500 ${
    isFeatured ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border-slate-200 hover:border-orange-400'
  }`}>
    <div className="font-mono text-[9px] uppercase tracking-widest text-orange-500 mb-4">{tier}</div>
    <h3 className="text-2xl font-light mb-2">{name}</h3>
    <div className={`text-3xl font-light mb-6 ${isFeatured ? 'text-orange-400' : 'text-orange-700'}`}>
      ₹{price} <span className="text-xs font-mono opacity-40">INR</span>
    </div>
    <ul className="space-y-4 mb-8 h-48">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex gap-3 text-sm font-light opacity-80">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <a href="#contact" className={`block w-full py-3 text-center font-mono text-[10px] uppercase tracking-widest transition-all ${
      isFeatured ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-slate-900 hover:bg-slate-900 hover:text-white'
    }`}>
      Inquire Now
    </a>
  </div>
);

// --- Main Application ---
export default function App() {
  return (
    <div className="bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 mb-4 block">AI Strategist & Author</span>
            <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">
              Where AI meets <br />
              <span className="italic text-orange-700">human insight</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md mb-10">
              I help brands uncover hidden growth using AI-powered strategy — and write Shayari about everything the data misses.
            </p>
            <div className="flex gap-4">
              <a href="#services" className="px-8 py-4 bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-orange-700 transition-all">Hire Me</a>
              <a href="#book" className="px-8 py-4 border border-slate-900 text-slate-900 font-mono text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Read Aks</a>
            </div>
          </motion.div>

          <div className="relative flex justify-center">
             {/* Dynamic Book Visual */}
            <div className="w-64 h-96 bg-slate-900 rounded-r-xl shadow-2xl transform rotate-y-[-15deg] overflow-hidden group">
              <img src="/book.jpg" alt="Aks Book" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                <p className="text-orange-400 font-mono text-[10px] tracking-widest uppercase">Available on Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-20">
          <div className="sticky top-32">
            <img src="/author.jpg" alt="Ridhi Jain" className="w-full aspect-[3/4] object-cover rounded shadow-2xl mb-6" />
            <p className="font-mono text-[10px] uppercase text-orange-600 tracking-widest">Muzaffarnagar, Uttar Pradesh</p>
          </div>
          <div className="space-y-8 text-xl font-light text-slate-700 leading-relaxed">
            <h2 className="text-5xl font-light text-slate-900 mb-12">The <span className="italic text-orange-700">Story</span></h2>
            <p>Born in 2006, my journey with poetry began in Muzaffarnagar, nurtured by a deep love for literature. While I pursue my BBA from MSU Saharanpur, poetry remains my constant companion.</p>
            <p>Heavily inspired by Gulzar Sahab, my work "Aks" captures moments of love, nostalgia, and self-discovery. I believe the most powerful insights live between the numbers and the people behind them.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-light mb-6">Growth <span className="italic text-orange-700">Services</span></h2>
          <p className="text-slate-500">Three ways to work together — from diagnostics to growth partnerships.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <ServiceCard tier="Starter" name="AI Brand Audit" price="999" features={["1-page AI-powered brand diagnostic", "Top 3 untapped growth opportunities", "PDF report delivered in 48 hrs"]} />
          <ServiceCard tier="Popular" name="Strategy Report" price="4,999" isFeatured={true} features={["Full AI marketing strategy report", "Channel-by-channel growth plan", "30-minute strategy call", "2 weeks follow-up support"]} />
          <ServiceCard tier="Retainer" name="Growth Partner" price="14,999" features={["2 full audits per month", "Ongoing execution support", "Weekly strategy check-ins", "Priority response within 4 hours"]} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12 italic text-orange-400">Let's build the future</h2>
          <div className="flex justify-center gap-12">
            <a href="mailto:jainridhi@example.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail size={20} /> <span className="font-mono text-xs uppercase tracking-widest">Email</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Linkedin size={20} /> <span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800 bg-slate-900 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
        &copy; 2026 Ridhi Jain. All Rights Reserved.
      </footer>
    </div>
  );
}