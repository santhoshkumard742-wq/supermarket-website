
import React from 'react';
import { ShoppingBag, Truck, BadgeCheck, Zap } from 'lucide-react';
import { Category, Product, Testimonial, Feature } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Fruits & Vegetables', icon: '🍎', color: 'bg-green-100', count: 120 },
  { id: '2', name: 'Dairy Products', icon: '🥛', color: 'bg-blue-100', count: 45 },
  { id: '3', name: 'Snacks & Beverages', icon: '🥤', color: 'bg-orange-100', count: 86 },
  { id: '4', name: 'Household Items', icon: '🧼', color: 'bg-purple-100', count: 54 },
  { id: '5', name: 'Meat & Seafood', icon: '🥩', color: 'bg-red-100', count: 32 },
];

export const FEATURED_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Organic Red Apples', price: 4.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop', category: 'Fruits', unit: 'kg' },
  { id: 'p2', name: 'Fresh Whole Milk', price: 3.50, image: 'https://images.unsplash.com/photo-1563636619-e9107da5a1bb?w=400&h=400&fit=crop', category: 'Dairy', unit: '1L' },
  { id: 'p3', name: 'Avocado Hass', price: 2.45, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop', category: 'Fruits', unit: 'pc' },
  { id: 'p4', name: 'Artisan Sourdough', price: 5.25, image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=400&h=400&fit=crop', category: 'Bakery', unit: 'loaf' },
  { id: 'p5', name: 'Roasted Almonds', price: 8.99, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&h=400&fit=crop', category: 'Snacks', unit: '500g', isOffer: true, oldPrice: 11.00 },
  { id: 'p6', name: 'Fresh Salmon Fillet', price: 15.40, image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=400&fit=crop', category: 'Seafood', unit: '500g' },
  { id: 'p7', name: 'Greek Yogurt', price: 4.20, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop', category: 'Dairy', unit: '500g' },
  { id: 'p8', name: 'Bell Peppers Mix', price: 3.80, image: 'https://images.unsplash.com/photo-1566567421715-9426d625c93c?w=400&h=400&fit=crop', category: 'Vegetables', unit: 'pack' },
];

export const FEATURES: Feature[] = [
  { id: 'f1', title: 'Fresh Products', description: 'Directly from local farms to your kitchen within 24 hours of harvest.', icon: <BadgeCheck className="w-8 h-8 text-green-600" /> },
  { id: 'f2', title: 'Affordable Prices', description: 'We guarantee the lowest market prices without compromising on quality.', icon: <ShoppingBag className="w-8 h-8 text-orange-500" /> },
  { id: 'f3', title: 'Fast Delivery', description: 'Experience lightning fast delivery within 2 hours of placing your order.', icon: <Truck className="w-8 h-8 text-blue-500" /> },
  { id: 'f4', title: 'Trusted Quality', description: 'Over 50,000 satisfied families trust us for their daily grocery needs.', icon: <Zap className="w-8 h-8 text-purple-600" /> },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Sarah Johnson', role: 'Home Chef', content: 'FreshMart has completely changed how I shop. The produce is always incredibly fresh, and the delivery is super reliable!', avatar: 'https://i.pravatar.cc/150?u=sarah', rating: 5 },
  { id: 't2', name: 'Michael Chen', role: 'Busy Parent', content: 'The user interface is so easy to use. I can finish my weekly grocery shopping in under 10 minutes. Highly recommend!', avatar: 'https://i.pravatar.cc/150?u=michael', rating: 4 },
  { id: 't3', name: 'Elena Rodriguez', role: 'Health Enthusiast', content: 'Love the organic options! It is great to see a supermarket focusing so much on quality and local sourcing.', avatar: 'https://i.pravatar.cc/150?u=elena', rating: 5 },
];
