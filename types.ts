
export interface PackFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface MaterialSample {
  id: number;
  title: string;
  type: 'audio' | 'sheet' | 'file';
  previewUrl?: string;
  duration?: string;
  category: string;
}
