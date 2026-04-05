import type {
  Aplicaciones,
  Beneficios,
  Funcionamiento,
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
    id: 5,
    icon: "/icon/IconoEvitaPerdidasEnergeticas.png",
    title: "Evita pérdidas energéticas",
    description:
      "Reduce hasta en un 30% la pérdida de generación energética, garantizando el máximo rendimiento los 365 días del año.",
  },

  {
    id: 6,
    icon: "/icon/IconoReducelaDemandadeAgua.png",
    title: "Reduce la demanda de agua",
    description:
      "Disminuye el consumo de agua hasta en un 45% frente a métodos manuales gracias a su sistema de microaspersión avanzada.",
  },

  {
    id: 7,
    icon: "/icon/IconoReduceCostosOperativos.png",
    title: "Reduce costos operativos",
    description:
      "Minimiza costos logísticos y operativos mediante automatización, filtración y programación remota de los ciclos de limpieza.",
  },

  {
    id: 8,
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
    value: 80.5,
  },

  {
    id: 5,
    title: "Mantenimiento Técnico",
    description: "La tecnología HCT requiere de un mantenimiento reducido",
    value: 40,
  },

  {
    id: 6,
    title: "OPEX Anual Total",
    description: "Ahorro general en costos operativos con HCT",
    value: 93.1,
  },
];

export const aplicaciones: Aplicaciones[] = [
  {
    id: 1,
    img: "/img/aplicaciones/F-1.avif",
    title: "Plantas solares sobre suelo con y sin tracking",
  },
  {
    id: 2,
    img: "/img/aplicaciones/F-2.webp",
    title: "Plantas solares sobre techos industriales",
  },
  {
    id: 3,
    img: "/img/aplicaciones/F-3.webp",
    title: "Plantas solares flotantes",
  },
  {
    id: 4,
    img: "/img/aplicaciones/F-4.webp",
    title: "Proyectos de hotelería y edificaciones",
  },
];

export const funcionamiento: Funcionamiento[] = [
  {
    id: 1,
    images: [
      "/img/funcionamiento/Bloque1_Imagen1.webp",
      "/img/funcionamiento/Bloque1_Imagen2.webp",
      "/img/funcionamiento/Bloque1_Imagen3.webp",
    ],
    title: "Desmeralización y Sistema de Filtración de agua incorporado",
    text1:
      "Filtración mecánica por anillos que retiene sólidos suspendidos y sedimentos, asegurando la pureza eficiente del agua a utilizar.",
    text2:
      "Tratamiento magnético que previene depósitos minerales en los módulos solares, garantizando eficiencia y prolongando la vida útil de la instalación.",
  },

  {
    id: 2,
    images: [
      "/img/funcionamiento/Bloque2_Imagen1.webp",
      "/img/funcionamiento/Bloque2_Imagen2.png",
      "/img/funcionamiento/Bloque2_Imagen3.webp",
    ],
    title: "Control de Limpieza Automatizado y de alta precisión",
    text1:
      "Estaciones decodificadas con ciclos de limpieza programables desde su aplicación en línea.",
    text2:
      "Cobertura de limpieza integral mediante boquillas rociadoras de doble alcance y presión controlada.",
  },
];
