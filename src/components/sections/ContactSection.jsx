'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-32 bg-ec-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-ec-red" />
              <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Contact Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-ec-white mb-8"
            >
              Let's Start
              <br />
              <span className="text-gradient">Working Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-ec-white/60 text-lg leading-relaxed mb-12"
            >
              Ready to bring your designs to life? Get in touch with our team for a custom quote, 
              factory visit, or simply to learn more about our capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: 'Phone', value: '+88 02-4767-0776, 77' },
                { icon: Mail, label: 'Email', value: 'info@eastcoastknit.com' },
                { icon: MapPin, label: 'Address', value: 'Dhaka Export Processing Zone, Bangladesh' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-ec-red/10 border border-ec-red/20 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-ec-red" />
                  </div>
                  <div>
                    <div className="font-mono text-ec-white/30 text-[10px] tracking-widest uppercase">{item.label}</div>
                    <div className="font-body text-ec-white text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-ec-black border border-white/5 p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <CheckCircle size={48} className="text-ec-red mb-4" />
                <h3 className="font-display text-2xl text-ec-white mb-2">Message Sent!</h3>
                <p className="font-body text-ec-white/50 text-sm">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Full Name', placeholder: 'John Smith', type: 'text' },
                    { key: 'company', label: 'Company', placeholder: 'Your Brand', type: 'text' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="font-mono text-ec-white/40 text-[10px] tracking-widest uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-ec-charcoal border border-white/10 text-ec-white font-body text-sm px-4 py-3 focus:outline-none focus:border-ec-red transition-colors placeholder-ec-white/20"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="font-mono text-ec-white/40 text-[10px] tracking-widest uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@yourbrand.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ec-charcoal border border-white/10 text-ec-white font-body text-sm px-4 py-3 focus:outline-none focus:border-ec-red transition-colors placeholder-ec-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-ec-white/40 text-[10px] tracking-widest uppercase block mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project, quantities, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-ec-charcoal border border-white/10 text-ec-white font-body text-sm px-4 py-3 focus:outline-none focus:border-ec-red transition-colors placeholder-ec-white/20 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full bg-ec-red hover:bg-ec-red-dark text-ec-white font-mono text-sm tracking-widest uppercase py-4 flex items-center justify-center gap-3 transition-all duration-300"
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
