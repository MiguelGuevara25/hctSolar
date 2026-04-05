export interface Secciones {
  id: number;
  nombre: string;
  slug: string;
}

export interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

export interface Beneficios {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Impactos {
  id: number;
  title: string;
  description: string;
  value: number | string;
}

export interface Aplicaciones {
  id: number;
  img: string;
  title: string;
}

export interface Funcionamiento {
  id: number;
  images: string[];
  title: string;
  text1: string;
  text2: string;
}