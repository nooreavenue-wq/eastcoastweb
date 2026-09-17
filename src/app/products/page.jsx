'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', "Women's", "Men's", 'Kids', 'Custom'];

const products = [
  { title: 'Cable Knit Sweater', category: "Women's", image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80', moq: '500 pcs', lead: '45 days' },
  { title: 'Polo T-Shirt', category: "Men's", image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80', moq: '1000 pcs', lead: '30 days' },
  { title: 'Kids Hoodie', category: 'Kids', image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=500&q=80', moq: '300 pcs', lead: '40 days' },
  { title: 'Ribbed Tank Top', category: "Women's", image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80', moq: '800 pcs', lead: '25 days' },
  { title: 'Oxford Knit Shirt', category: "Men's", image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80', moq: '600 pcs', lead: '35 days' },
  { title: 'Kids Cardigan', category: 'Kids', image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&q=80', moq: '400 pcs', lead: '45 days' },
  { title: 'Custom Knitwear', category: 'Custom', image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&q=80', moq: 'Negotiable', lead: 'Varies' },
  { title: 'Merino Turtleneck', category: "Women's", image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80', moq: '300 pcs', lead: '50 days' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-20 bg-ec-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Our Products</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-7xl text-ec-white mb-6"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-ec-white/60 text-xl max-w-lg"
          >
            World-class garments crafted with precision and care, for brands that demand the best.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-ec-charcoal border-b border-white/5 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 overflow-x-auto">
          <Filter size={14} className="text-ec-white/30 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 whitespace-nowrap transition-all duration-200 ${
                active === cat
                  ? 'bg-ec-red text-ec-white'
                  : 'text-ec-white/40 hover:text-ec-white border border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-ec-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filtered.map((product, i) => (
                <motion.div
                  key={product.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group bg-ec-charcoal border border-white/5 overflow-hidden hover:border-ec-red/30 transition-all duration-400 card-hover"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ec-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[9px] tracking-widest uppercase bg-ec-red text-ec-white px-2 py-0.5">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-ec-white mb-3">{product.title}</h3>
                    <div className="flex justify-between items-center text-xs font-mono text-ec-white/40">
                      <span>MOQ: {product.moq}</span>
                      <span>Lead: {product.lead}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="group/btn mt-4 flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ec-red hover:text-ec-white transition-colors"
                    >
                      Request Quote
                      <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
