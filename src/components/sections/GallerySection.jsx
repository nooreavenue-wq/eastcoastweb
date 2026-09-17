'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ZoomIn } from 'lucide-react';
import Link from 'next/link';

const images = [
  { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80', span: 'col-span-2 row-span-2', alt: "Women's Knitwear" },
  { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80', span: 'col-span-1 row-span-1', alt: "Men's Wear" },
  { src: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&q=80', span: 'col-span-1 row-span-1', alt: 'Kids Clothing' },
  { src: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80', span: 'col-span-1 row-span-2', alt: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80', span: 'col-span-2 row-span-1', alt: 'Fashion Collection' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredImg, setHoveredImg] = useState(null);

  return (
    <section ref={ref} className="py-32 bg-ec-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-ec-red" />
              <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Visual Stories</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-ec-white"
            >
              Gallery
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ec-white/50 hover:text-ec-red transition-colors"
            >
              Full Gallery
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredImg(i)}
              onMouseLeave={() => setHoveredImg(null)}
              className={`relative overflow-hidden ${img.span} cursor-pointer`}
            >
              <motion.div
                animate={{ scale: hoveredImg === i ? 1.07 : 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-ec-black/20 hover:bg-ec-black/40 transition-colors duration-300" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImg === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-ec-white/90 flex items-center justify-center">
                  <ZoomIn size={20} className="text-ec-black" />
                </div>
              </motion.div>

              <div className="absolute bottom-3 left-3">
                <span className="font-mono text-ec-white/80 text-xs tracking-widest uppercase bg-ec-black/50 px-2 py-1 backdrop-blur-sm">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
