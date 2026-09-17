'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Award, Globe, Users, Factory } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { icon: Factory, value: '1995', label: 'Established', desc: 'Nearly three decades of excellence' },
  { icon: Users, value: '2,500+', label: 'Skilled Workers', desc: 'Expert artisans and technicians' },
  { icon: Globe, value: '30+', label: 'Countries Served', desc: 'Global distribution network' },
  { icon: Award, value: 'ISO 9001', label: 'Certified', desc: 'Quality management excellence' },
];

function CountUp({ value }) {
  return <span>{value}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-ec-black relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[20vw] text-white/[0.015] whitespace-nowrap select-none pointer-events-none">
        KNITWEAR
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-ec-red" />
              <span className="font-mono text-ec-red text-xs tracking-widest uppercase">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-ec-white leading-tight mb-8"
            >
              Weaving Stories
              <br />
              <span className="text-gradient">Into Every Thread</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-ec-white/60 text-lg leading-relaxed mb-6"
            >
              East Coast Knit Wear Pvt. Ltd. is one of Bangladesh's premier garment manufacturers, 
              specializing in high-quality knitwear for global fashion brands. With state-of-the-art 
              facilities and an unwavering commitment to craftsmanship, we bring your designs to life.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-ec-white/60 text-lg leading-relaxed mb-10"
            >
              From concept to delivery, our vertically integrated production process ensures 
              uncompromising quality at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-mono text-sm tracking-widest uppercase text-ec-white border-b border-ec-red pb-1 hover:text-ec-red transition-colors duration-300"
              >
                Discover Our Story
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="group bg-ec-charcoal border border-white/5 p-6 hover:border-ec-red/30 transition-all duration-500 hover:bg-ec-charcoal/80 card-hover"
              >
                <stat.icon
                  size={20}
                  className="text-ec-red mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="font-display font-black text-3xl text-ec-white mb-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="font-mono text-ec-red text-xs tracking-widest uppercase mb-2">
                  {stat.label}
                </div>
                <div className="font-body text-ec-white/40 text-xs leading-relaxed">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
