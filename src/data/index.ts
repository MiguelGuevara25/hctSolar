import type {
  Beneficios,
  Impactos,
  PartnerLogo,
  Secciones,
} from "../interfaces";

export const secciones: Secciones[] = [
  {
    id: 1,
    nombre: "Tecnología",
    slug: "#tecnologia",
  },
  {
    id: 2,
    nombre: "Aplicaciones",
    slug: "#aplicaciones",
  },
  {
    id: 3,
    nombre: "Beneficios",
    slug: "#beneficios",
  },
  {
    id: 4,
    nombre: "Funcionamiento",
    slug: "#funcionamiento",
  },
  {
    id: 5,
    nombre: "Escalabilidad",
    slug: "#escalabilidad",
  },
  {
    id: 6,
    nombre: "Impacto",
    slug: "#impacto",
  },
];

export const partnersLogos: PartnerLogo[] = [
  {
    id: 1,
    src: "/partners/marcas_logo1.png",
    alt: "Partner 1",
  },
  {
    id: 2,
    src: "/partners/marcas_logo2.png",
    alt: "Partner 2",
  },
  {
    id: 3,
    src: "/partners/marcas_logo3.png",
    alt: "Partner 3",
  },
  {
    id: 4,
    src: "/partners/marcas_logo4.png",
    alt: "Partner 4",
  },
  {
    id: 5,
    src: "/partners/marcas_logo5.png",
    alt: "Partner 5",
  },
  {
    id: 6,
    src: "/partners/marcas_logo6.png",
    alt: "Partner 6",
  },
  {
    id: 7,
    src: "/partners/marcas_logo7.png",
    alt: "Partner 7",
  },
  {
    id: 8,
    src: "/partners/marcas_logo8.png",
    alt: "Partner 8",
  },
];

export const beneficios: Beneficios[] = [
  {
    id: 2,
    icon: "/icon/IconoEvitaPerdidasEnergeticas.png",
    title: "Evita pérdidas energéticas",
    description:
      "Reduce hasta en un 30% la pérdida de generación energética, garantizando el máximo rendimiento los 365 días del año.",
  },

  {
    id: 3,
    icon: "/icon/IconoReducelaDemandadeAgua.png",
    title: "Reduce la demanda de agua",
    description:
      "Disminuye el consumo de agua hasta en un 45% frente a métodos manuales gracias a su sistema de microaspersión avanzada.",
  },

  {
    id: 4,
    icon: "/icon/IconoReduceCostosOperativos.png",
    title: "Reduce costos operativos",
    description:
      "Minimiza costos logísticos y operativos mediante automatización, filtración y programación remota de los ciclos de limpieza.",
  },

  {
    id: 5,
    icon: "/icon/IconoEsEcoEficiente.png",
    title: "Es eco-eficiente",
    description:
      "Opera sin químicos ni fuentes de energía contaminantes, contribuyendo activamente al cumplimiento de los Objetivos de Desarrollo Sostenible.",
  },
];

export const impactos: Impactos[] = [
  {
    id: 1,
    title: "Consumo de Agua",
    description: "Ahorro de agua con HCT vs. Limpieza manual",
    value: 47.2,
  },

  {
    id: 2,
    title: "Agua Desmineralizada",
    description: "Ahorro HCT vs. sistemas que dependen de agua desmineralizada",
    value: 96.4,
  },

  {
    id: 3,
    title: "Mano de Obra",
    description: "Eliminación de costos de personal en campo con HCT",
    value: 100,
  },

  {
    id: 4,
    title: "Impacto Ambiental",
    description: "Operación libre de emisiones directas de CO₂ con HCT",
    value: 100,
  },

  {
    id: 5,
    title: "Mantenimiento Técnico",
    description: "La tecnología HCT requiere de un mantenimiento reducido",
    value: "Mínimo",
  },

  {
    id: 6,
    title: "OPEX Anual Total",
    description: "Ahorro general en costos operativos con HCT",
    value: 93.1,
  },
];
