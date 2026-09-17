'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ec-charcoal border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-ec-red py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-ec-white/60 text-xs tracking-widest uppercase mb-2">Ready to Order?</p>
            <h3 className="font-display text-4xl md:text-5xl text-ec-white font-bold">
              Let's Create Together
            </h3>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-ec-white text-ec-red font-mono text-sm tracking-widest uppercase px-8 py-4 hover:bg-ec-black hover:text-ec-white transition-all duration-300"
          >
            Get a Quote
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-ec-red rounded-sm rotate-45" />
              <div className="absolute inset-1 bg-ec-charcoal rounded-sm rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-ec-white font-display font-black text-sm z-10">E</span>
            </div>
            <div>
              <div className="font-display font-bold text-ec-white text-lg leading-tight">East Coast</div>
              <div className="font-mono text-ec-red text-[10px] tracking-[0.3em] uppercase">Knit Wear Pvt. Ltd.</div>
            </div>
          </div>
          <p className="font-body text-ec-white/50 text-sm leading-relaxed mb-6">
            Premium knitwear manufacturer from Bangladesh, delivering world-class garments since 1995.
          </p>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-ec-white/40 hover:text-ec-white hover:border-ec-red hover:bg-ec-red/10 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-mono text-ec-white text-xs tracking-widest uppercase mb-6">Products</h4>
          <ul className="space-y-3">
            {["Women's Wear", "Men's Clothing", "Kids Clothing", "Knitwear", "Sportswear", "Custom Orders"].map((item) => (
              <li key={item}>
                <Link href="/products" className="font-body text-ec-white/50 text-sm hover:text-ec-red transition-colors hover-underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-mono text-ec-white text-xs tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-3">
            {['About Us', 'Our Factory', 'Certifications', 'Gallery', 'Resources', 'Careers'].map((item) => (
              <li key={item}>
                <Link href="/about" className="font-body text-ec-white/50 text-sm hover:text-ec-red transition-colors hover-underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-ec-white text-xs tracking-widest uppercase mb-6">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-ec-red mt-0.5 shrink-0" />
              <p className="font-body text-ec-white/50 text-sm leading-relaxed">
                Dhaka Export Processing Zone, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-ec-red shrink-0" />
              <a href="tel:+880247670776" className="font-mono text-ec-white/50 text-sm hover:text-ec-red transition-colors">
                +88 02-4767-0776
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-ec-red shrink-0" />
              <a href="mailto:info@eastcoastknit.com" className="font-body text-ec-white/50 text-sm hover:text-ec-red transition-colors">
                info@eastcoastknit.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-ec-white/30 text-xs tracking-widest">
          © 2024 East Coast Knit Wear Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
            <Link key={item} href="#" className="font-mono text-ec-white/30 text-xs tracking-widest hover:text-ec-red transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
