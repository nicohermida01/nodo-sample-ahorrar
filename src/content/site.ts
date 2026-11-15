/**
 * Single source of truth for brand data and copy.
 * Rebranding the template should only require editing this file
 * (plus design tokens in src/styles/global.css and assets in src/assets).
 *
 * Amounts are plain numbers in the site currency; components format them
 * with src/lib/format.ts so the locale stays in one place.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface StoreLinks {
  appStore: string;
  googlePlay: string;
}

export interface Link {
  label: string;
  href: string;
  /** Template placeholder: no real destination yet. Replace href when rebranding. */
  placeholder?: boolean;
}

export interface StoreBadgeCopy {
  /** Small line above the store name, e.g. "Descargalo en el". */
  caption: string;
  /** Store name, e.g. "App Store". */
  store: string;
}

export interface EnvelopeData {
  /** Category name shown on the label tag. */
  name: string;
  /** Number printed on the tag (01, 02…). Omit for an untagged envelope. */
  number?: string;
  /** Amount left inside the envelope. */
  remaining: number;
  /** Amount budgeted for the month. */
  budget: number;
}

export interface LedgerRow {
  label: string;
  envelope: string;
  amount: number;
}

export interface HeroDemo {
  screenTitle: string;
  monthLabel: string;
  description: string;
  amount: number;
  question: string;
  chips: string[];
  /** Index in `chips` that gets tapped in the demo. */
  selectedChip: number;
  confirmLabel: string;
  toast: string;
  recentTitle: string;
  recent: LedgerRow[];
  /** Name of the hero envelope the expense comes out of. */
  envelope: string;
  /** Remaining in that envelope before logging the expense. */
  remainingBefore: number;
}

export interface Hero {
  headline: string;
  subcopy: string;
  secondaryLink: Link;
  rating: { score: string; outOf: string; detail: string };
  visualLabel: string;
  envelopes: EnvelopeData[];
  demo: HeroDemo;
}

export type ProofSegment =
  | { kind: 'text'; value: string }
  | { kind: 'metric'; value: number; decimals: number; suffix?: string };

export interface ProofStrip {
  heading: string;
  segments: ProofSegment[];
}

export interface CategoryRule {
  typed: string;
  envelope: string;
}

export interface Features {
  heading: string;
  intro: string;
  envelopes: {
    title: string;
    body: string;
    items: EnvelopeData[];
  };
  twoTaps: {
    title: string;
    body: string;
    steps: { label: string; detail: string }[];
    doneLabel: string;
  };
  autoCategory: {
    title: string;
    body: string;
    rules: CategoryRule[];
  };
  monthBar: {
    title: string;
    body: string;
    days: number;
    today: number;
    spent: number;
    budget: number;
    todayLabel: string;
    spentLabel: string;
    paceLabel: string;
  };
  alerts: {
    title: string;
    body: string;
    items: { envelope: string; remaining: number; budget: number; state: 'ok' | 'low'; stateLabel: string }[];
  };
  goal: {
    title: string;
    body: string;
    goalName: string;
    saved: number;
    target: number;
    savedLabel: string;
    missingLabel: string;
    plan: string;
  };
}

export interface StepScreenEnvelope {
  name: string;
  amount: number;
  remaining?: number;
}

