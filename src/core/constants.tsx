
import React from 'react';
import { Briefcase, FileText, GraduationCap, Gavel, CreditCard, Car, Building2, Users, Search, Zap } from 'lucide-react';
import { Service, Business, NewsArticle } from './types';

export const CURRENT_YEAR = new Date().getFullYear();
export const NEXT_YEAR = CURRENT_YEAR + 1;

export const COLORS = {
  primary: '#0056A4',
  secondary: '#E31B23',
  accent: '#FBBF24',
};

export const DISTRICTS = [
  { name: 'Pariñas', description: 'Capital provincial y centro administrativo.', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=600' },
  { name: 'La Brea', description: 'Histórico distrito petrolero.', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Lobitos', description: 'Paraíso del surf y arquitectura.', image: 'https://images.unsplash.com/photo-1502680399488-ea23e021fe44?auto=format&fit=crop&q=80&w=600' },
  { name: 'El Alto', description: 'Zona industrial con vistas al mar.', image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Los Órganos', description: 'Turismo y avistamiento de ballenas.', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=600' },
  { name: 'Máncora', description: 'Destino turístico internacional.', image: 'https://images.unsplash.com/photo-1544155106-2580ec7e2469?auto=format&fit=crop&q=80&w=600' },
];

export const SERVICES: any[] = [
  {
    id: '1',
    title: 'Asesorías Especializadas',
    description: 'Tributaria, legal, laboral e indicadores económicos para la toma de decisiones.',
    icon: <Gavel className="w-8 h-8 text-white" />,
    category: 'Estrategia',
    responseTime: '24h',
    isDigital: true
  },
  {
    id: '2',
    title: 'Gestión de Protestos',
    description: 'Levantamiento de protestos, moras y expedición de certificados negativos oficiales.',
    icon: <FileText className="w-8 h-8 text-white" />,
    category: 'Legal',
    responseTime: 'Inmediato',
    isDigital: true
  },
  {
    id: '3',
    title: 'Placas Vehiculares',
    description: 'Trámite oficial de placas para vehículos nuevos y duplicados ante la AAP.',
    icon: <Car className="w-8 h-8 text-white" />,
    category: 'Logística',
    responseTime: '48h',
    isDigital: false
  },
  {
    id: '4',
    title: 'Alquiler de Ambientes',
    description: 'Auditorios y salas de reuniones equipadas con tecnología de punta para eventos.',
    icon: <Building2 className="w-8 h-8 text-white" />,
    category: 'Activos',
    responseTime: 'Reserva Online',
    isDigital: true
  },
  {
    id: '5',
    title: 'Reportes Infocorp',
    description: 'Consultoría y entrega de reportes de crédito detallados para evaluación de riesgos.',
    icon: <Search className="w-8 h-8 text-white" />,
    category: 'Finanzas',
    responseTime: 'Instantáneo',
    isDigital: true
  },
  {
    id: '6',
    title: 'Bolsa de Trabajo',
    description: 'Conectamos el talento talareño con las mejores oportunidades del sector industrial.',
    icon: <Users className="w-8 h-8 text-white" />,
    category: 'Talento',
    responseTime: 'Sincronizado',
    isDigital: true
  },
  {
    id: '7',
    title: 'Directorio Asociados',
    description: '¡Cómprale a un Asociado! Acceso preferencial a la red de proveedores locales.',
    icon: <Briefcase className="w-8 h-8 text-white" />,
    category: 'Comercio',
    responseTime: 'Global',
    isDigital: true
  },
  {
    id: '8',
    title: 'Hub Vive Talara',
    description: 'Digitalización comercial y marketing de destino impulsado por Manguito Labs.',
    icon: <Zap className="w-8 h-8 text-white" />,
    category: 'Innovación',
    responseTime: '24/7 Live',
    isDigital: true
  }
];

export const DIRECTORY: Business[] = [
  {
    id: '1',
    name: 'Refinería Talara',
    sector: 'Energía',
    address: 'Av. Industrial s/n, Talara',
    phone: '073-384600',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    isDigitalized: true,
    digitalScore: 98,
    activePromos: 0,
    xpValue: "100 XP",
    level: 'Platinum'
  },
  {
    id: '2',
    name: 'Máncora Ocean Resort',
    sector: 'Turismo',
    address: 'Panamericana Norte Km 1164',
    phone: '073-258412',
    website: 'https://mancora-resort.pe',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    isDigitalized: true,
    digitalScore: 95,
    activePromos: 3,
    xpValue: "50 XP",
    level: 'Platinum'
  },
  {
    id: '3',
    name: 'Restaurante El Timón',
    sector: 'Gastronomía',
    address: 'Av. Bolognesi 123',
    phone: '073-445566',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    isDigitalized: true,
    digitalScore: 88,
    activePromos: 2,
    xpValue: "30 XP",
    level: 'Gold'
  },
  {
    id: '4',
    name: 'Pesquera del Norte',
    sector: 'Industria',
    address: 'Zona Industrial Sector B',
    phone: '073-112233',
    image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=600',
    isDigitalized: false,
    digitalScore: 24,
    level: 'Standard'
  },
  {
    id: '5',
    name: 'Logística Talara S.A.',
    sector: 'Logística',
    address: 'Av. Bolognesi 450',
    phone: '073-998877',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    isDigitalized: true,
    digitalScore: 75,
    activePromos: 0,
    xpValue: "20 XP",
    level: 'Gold'
  },
  {
    id: '6',
    name: 'Hotel Puerto Sol',
    sector: 'Turismo',
    address: 'Urb. Los Pinos A-12',
    phone: '073-556677',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600',
    isDigitalized: false,
    digitalScore: 15,
    level: 'Standard'
  }
];

export const NEWS: NewsArticle[] = [
  {
    id: '1',
    title: `Impacto de la Nueva Refinería en el Comercio Local ${CURRENT_YEAR}`,
    summary: 'La modernización de la refinería dinamiza los servicios logísticos y el comercio de la provincia, generando más de 2000 empleos indirectos.',
    date: `18 de Mayo, ${CURRENT_YEAR}`,
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    category: 'Economía'
  },
  {
    id: '2',
    title: `Temporada de Avistamiento de Ballenas ${CURRENT_YEAR}`,
    summary: 'Los Órganos y Máncora se preparan para recibir miles de turistas. La Cámara coordina protocolos de calidad con socios hoteleros.',
    date: `15 de Mayo, ${CURRENT_YEAR}`,
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800',
    category: 'Turismo'
  },
  {
    id: '3',
    title: `Lanzamiento de la App Vive Talara ${CURRENT_YEAR}.2`,
    summary: 'Nueva actualización permitirá a los socios de la Cámara gestionar reservas y pagos digitales directamente desde la plataforma oficial.',
    date: `10 de Mayo, ${CURRENT_YEAR}`,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    category: 'Tecnología'
  }
];
