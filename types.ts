import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  icon: LucideIcon;
  imagePlaceholder: string;
}

export interface AMCPlan {
  name: string;
  priceLevel: string;
  features: string[];
  recommended: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}