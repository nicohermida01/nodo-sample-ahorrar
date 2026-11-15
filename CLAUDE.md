# AhorrAr — Landing page (template)

Landing estática para una app mobile ficticia de finanzas personales ("AhorrAr").
Funciona como template de muestra para compradores: tiene que ser fácil de rebrandear.

Ver también `AGENTS.md` (guías oficiales de Astro).

## Stack

- Astro 7 (`output: "static"`), TypeScript strict (`astro/tsconfigs/strict`)
- Tailwind CSS v4 vía `@tailwindcss/vite`; tokens de diseño en `@theme` dentro de `src/styles/global.css`
- Node ≥ 22.23.4

## Comandos

| Comando           | Acción                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Dev server en `localhost:4321`           |
| `npm run build`   | Build estático en `dist/`                |
| `npm run preview` | Sirve el build localmente                |

## Estructura

```
src/
├── components/
│   ├── sections/   # Secciones de la landing (Hero, Features, Pricing…)
│   └── ui/         # Piezas chicas reutilizables (Button, Card, StoreBadge…)
├── layouts/        # BaseLayout (importa global.css, meta tags)
├── content/
│   └── site.ts     # TODO el copy y los datos de marca
├── assets/
│   ├── mockups/    # Capturas de placeholder de la app
│   └── icons/
├── pages/
└── styles/
    └── global.css  # @import "tailwindcss" + @theme con tokens
public/
referencias/        # Capturas de referencia visual (no se publican)
```

## Rebranding

- Textos y datos de marca: solo en `src/content/site.ts`. Los componentes nunca tienen copy hardcodeado.
- Colores, tipografías, radios, sombras y easings: solo como tokens en `@theme` (`src/styles/global.css`).
- Imágenes: reemplazar archivos en `src/assets/`.

---

## Reglas de diseño

### ESTÉTICA
Tech-product moderno / editorial: limpio, luminoso, de alto contraste, táctil, premium,
juguetón con medida, con profundidad sutil.

### REFERENCIA
Las capturas de /referencias: igualá la sensación y el estilo (ritmo, densidad, tratamiento
de mockups, peso tipográfico), no el contenido. No copies textos, logos ni marcas.

### INTENCIÓN
Quien entra tiene que entender en menos de 5 segundos qué hace la app y sentir que es pulida
y confiable, con ganas de descargarla. A la vez, quien compra el template tiene que percibir
calidad de producto real: cada sección parece terminada, no un wireframe.

### JERARQUÍA Y LAYOUT
Lo que más tiene que destacar es el headline con la propuesta de valor, el mockup del teléfono
y los botones de App Store / Google Play.

Estructura: navbar fija y minimal → hero (headline grande + subtítulo + CTAs + mockup
del teléfono con leve rotación/flotación) → franja de logos o métricas de prueba social →
features en bento grid asimétrico → "cómo funciona" en 3 pasos con capturas de la app →
testimonios → pricing (2-3 planes) → FAQ en acordeón → CTA final con badges de descarga → footer.

Contenido centrado en un contenedor máximo de 1200-1280px, con secciones que respiran
(padding vertical generoso) y alternancia de fondos para separar los bloques.

### SISTEMA VISUAL
- **Tipografía:** una display geométrica/grotesca con carácter para titulares (ej. "Clash Display",
  "General Sans" o "Satoshi") y una sans muy legible para el cuerpo (ej. "Inter" o "Geist").
  Escala fluida con clamp(), titulares con tracking negativo y line-height ajustado.
  Fuentes self-hosted (Fontsource) con font-display: swap.
- **Color:** base neutra (casi blanco #FAFAF9 / casi negro #0B0B0F), un color de acento
  saturado de marca más uno secundario, y gradientes suaves (mesh/radial) solo en hero y CTA.
  Todo definido como tokens en @theme (--color-brand, --color-accent, etc.); nunca colores
  hardcodeados en los componentes.
- **Bordes:** radios generosos (16-32px en cards, full en botones/pills), bordes de 1px
  semitransparentes y sombras suaves en capas en lugar de sombras duras.
- **Espaciado:** escala de 4/8px, ritmo vertical consistente entre secciones.
- **Iconografía:** un solo set lineal y consistente (Lucide vía astro-icon o SVG inline),
  con stroke uniforme. Mockups de teléfono hechos con CSS/SVG con capturas de placeholder intercambiables.

### RESTRICCIONES
**Siempre:** HTML semántico, accesibilidad AA (contraste, foco visible, alt, aria en el acordeón),
imágenes con `<Image />` de Astro (AVIF/WebP, lazy salvo el hero), componentes chicos
y reutilizables, copy centralizado en site.ts, Lighthouse ≥ 95 en todas las categorías
y cero JS en las secciones que no lo necesitan.

**Nunca:** frameworks de UI (React/Vue) salvo que sea imprescindible, librerías de componentes
genéricas, gradientes violeta-azul genéricos de "IA", emojis como íconos, texto lorem ipsum
(usá copy creíble), stock photos de personas, carruseles automáticos ni animaciones que
bloqueen la lectura.

### COMPORTAMIENTO
- Responsive mobile-first (breakpoints sm/md/lg/xl). En mobile el bento pasa a una
  columna, el mockup va debajo del headline y la navbar se vuelve un menú hamburguesa accesible.
- Hover: elevación sutil y cambio de borde/brillo en cards, botones con transición de
  fondo y leve scale (≤1.03), links con subrayado animado.
- Animaciones: reveal on scroll (fade + translate 16-24px, con stagger en grids) usando
  CSS scroll-driven animations con fallback en IntersectionObserver; flotación lenta del
  mockup en el hero; parallax leve entre capas del hero; contadores animados en métricas.
  Duraciones de 200-700ms con easing tipo cubic-bezier(0.22, 1, 0.36, 1).
  Solo animar transform y opacity. Si hace falta JS de animación, usar Motion (motion.dev)
  en islands chicas, nunca en todo el sitio.
- Respetar prefers-reduced-motion: desactivar el parallax y la flotación y dejar fades instantáneos.
- Transiciones entre páginas con View Transitions de Astro (`<ClientRouter />`), si en
  algún momento hay más de una página.
