'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    tagline: 'Crafted for Excellence',
    headline: "Women's\nCollection",
    sub: 'Premium knitwear redefined for the modern silhouette',
    color: '#c41e3a',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80',
  },
  {
    tagline: 'Refined Menswear',
    headline: "Men's\nClothing",
    sub: 'Structured elegance meets superior comfort',
    color: '#b8960c',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1600&q=80',
  },
  {
    tagline: 'Playful & Durable',
    headline: "Kids'\nCollection",
    sub: 'Built for adventure, styled for every occasion',
    color: '#4a7c59',
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=1600&q=80',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
          setIsAnimating(false);
        }, 600);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const slide = slides[current];

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Layered overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-ec-black via-ec-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-ec-black via-transparent to-transparent opacity-80" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-l border-white/20"
            style={{ left: `${(i + 1) * 16.66}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="w-8 h-0.5"
              style={{ background: slide.color }}
            />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: slide.color }}>
              {slide.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-black text-7xl md:text-8xl lg:text-9xl text-ec-white leading-[0.9] mb-6 whitespace-pre-line"
            >
              {slide.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Sub */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ec-white/60 text-lg mb-10 max-w-md"
          >
            {slide.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group flex items-center gap-3 bg-ec-red hover:bg-ec-red-dark text-ec-white font-mono text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              Explore Collections
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-3 border border-white/20 hover:border-white/50 text-ec-white font-mono text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-white/5"
            >
              <Play size={14} />
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-6 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-0.5 transition-all duration-500 overflow-hidden"
              style={{ width: i === current ? 40 : 16 }}
            >
              <div className="absolute inset-0 bg-white/20" />
              {i === current && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="absolute inset-0 bg-ec-red"
                />
              )}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 right-6 hidden md:flex gap-10">
          {[
            { value: '28+', label: 'Years' },
            { value: '50K+', label: 'Units/Month' },
            { value: '30+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="font-display font-black text-2xl text-ec-white">{stat.value}</div>
              <div className="font-mono text-ec-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ec-white/30 z-10"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
