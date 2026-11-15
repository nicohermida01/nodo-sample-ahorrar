/**
 * Single source of truth for brand data and copy.
 * Rebranding the template should only require editing this file
 * (plus design tokens in src/styles/global.css and assets in src/assets).
 */

export interface StoreLinks {
  appStore: string;
  googlePlay: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  locale: string;
  url: string;
  stores: StoreLinks;
}

export const site: SiteConfig = {
  name: 'AhorrAr',
  tagline: 'Tus finanzas personales, claras y bajo control.',
  description:
    'AhorrAr te ayuda a registrar gastos, armar presupuestos y alcanzar tus metas de ahorro desde el celular.',
  locale: 'es-AR',
  url: 'https://ahorrar.example.com',
  stores: {
    appStore: '#',
    googlePlay: '#',
  },
};
