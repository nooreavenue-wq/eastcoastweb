'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/assets/Logo/Logo.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: "Women's Wear", href: '/products/womens' },
      { label: "Men's Clothing", href: '/products/mens' },
      { label: 'Kids Clothing', href: '/products/kids' },
      { label: 'Knitwear', href: '/products/knitwear' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-ec-red text-ec-white text-xs py-2 px-6 flex justify-between items-center z-50 relative"
      >
        <span className="font-mono tracking-widest uppercase flex items-center gap-2">
          <Phone size={11} />
          +88 02-4767-0776,77
        </span>
        <span className="hidden md:block font-mono tracking-widest uppercase opacity-70">
          Premium Knitwear Since 1995 · Bangladesh
        </span>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? ' backdrop-blur-xl  shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-ec-red rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
              <div className="absolute inset-1 bg-ec-charcoal rounded-sm rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-ec-white font-display font-black text-sm z-10">E</span>
            </div> */}
            <div>
              <Image src={Logo} alt="logo" width={1500} height={1500} className='object-cover w-full ' />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="hover-underline font-body text-sm text-ec-white/80 hover:text-ec-white transition-colors duration-300 flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-ec-red text-xs"
                    >
                      ▾
                    </motion.span>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-52 bg-ec-charcoal border border-white/10 rounded-sm overflow-hidden shadow-2xl"
                    >
                      {link.children.map((child, i) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-sm text-ec-white/70 hover:text-ec-white hover:bg-ec-red/20 border-b border-white/5 last:border-0 transition-all duration-200 font-body"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="text-ec-white/60 hover:text-ec-white transition-colors">
              <Search size={18} />
            </button>
            <button className="relative text-ec-white/60 hover:text-ec-white transition-colors">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-ec-red rounded-full text-[8px] flex items-center justify-center font-bold">0</span>
            </button>
            <Link
              href="/contact"
              className="hidden md:block bg-ec-red hover:bg-ec-red-dark text-ec-white text-xs font-mono tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
            <button
              className="lg:hidden text-ec-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed inset-0 z-50 bg-ec-black flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div className="font-display text-xl font-bold text-ec-white">Menu</div>
              <button onClick={() => setMobileOpen(false)} className="text-ec-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-ec-white/80 hover:text-ec-white hover:text-ec-red transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-3 ml-4 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-ec-white/50 font-body text-sm hover:text-ec-red transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-6 border-t border-white/10">
              <p className="font-mono text-ec-red text-xs tracking-widest uppercase">+88 02-4767-0776,78</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
