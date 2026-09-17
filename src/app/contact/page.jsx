import ContactSection from '@/components/sections/ContactSection';

export const metadata = {
  title: 'Contact | East Coast Knit Wear',
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <div className="py-20 bg-ec-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-ec-red" />
            <span className="font-mono text-ec-red text-xs tracking-widest uppercase">Get In Touch</span>
          </div>
          <h1 className="font-display font-black text-7xl text-ec-white">Contact</h1>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
