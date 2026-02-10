
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Why FreshMart?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-8 font-heading">
              A Better Way to <span className="text-green-600">Shop Groceries</span> Online.
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              We focus on local sourcing, minimal waste, and maximum freshness. Our mission is to provide every household with premium quality food without the premium price tag.
            </p>
            
            <div className="space-y-8">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-green-100 hover:bg-green-50/50 transition-all cursor-default"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80" 
                alt="Working at supermarket" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-5xl font-black mb-2 font-heading tracking-tight">100%</p>
                  <p className="text-xl font-medium opacity-90">Freshness Guaranteed or Money Back</p>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
