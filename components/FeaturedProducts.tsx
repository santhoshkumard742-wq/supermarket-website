
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../constants';

interface FeaturedProductsProps {
  addToCart: () => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ addToCart }) => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-500 font-bold tracking-widest uppercase text-sm"
            >
              Fresh Arrivals
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-heading"
            >
              Featured Products
            </motion.h2>
          </div>
          <motion.a 
            href="#"
            whileHover={{ x: 5 }}
            className="text-green-600 font-bold flex items-center gap-2 hover:text-green-700 transition-colors"
          >
            View All Products <span className="text-2xl">→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                {product.isOffer && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Sale
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{product.category}</p>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl truncate">
                  {product.name}
                </h3>
                <div className="flex items-end justify-between mt-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Per {product.unit}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={addToCart}
                    className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center hover:bg-green-700 shadow-lg shadow-green-100 transition-colors"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
