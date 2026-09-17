'use client';

import { motion } from 'framer-motion';
import { Award, Factory, Globe, Users, Leaf, Shield } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every garment passes through rigorous multi-stage quality checks before leaving our factory.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Committed to eco-friendly processes, reduced water usage, and ethical supply chains.' },
  { icon: Users, title: 'Our People', desc: 'Over 2,500 skilled workers empowered with fair wages, safe conditions, and growth opportunities.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving 30+ countries across Europe, North America, and Asia with reliable logistics.' },
  { icon: Factory, title: 'Our Facility', desc: '150,000 sq ft state-of-the-art factory with cutting-edge knitwear machinery.' },
  { icon: Shield, title: 'Certifications', desc: 'ISO 9001, GOTS, OEKO-TEX, and BSCI certified for the highest international standards.' },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-32 bg-ec-black overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=1600&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ec-black to-ec-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-7xl md:text-8xl text-ec-white mb-6"
          >
            About
            <br />
            <span className="text-gradient">East Coast</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-ec-white/60 text-xl max-w-xl leading-relaxed"
          >
            Since 1995, we've been weaving ambition into every thread — building one of Bangladesh's most respected garment manufacturing companies.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-ec-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-4xl text-ec-white mb-6">Our Mission</h2>
              <p className="font-body text-ec-white/60 text-lg leading-relaxed mb-6">
                To deliver world-class knitwear manufacturing that empowers global fashion brands while 
                uplifting our community through sustainable practices, ethical employment, and relentless innovation.
              </p>
              <p className="font-body text-ec-white/60 text-lg leading-relaxed">
                We believe that great garments start with great people — skilled craftspeople who take pride 
                in every stitch, and a leadership team committed to excellence at every level.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '1995', label: 'Founded' },
                { val: '2,500+', label: 'Employees' },
                { val: '50K+', label: 'Units/Month' },
                { val: '30+', label: 'Countries' },
                { val: '150K', label: 'sq ft Factory' },
                { val: '100%', label: 'On-Time Rate' },
              ].map((s) => (
                <div key={s.label} className="bg-ec-black border border-white/5 p-5 text-center">
                  <div className="font-display font-black text-2xl text-ec-white mb-1">{s.val}</div>
                  <div className="font-mono text-ec-red text-[10px] tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ec-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-4xl text-ec-white mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-ec-charcoal border border-white/5 p-8 hover:border-ec-red/30 transition-all duration-400 card-hover"
              >
                <v.icon size={24} className="text-ec-red mb-5" />
                <h3 className="font-display font-bold text-xl text-ec-white mb-3">{v.title}</h3>
                <p className="font-body text-ec-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
