
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Beneficios' | 'Servicios' | 'Formación';
}

export interface Business {
  id: string;
  name: string;
  sector: string;
  address: string;
  phone: string;
  website?: string;
  image: string;
  isDigitalized?: boolean;
  digitalScore: number; // 0 a 100
  activePromos?: number;
  xpValue?: string; // Ejemplo: "50 XP"
  level: 'Platinum' | 'Gold' | 'Standard';
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
}
