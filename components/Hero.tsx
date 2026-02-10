
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 opacity-30 -skew-x-12 transform translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Rated #1 Fresh Grocery Store in Town</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 font-heading">
              Fresh Groceries <br />
              <span className="text-green-600">Delivered Daily</span> <br />
              to Your Door.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Quality, freshness, and affordability combined. Get organic produce and everyday essentials delivered right to your doorstep within hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#products"
                className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg shadow-lg shadow-green-200 hover:bg-green-700 flex items-center justify-center gap-2"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#offers"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-green-600 hover:text-green-600 flex items-center justify-center gap-2 transition-colors"
              >
                View Offers
              </motion.a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">50k+</p>
                <p className="text-gray-500 text-sm">Customers</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">120+</p>
                <p className="text-gray-500 text-sm">Stores</p>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">10k+</p>
                <p className="text-gray-500 text-sm">Products</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                alt="Fresh Groceries" 
                className="rounded-3xl shadow-2xl w-full max-w-xl mx-auto border-8 border-white"
              />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Star className="text-orange-500 fill-current w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Quality Verified</p>
                    <p className="text-gray-500 text-xs text-nowrap">100% Organic Products</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ArrowRight className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Express Delivery</p>
                    <p className="text-gray-500 text-xs text-nowrap">In under 2 Hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decoration blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-200 blur-3xl rounded-full opacity-20 -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
