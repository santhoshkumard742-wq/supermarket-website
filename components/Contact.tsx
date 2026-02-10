
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-green-600 p-10 sm:p-16 text-white">
              <h2 className="text-3xl font-bold mb-8 font-heading">Get in Touch</h2>
              <p className="text-green-50/80 mb-12 text-lg">
                Have questions or need assistance with your order? Our team is here to help you 24/7.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-200 text-sm font-medium uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xl font-bold">+91 73583 09147</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-200 text-sm font-medium uppercase tracking-wider mb-1">Email Support</p>
                    <p className="text-xl font-bold">santhoshkumard742@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-200 text-sm font-medium uppercase tracking-wider mb-1">Our Store</p>
                    <p className="text-xl font-bold">782 Fresh Avenue, Green Valley, CA 90210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 pt-10 border-t border-white/10 flex gap-6 text-white/60">
                <p className="text-sm font-medium">Follow our journey on social media</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 p-10 sm:p-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Send an Enquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Partner with Us</option>
                    <option>Feedback</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us how we can help..." 
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-5 bg-green-600 text-white rounded-2xl font-bold text-lg hover:bg-green-700 shadow-xl shadow-green-100 flex items-center justify-center gap-3 transition-colors"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
