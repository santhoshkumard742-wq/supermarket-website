
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  isOffer?: boolean;
  oldPrice?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
