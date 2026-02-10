
import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-green-600 font-bold tracking-widest uppercase text-sm"
          >
            Explore
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-heading"
          >
            Shop by Category
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Find exactly what you need from our wide variety of sections, carefully organized for your convenience.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={item}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl ${cat.color} flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:shadow-xl group`}
            >
              <span className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </span>
              <h3 className="font-bold text-gray-900 mb-1 text-lg leading-tight">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {cat.count} items
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
