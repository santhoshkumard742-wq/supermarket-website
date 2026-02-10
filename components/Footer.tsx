
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-green-700 tracking-tight font-heading">
                FreshMart
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Your one-stop destination for fresh, organic, and locally-sourced groceries. Quality you can trust, delivered to your door.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-500 hover:text-green-600 transition-colors">Shop Categories</a></li>
              <li><a href="#products" className="text-gray-500 hover:text-green-600 transition-colors">Featured Products</a></li>
              <li><a href="#offers" className="text-gray-500 hover:text-green-600 transition-colors">Special Offers</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-green-600 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-6 font-heading">Help & Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Your Account</a></li>
              <li><a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Returns & Refunds</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-green-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-6 font-heading">Newsletter</h4>
            <p className="text-gray-500 mb-6">Subscribe to get notified about sales and new arrivals.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-2xl bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
          
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2024 FreshMart Supermarket. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
