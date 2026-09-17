'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Palette, Package, Ship, CheckCircle, Recycle } from 'lucide-react';

const steps = [
  { icon: Palette, num: '01', title: 'Design & Sampling', desc: 'Collaborative design process with rapid prototyping and material selection.' },
  { icon: Scissors, num: '02', title: 'Precision Cutting', desc: 'Computer-aided cutting technology ensures zero-waste precision for every pattern.' },
  { icon: CheckCircle, num: '03', title: 'Quality Knitting', desc: 'State-of-the-art machinery operated by skilled artisans with 15+ years experience.' },
  { icon: Recycle, num: '04', title: 'Eco Finishing', desc: 'Sustainable washing, dyeing, and finishing processes with minimal environmental impact.' },
  { icon: Package, num: '05', title: 'QA & Packaging', desc: 'Rigorous 3-point quality inspection before premium packaging for delivery.' },
  { icon: Ship, num: '06', title: 'Global Delivery', desc: 'Reliable worldwide shipping with full tracking and on-time delivery guarantee.' },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 bg-ec-black relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ec-red/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">How We Work</span>
            <div className="w-8 h-0.5 bg-ec-red" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl text-ec-white"
          >
            From Concept to
            <br />
            <span className="text-gradient">Your Doorstep</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-ec-charcoal border border-white/5 p-8 hover:border-ec-red/30 transition-all duration-500 card-hover"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-4 font-display font-black text-6xl text-white/5 group-hover:text-ec-red/10 transition-colors duration-500">
                {step.num}
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-ec-red/10 border border-ec-red/20 flex items-center justify-center mb-6 group-hover:bg-ec-red/20 transition-colors duration-300">
                  <step.icon size={20} className="text-ec-red" />
                </div>
                <div className="font-mono text-ec-red text-xs tracking-widest uppercase mb-3">
                  Step {step.num}
                </div>
                <h3 className="font-display font-bold text-xl text-ec-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-ec-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
