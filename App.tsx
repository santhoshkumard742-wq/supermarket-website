
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-green-700 tracking-tight font-heading">
              FreshMart
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button className="hidden sm:block px-6 py-2.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all transform active:scale-95">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden shadow-xl"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-green-600 px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sections */}
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts addToCart={addToCart} />
        <WhyChooseUs />
        <SpecialOffers />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
