'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80', cat: "Women's", title: 'Knit Dress Collection' },
  { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80', cat: "Men's", title: 'Polo Collection' },
  { src: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80', cat: 'Kids', title: 'Kids Casual Wear' },
  { src: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80', cat: 'Factory', title: 'Production Floor' },
  { src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80', cat: "Women's", title: 'Winter Collection' },
  { src: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80', cat: "Men's", title: 'Oxford Knit' },
  { src: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80', cat: 'Kids', title: 'Autumn Kids Line' },
  { src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', cat: "Women's", title: 'Knitwear Studio' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pt-28">
      <div className="py-20 bg-ec-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Visual Stories</span>
          </div>
          <h1 className="font-display font-black text-7xl text-ec-white">Gallery</h1>
        </div>
      </div>

      <section className="py-16 bg-ec-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setLightbox(img)}
                className="group relative overflow-hidden cursor-pointer break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ec-black/0 group-hover:bg-ec-black/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-ec-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-ec-black to-transparent">
                  <div className="font-mono text-ec-red text-[10px] tracking-widest uppercase">{img.cat}</div>
                  <div className="font-display text-ec-white font-bold">{img.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ec-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-ec-white/60 hover:text-ec-white transition-colors"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain" />
              <div className="mt-4">
                <div className="font-mono text-ec-red text-xs tracking-widest uppercase">{lightbox.cat}</div>
                <div className="font-display text-ec-white font-bold text-xl">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
