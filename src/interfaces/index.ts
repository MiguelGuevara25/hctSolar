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
