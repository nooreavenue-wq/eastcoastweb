'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Women's Wear",
    count: '120+ Styles',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    href: '/products/womens',
    accent: '#c41e3a',
    description: 'Elegant knitwear from casual to couture. Premium fabrics that move with you.',
  },
  {
    title: "Men's Clothing",
    count: '85+ Styles',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    href: '/products/mens',
    accent: '#b8960c',
    description: 'Refined essentials and statement pieces for the discerning modern man.',
  },
  {
    title: 'Kids Collection',
    count: '60+ Styles',
    tag: 'New Season',
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80',
    href: '/products/kids',
    accent: '#4a7c59',
    description: 'Durable, playful designs that let kids be kids — in style.',
  },
  {
    title: 'Custom Knitwear',
    count: 'Bespoke',
    tag: 'OEM/ODM',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80',
    href: '/products/custom',
    accent: '#6b6560',
    description: 'Your vision, our expertise. Full custom manufacturing from design to delivery.',
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} className="py-32 bg-ec-charcoal relative">
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
              <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Collections</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-ec-white"
            >
              Our Product
              <br />
              <em className="not-italic text-gradient">Categories</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ec-white/50 hover:text-ec-red transition-colors"
            >
              View All Products
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden cursor-pointer"
            >
              <Link href={cat.href}>
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <motion.div
                    animate={{ scale: hovered === i ? 1.07 : 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ec-black via-ec-black/30 to-transparent" />
                  <motion.div
                    animate={{ opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${cat.accent}40, transparent)` }}
                  />

                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1"
                    style={{ background: cat.accent, color: '#f5f2ee' }}
                  >
                    {cat.tag}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: hovered === i ? 1 : 0, scale: hovered === i ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-ec-white flex items-center justify-center"
                  >
                    <ArrowUpRight size={16} className="text-ec-black" />
                  </motion.div>
                </div>

                {/* Text below */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-mono text-ec-white/40 text-xs tracking-widest uppercase mb-1">
                    {cat.count}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ec-white mb-2">{cat.title}</h3>
                  <motion.p
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="font-body text-ec-white/60 text-sm leading-relaxed"
                  >
                    {cat.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
