'use client';

import { motion } from 'framer-motion';

const items = [
  'Premium Knitwear', '✦', 'Sustainable Fashion', '✦', "Women's Wear", '✦',
  "Men's Clothing", '✦', 'Kids Collection', '✦', 'Export Quality', '✦',
  'Made in Bangladesh', '✦', 'ISO Certified', '✦', 'Custom Orders', '✦',
  'Premium Knitwear', '✦', 'Sustainable Fashion', '✦', "Women's Wear", '✦',
  "Men's Clothing", '✦', 'Kids Collection', '✦', 'Export Quality', '✦',
  'Made in Bangladesh', '✦', 'ISO Certified', '✦', 'Custom Orders', '✦',
];

export default function MarqueeTicker() {
  return (
    <div className="relative bg-ec-red py-4 overflow-hidden border-y border-ec-red-dark">
      <div className="marquee-wrapper">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`font-mono text-xs tracking-widest uppercase ${
                item === '✦' ? 'text-ec-white/40' : 'text-ec-white'
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
