'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "East Coast Knit Wear has been our manufacturing partner for 7 years. Their quality is consistently exceptional and delivery is always on time. A truly world-class operation.",
    name: 'Sarah Mitchell',
    title: 'Head of Sourcing, Nordstrom',
    country: '🇺🇸 United States',
  },
  {
    quote: "The level of craftsmanship we receive from East Coast is unparalleled. Their team understands our brand values and translates them into every stitch.",
    name: 'Lars Bjornsson',
    title: 'Design Director, H&M',
    country: '🇸🇪 Sweden',
  },
  {
    quote: "From sampling to final delivery, the communication is seamless. We've never had a quality issue in 4 years of partnership. Highly recommended.",
    name: 'Yuki Tanaka',
    title: 'Procurement Manager, UNIQLO',
    country: '🇯🇵 Japan',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-32 bg-ec-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ec-red/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ec-red/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Client Voices</span>
            <div className="w-8 h-0.5 bg-ec-red" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl text-ec-white"
          >
            Trusted by Global
            <br />
            <span className="text-gradient">Fashion Leaders</span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-ec-charcoal border border-white/5 p-10 md:p-14"
        >
          <Quote size={48} className="text-ec-red/20 mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="font-display text-2xl md:text-3xl text-ec-white leading-relaxed mb-10 italic">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-ec-red flex items-center justify-center font-display font-bold text-ec-white text-lg">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-body font-medium text-ec-white">{testimonials[current].name}</div>
                  <div className="font-mono text-ec-white/40 text-xs tracking-widest">{testimonials[current].title}</div>
                </div>
                <div className="ml-auto font-mono text-ec-white/50 text-sm">
                  {testimonials[current].country}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-ec-white/50 hover:text-ec-white hover:border-ec-red transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-ec-white/50 hover:text-ec-white hover:border-ec-red transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
            <div className="flex items-center gap-2 ml-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-300 ${i === current ? 'w-8 bg-ec-red' : 'w-3 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
