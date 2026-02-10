
import React from 'react';
import { motion } from 'framer-motion';

const SpecialOffers: React.FC = () => {
  return (
    <section id="offers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Flash Sales</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 font-heading">Limited Time Offers</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Offer 1 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl bg-green-600"
          >
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" 
              alt="Veggie Offer"
            />
            <div className="relative h-full flex flex-col justify-center p-10 sm:p-16">
              <span className="bg-white text-green-700 px-4 py-1 rounded-full text-sm font-bold w-fit mb-4">WEEKLY SPECIAL</span>
              <h3 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6 font-heading">
                Up to 40% OFF <br /> All Vegetables
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-sm">
                Grab your organic greens at unbeatable prices this weekend only.
              </p>
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold w-fit hover:bg-orange-500 hover:text-white transition-all transform hover:translate-x-2">
                Grab Discount
              </button>
            </div>
          </motion.div>

          {/* Offer 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl bg-orange-500"
          >
            <img 
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" 
              alt="Dairy Offer"
            />
            <div className="relative h-full flex flex-col justify-center p-10 sm:p-16">
              <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold w-fit mb-4">NEW MEMBER DEAL</span>
              <h3 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6 font-heading">
                Free Delivery <br /> On Your 1st Order
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-sm">
                Join our family today and get your first grocery delivery absolutely free.
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold w-fit hover:bg-green-600 hover:text-white transition-all transform hover:translate-x-2">
                Claim Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