export interface HowItWorks {
  heading: string;
  intro: string;
  steps: { title: string; body: string; screenLabel: string }[];
  setupScreen: {
    title: string;
    incomeLabel: string;
    income: number;
    envelopes: StepScreenEnvelope[];
    unassignedLabel: string;
    action: string;
  };
  logScreen: {
    title: string;
    amount: number;
    description: string;
    chips: string[];
    selectedChip: number;
    details: { label: string; value: string }[];
    keys: string[];
    action: string;
  };
  overviewScreen: {
    title: string;
    totalLabel: string;
    daysLeft: string;
    envelopes: StepScreenEnvelope[];
    recentTitle: string;
    recent: LedgerRow[];
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  initials: string;
}

export interface Plan {
  name: string;
  price: number;
  period: string;
  note: string;
  description: string;
  features: string[];
  cta: Link;
  highlighted?: boolean;
  badge?: string;
}

export interface Pricing {
  heading: string;
  intro: string;
  currencyNote: string;
  plans: Plan[];
}

export interface Faq {
  heading: string;
  intro: string;
  items: { question: string; answer: string }[];
}

export interface FinalCta {
  heading: string;
  body: string;
  envelope: EnvelopeData;
}

export interface Footer {
  blurb: string;
  columns: { title: string; links: Link[] }[];
  rights: string;
  disclaimer: string;
  /** Tag shown next to placeholder links (Link.placeholder). */
  placeholderTag: string;
}

export interface Nav {
  label: string;
  links: Link[];
  cta: Link;
  openLabel: string;
  closeLabel: string;
  homeLabel: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  locale: string;
  currencySymbol: string;
  url: string;
  themeColor: string;
  stores: StoreLinks;
  storeBadges: { appStore: StoreBadgeCopy; googlePlay: StoreBadgeCopy; groupLabel: string };
  skipLink: string;
  /** Clock shown in the status bar of the phone mockups. */
  mockupTime: string;
  envelopeLabels: { remaining: string; of: string; spentPrefix: string; low: string };
  /** Share of the budget under which an envelope shows the low state. */
  envelopeLowThreshold: number;
  nav: Nav;
  hero: Hero;
  proof: ProofStrip;
  features: Features;
  howItWorks: HowItWorks;
  testimonials: { heading: string; intro: string; items: Testimonial[] };
  pricing: Pricing;
  faq: Faq;
  finalCta: FinalCta;
  footer: Footer;
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

export const site: SiteConfig = {
  name: 'AhorrAr',
  tagline: 'Tu mes en sobres. Sabé siempre cuánto te queda.',
  description:
    'AhorrAr reparte tu presupuesto del mes en sobres. Anotás cada gasto en dos toques y ves al instante cuánto te queda en cada uno.',
  locale: 'es-AR',
  currencySymbol: '$',
  url: 'https://ahorrar.example.com',
  /* Browser UI color (meta theme-color). Keep in sync with --color-paper. */
  themeColor: '#FAFAF9',
  stores: {
    appStore: '#',
    googlePlay: '#',
  },
  storeBadges: {
    appStore: { caption: 'Descargalo en el', store: 'App Store' },
    googlePlay: { caption: 'Disponible en', store: 'Google Play' },
    groupLabel: 'Descargar la app',
  },
  skipLink: 'Saltar al contenido',
  mockupTime: '9:41',
  envelopeLabels: { remaining: 'Te queda', of: 'de', spentPrefix: '−', low: 'Casi vacío' },
  envelopeLowThreshold: 0.2,

  nav: {
    label: 'Principal',
    links: [
      { label: 'Funciones', href: '#funciones' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Precios', href: '#precios' },
      { label: 'Preguntas', href: '#preguntas' },
    ],
    cta: { label: 'Descargar', href: '#descargar' },
    openLabel: 'Abrir menú',
    closeLabel: 'Cerrar menú',
    homeLabel: 'AhorrAr, inicio',
  },

  hero: {
    headline: 'Poné tu mes en sobres y sabé cuánto te queda.',
    subcopy:
      'Repartí lo que cobrás en sobres como Súper, Transporte o Salidas. Cada gasto se anota en dos toques y sale de un sobre: ves al instante lo que queda adentro. Sin planillas ni gráficos raros.',
    secondaryLink: { label: 'Ver cómo funciona', href: '#como-funciona' },
    rating: {
      score: '4,8',
      outOf: 'de 5',
      detail: 'más de 12.000 reseñas en App Store y Google Play',
    },
    visualLabel:
      'Vista de la app: se anota un café de $2.800 en dos toques y el sobre Salidas baja de $8.400 a $5.600.',
    envelopes: [
      { name: 'Súper', number: '01', remaining: 96500, budget: 180000 },
      { name: 'Transporte', number: '02', remaining: 31200, budget: 55000 },
      { name: 'Salidas', number: '03', remaining: 5600, budget: 40000 },
    ],
    demo: {
      screenTitle: 'Nuevo gasto',
      monthLabel: 'Noviembre',
      description: 'Café',
      amount: 2800,
      question: '¿De qué sobre sale?',
      chips: ['Súper', 'Transporte', 'Salidas'],
      selectedChip: 2,
      confirmLabel: 'Guardar gasto',
      toast: 'Anotado en Salidas',
      recentTitle: 'Hoy',
      recent: [
        { label: 'Verdulería', envelope: 'Súper', amount: 6450 },
        { label: 'Carga SUBE', envelope: 'Transporte', amount: 5000 },
      ],
      envelope: 'Salidas',
      remainingBefore: 8400,
    },
  },

  proof: {
    heading: 'AhorrAr en números',
    segments: [
      { kind: 'metric', value: 186000, decimals: 0 },
      { kind: 'text', value: 'personas ya arman su mes en sobres. Entre todas anotaron' },
      { kind: 'metric', value: 9.4, decimals: 1, suffix: ' millones' },
      { kind: 'text', value: 'de gastos, casi siempre en menos de' },
      { kind: 'metric', value: 4, decimals: 0, suffix: ' segundos' },
      { kind: 'text', value: 'cada uno.' },
    ],
  },

  features: {
    heading: 'Lo justo para ordenar tu plata. Nada más.',
    intro:
      'Sin cuentas bancarias conectadas, sin inversiones, sin tableros llenos de números. Sobres, gastos y lo que te queda.',
    envelopes: {
      title: 'Un sobre para cada cosa',
      body: 'Separás lo del súper, lo del colectivo y lo de las salidas. Cada sobre te muestra cuánto le queda adentro, a simple vista.',
      items: [
        { name: 'Súper', number: '01', remaining: 96500, budget: 180000 },
        { name: 'Servicios', number: '02', remaining: 42000, budget: 70000 },
        { name: 'Salidas', number: '03', remaining: 5600, budget: 40000 },
      ],
    },
    twoTaps: {
      title: 'Dos toques y listo',
      body: 'Elegís el sobre, confirmás. No hay formularios ni campos obligatorios.',
      steps: [
        { label: 'Salidas', detail: 'Elegís el sobre' },
        { label: 'Guardar', detail: 'Confirmás' },
      ],
      doneLabel: 'Anotado',
    },
    autoCategory: {
      title: 'Se acomoda solo',
      body: 'Escribís qué compraste y AhorrAr sugiere el sobre según lo que venís anotando.',
      rules: [
        { typed: 'Nafta', envelope: 'Transporte' },
        { typed: 'Pan y facturas', envelope: 'Súper' },
        { typed: 'Entradas de cine', envelope: 'Salidas' },
      ],
    },
    monthBar: {
      title: 'Un presupuesto, un mes',
      body: 'Una sola barra para todo el mes. Sabés si vas al ritmo o si conviene frenar un poco.',
      days: 30,
      today: 18,
      spent: 498000,
      budget: 850000,
      todayLabel: 'Día 18 de 30',
      spentLabel: 'gastado',
      paceLabel: 'Vas al ritmo del mes',
    },
    alerts: {
      title: 'Avisos antes de pasarte',
      body: 'Cuando un sobre se está vaciando, te avisa con tiempo para reacomodar.',
      items: [
        { envelope: 'Súper', remaining: 96500, budget: 180000, state: 'ok', stateLabel: 'En orden' },
        { envelope: 'Salidas', remaining: 5600, budget: 40000, state: 'low', stateLabel: 'Casi vacío' },
      ],
    },
    goal: {
      title: 'Metas de ahorro que se ven',
      body: 'Una meta es un sobre más, que se llena en vez de vaciarse. Ponés cuánto querés juntar y ves cuánto falta.',
      goalName: 'Vacaciones en la costa',
      saved: 180000,
      target: 400000,
      savedLabel: 'Ya juntaste',
      missingLabel: 'Te faltan',
      plan: 'Apartando $45.000 por mes, llegás en abril.',
    },
  },

  howItWorks: {
    heading: 'Así de simple funciona',
    intro: 'La primera vez te lleva cinco minutos. Después, dos toques por gasto.',
    steps: [
      {
        title: 'Armá tus sobres',
        body: 'Poné cuánto entra por mes y repartilo. Te sugerimos sobres para arrancar y cambiás los montos cuando quieras.',
        screenLabel: 'Pantalla para repartir el ingreso del mes en sobres.',
      },
      {
        title: 'Anotá en dos toques',
        body: 'Cargás el monto, tocás el sobre y guardás. Sale de ese sobre y listo.',
        screenLabel: 'Pantalla para anotar un gasto de $2.800 en el sobre Salidas.',
      },
      {
        title: 'Mirá cuánto te queda',
        body: 'En la pantalla principal ves lo que queda en cada sobre y cuántos días faltan para cobrar.',
        screenLabel: 'Pantalla principal con lo que queda en cada sobre.',
      },
    ],
    setupScreen: {
      title: 'Repartí tu mes',
      incomeLabel: 'Entra por mes',
      income: 850000,
      envelopes: [
        { name: 'Alquiler', amount: 260000 },
        { name: 'Súper', amount: 180000 },
        { name: 'Servicios', amount: 70000 },
        { name: 'Transporte', amount: 55000 },
        { name: 'Salidas', amount: 40000 },
        { name: 'Ahorro', amount: 120000 },
      ],
      unassignedLabel: 'Sin repartir',
      action: 'Listo',
    },
    logScreen: {
      title: 'Nuevo gasto',
      amount: 2800,
      description: 'Café',
      chips: ['Súper', 'Transporte', 'Salidas'],
      selectedChip: 2,
      details: [
        { label: 'Sale de', value: 'Salidas' },
        { label: 'Fecha', value: 'Hoy' },
      ],
      keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '←'],
      action: 'Guardar gasto',
    },
    overviewScreen: {
      title: 'Noviembre',
      totalLabel: 'Te queda este mes',
      daysLeft: 'Faltan 12 días para cobrar',
      envelopes: [
        { name: 'Súper', amount: 180000, remaining: 96500 },
        { name: 'Servicios', amount: 70000, remaining: 42000 },
        { name: 'Transporte', amount: 55000, remaining: 31200 },
        { name: 'Salidas', amount: 40000, remaining: 5600 },
      ],
      recentTitle: 'Últimos gastos',
      recent: [
        { label: 'Café', envelope: 'Salidas', amount: 2800 },
        { label: 'Verdulería', envelope: 'Súper', amount: 6450 },
        { label: 'Carga SUBE', envelope: 'Transporte', amount: 5000 },
      ],
    },
  },

  testimonials: {
    heading: 'Gente que nunca había llevado las cuentas',
    intro: 'Y ahora sabe, sin hacer cuentas, cuánto le queda.',
    items: [
      {
        quote:
          'Probé planillas, probé anotar en el cuaderno, nada me duraba más de una semana. Con los sobres por primera vez llegué a fin de mes sabiendo dónde estaba cada peso.',
        name: 'Micaela Ferreyra',
        detail: 'Enfermera, Rosario',
        initials: 'MF',
      },
      {
        quote: 'Anoto el café mientras espero el vuelto. Así de rápido es.',
        name: 'Tomás Aguirre',
        detail: 'Diseñador, Córdoba',
        initials: 'TA',
      },
      {
        quote:
          'El aviso de que Salidas estaba casi vacío me salvó de un fin de semana caro. No me reta, solo me avisa.',
        name: 'Lucía Benítez',
        detail: 'Docente, Mendoza',
        initials: 'LB',
      },
      {
        quote:
          'No quería conectar el banco ni ver gráficos. Quería saber cuánto me queda para el súper, y eso hace.',
        name: 'Gonzalo Paz',
        detail: 'Repartidor, Buenos Aires',
        initials: 'GP',
      },
    ],
  },

  pricing: {
    heading: 'Empezá gratis. Pasate a Plus si te sirve.',
    intro: 'Sin tarjeta para arrancar. Cancelás Plus cuando quieras desde la app.',
    currencyNote: 'Precios finales en pesos argentinos, impuestos incluidos.',
    plans: [
      {
        name: 'Gratis',
        price: 0,
        period: 'para siempre',
        note: 'Sin tarjeta',
        description: 'Para ordenar el mes desde hoy.',
        features: [
          'Hasta 5 sobres',
          'Anotación en dos toques',
          'Sobre sugerido para cada gasto',
          'Resumen del mes',
        ],
        cta: { label: 'Empezar gratis', href: '#descargar' },
      },
      {
        name: 'Plus anual',
        price: 29990,
        period: 'por año',
        note: 'Equivale a $2.499 por mes. Ahorrás 28%.',
        description: 'Todo Plus, pagando una vez al año.',
        features: [
          'Sobres ilimitados',
          'Metas de ahorro',
          'Avisos antes de pasarte',
          'Historial de todos tus meses',
          'Exportar a planilla',
        ],
        cta: { label: 'Elegir plan anual', href: '#descargar' },
        highlighted: true,
        badge: 'El más elegido',
      },
      {
        name: 'Plus mensual',
        price: 3490,
        period: 'por mes',
        note: 'Cancelás cuando quieras',
        description: 'Las mismas funciones, mes a mes.',
        features: [
          'Sobres ilimitados',
          'Metas de ahorro',
          'Avisos antes de pasarte',
          'Historial de todos tus meses',
          'Exportar a planilla',
        ],
        cta: { label: 'Probar Plus', href: '#descargar' },
      },
    ],
  },

  faq: {
    heading: 'Preguntas frecuentes',
    intro: 'Lo que más nos preguntan antes de descargarla.',
    items: [
      {
        question: '¿Tengo que conectar mi cuenta del banco?',
        answer:
          'No. AhorrAr no se conecta con bancos ni billeteras virtuales. Vos anotás cada gasto en dos toques, así que no tenés que dar ninguna clave.',
      },
      {
        question: '¿Qué es un sobre?',
        answer:
          'Es una parte de tu plata del mes con un destino: Súper, Transporte, Salidas. Cada gasto sale de un sobre y siempre ves cuánto le queda adentro.',
      },
      {
        question: '¿Qué pasa si me paso de un sobre?',
        answer:
          'Nada grave. El sobre queda en negativo y te proponemos pasar plata desde otro sobre que tenga resto. Antes de llegar a eso, te avisamos.',
      },
      {
        question: '¿Funciona sin internet?',
        answer: 'Sí. Podés anotar gastos sin conexión; quedan guardados en tu teléfono.',
      },
      {
        question: '¿Puedo cancelar Plus cuando quiera?',
        answer:
          'Sí, desde la configuración de la app o de tu tienda. Seguís con Plus hasta que termine el período pagado y después volvés al plan Gratis sin perder lo que anotaste.',
      },
      {
        question: '¿En qué celulares funciona?',
        answer: 'En iPhone con iOS 16 o posterior y en teléfonos Android 9 o posterior.',
      },
    ],
  },

  finalCta: {
    heading: 'Empezá el mes con los sobres armados.',
    body: 'Descargá AhorrAr gratis y repartí tu plata en menos de cinco minutos.',
    envelope: { name: 'Este mes', remaining: 850000, budget: 850000 },
  },

  footer: {
    blurb: 'Presupuesto en sobres para quienes nunca llevaron las cuentas.',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Funciones', href: '#funciones' },
          { label: 'Cómo funciona', href: '#como-funciona' },
          { label: 'Precios', href: '#precios' },
          { label: 'Preguntas', href: '#preguntas' },
        ],
      },
      {
        title: 'Empresa',
        /* TEMPLATE PLACEHOLDERS: point these to real pages before publishing. */
        links: [
          { label: 'Sobre nosotros', href: '#', placeholder: true },
          { label: 'Prensa', href: '#', placeholder: true },
          { label: 'Contacto', href: '#', placeholder: true },
        ],
      },
      {
        title: 'Legal',
        /* TEMPLATE PLACEHOLDERS: point these to real pages before publishing. */
        links: [
          { label: 'Términos', href: '#', placeholder: true },
          { label: 'Privacidad', href: '#', placeholder: true },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
    placeholderTag: 'Pronto',
    disclaimer:
      'Las métricas, reseñas, testimonios y precios de esta página son contenido de muestra.',
  },
};
