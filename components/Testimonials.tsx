
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-heading">What Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[32px] relative border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-8 right-8 text-green-100 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testi.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-gray-500 text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
