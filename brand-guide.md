# Guía de marca — Natalia Chias Coughlan
### Landing page · Psicóloga Sanitaria · Terapeuta de Pareja · Sexóloga Clínica

Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React

---

## 1. Posicionamiento de marca

**Personalidad:** cálida y cercana, con rigor clínico de fondo. No es wellness/coaching, es salud mental colegiada — la calidez nunca debe restar credibilidad.

**Frase ancla (ya validada en copy actual):** *"Acompañarte con rigor y humanidad."*

**Lo que la marca NO es:** clínica/fría, infantil/pastel, "sexy"/provocadora, genérica de plantilla IA.

---

## 2. Color — tokens Tailwind v4

Pega esto en `globals.css` dentro del bloque `@theme`:

```css
@theme {
  /* Base */
  --color-cream-50:   #FBF8F2;
  --color-cream-100:  #F4EDE1;  /* fondo principal */
  --color-cream-200:  #EAE0CE;
  --color-ink-900:    #2B241E;  /* texto principal, NO negro puro */
  --color-ink-600:    #5C5246;  /* texto secundario */

  /* Verde — acción principal (botones, nav activo, precios) */
  --color-forest-900: #28392E;
  --color-forest-700: #3A4F3F;  /* botón "Reservar cita" */
  --color-forest-500: #5C7A63;
  --color-forest-100: #E3E9DF;

  /* Terracota — acento (tags, bullets, highlights, número de pasos) */
  --color-terracotta-700: #A8512F;
  --color-terracotta-500: #C97352;
  --color-terracotta-100: #F3DECF;

  /* Sistema */
  --color-border-soft: #E2D7C3;
}
```

**Regla de uso (esto es lo que falta hoy en el sitio):**
- Verde forest-700 → SOLO para el CTA principal ("Reservar cita") y precios. Si todo es verde, deja de significar "acción".
- Terracota-500 → acentos pequeños: número de paso, icono activo, subrayado. Nunca como fondo grande.
- Cream-100 es el fondo por defecto. Cream-50 para tarjetas que necesiten destacar sobre el fondo (más claras, no más oscuras).
- Nunca negro puro (`#000`) ni blanco puro (`#FFF`) — usar ink-900 y cream-50.

---

## 3. Tipografía

```css
@theme {
  --font-serif: "Fraunces", "Georgia", serif;
  --font-sans: "Inter", system-ui, sans-serif;
}
```

Importar en `layout.tsx` con `next/font/google`:

```ts
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});
```

**Por qué Fraunces y no la serif genérica actual:** Fraunces tiene un eje óptico (`optical sizing`) pensado para titulares grandes — los rasgos se afinan en tamaños pequeños y se ensanchan en grandes, dando carácter propio en vez de la serif "default de IA" (Playfair/Lora a secas, que es lo que probablemente está usando Lovable ahora).

**Escala:**
| Uso | Tamaño | Fuente | Peso |
|---|---|---|---|
| H1 hero | 56–72px | serif | 400, a veces italic para una palabra clave |
| H2 sección | 36–44px | serif | 400 |
| H3 tarjeta | 22–26px | serif | 500 |
| Body | 16–18px | sans | 400 |
| Label/eyebrow (ENFOQUE, SERVICIOS) | 12–13px, tracking ancho | sans | 500, uppercase |

Mantener el detalle de poner **una palabra clave en cursiva serif** dentro del H1 (ya lo hacían con "Natalia," en cursiva) — es un buen recurso editorial, conservarlo.

---

## 4. Componentes — specs concretas

### Botones
- Radio: `rounded-full` (pill) — ya está bien, mantener.
- Primario: `bg-forest-700 text-cream-50 hover:bg-forest-900`
- Secundario: `border border-ink-900/20 text-ink-900 hover:bg-cream-50`
- Padding: `px-6 py-3`, nunca más pequeño — botones de salud/terapia deben sentirse "fáciles de pulsar", sin prisa.

### Tarjetas (Enfoque / Servicios / Sobre mí) — ROMPER LA SIMETRÍA ACTUAL
Problema actual: 3 tarjetas idénticas = tell de plantilla IA. Fix:
- Tarjeta 1 (la más relevante, ej. Servicios) → `col-span-2` en grid, con un icono Lucide de 32px en `terracotta-500` arriba del título.
- Tarjetas 2 y 3 → tamaño normal, icono de 24px.
- Grid: `grid-cols-1 md:grid-cols-3` donde la tarjeta destacada usa `md:col-span-2 md:row-span-1` o se reordena en una fila propia.
- Borde: `border border-border-soft` en vez de borde uniforme gris — debe leerse cálido, no corporativo.

### Tags de servicios (ANSIEDAD, AUTOESTIMA...)
Problema actual: beige sobre beige, contraste bajo.
Fix: `bg-terracotta-100 text-terracotta-700` — mismo concepto cálido pero con contraste real (terracota oscuro sobre terracota claro, no neutro sobre neutro).

### Iconografía (Lucide React)
Usar **solo outline, stroke-width 1.5**, nunca filled. Iconos por contexto:
- Reservar cita → `Calendar`
- WhatsApp → `MessageCircle` (o el SVG oficial de WhatsApp si quieren marca reconocible)
- Email → `Mail`
- Ubicación → `MapPin`
- Idiomas → no usar icono, mantener texto "ES · CAT · EN"

---

## 5. El "ancla de marca" (lo que falta para diferenciarse)

Sugerencia: un símbolo lineal simple y propio — una sola curva o forma orgánica (ej. una hoja estilizada, una onda, un monograma "N" geométrico) en `terracotta-500` o `forest-700`, en SVG, usado en:
1. Favicon
2. Como marca de agua sutil (5–8% opacidad) en el fondo del hero o de la sección de contacto
3. Como separador entre secciones en vez de una línea recta

Esto es lo que más cuesta improvisar a una IA generativa y es lo que de verdad diferencia "hecho con plantilla" de "marca diseñada". Si tu prima no tiene logo, este es el momento de crear uno mínimo (puede ser solo tipografía + el símbolo, no necesita ser complejo).

---

## 6. Fotografía — regla no negociable

- **Eliminar las imágenes de stock/IA del despacho** (sillón + pampas + cuadro) hasta tener fotos reales.
- Sustituir temporalmente por: fondo de color sólido (`cream-50`) + el símbolo de marca sutil, o quitar la imagen y dar más espacio al texto.
- En salud mental/sexología, una foto de consulta que se note generada por IA daña la confianza más de lo que ayuda estéticamente.

---

## 7. Animación (Framer Motion)

Mantenerlo discreto — el público de esta web busca calma, no impacto:
```tsx
// Patrón estándar para entradas de sección
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};
```
- Nada de bounce, spring agresivo, o parallax fuerte.
- Hover en tarjetas: `scale-[1.01]` + transición de 200ms, nada más.
- El cambio de idioma (ES/CAT/EN) no necesita animación, debe ser instantáneo.

---

## 8bis. Anexo — feedback sobre la primera maqueta (ronda 2)

La primera implementación aplicó bien los colores y la tipografía, pero sigue leyéndose "generada con IA" por tres motivos estructurales, no de estilo:

### A. Un único componente de tarjeta reutilizado para todo
Enfoque, Servicios, Sobre mí, Opiniones y Contacto usan la misma receta visual (borde fino + radio + label naranja + título serif + body + línea + footer). Cuando un solo patrón de componente se repite para contenidos distintos, se lee como "instancias de un sistema" en vez de "jerarquía de diseño" — es la firma más reconocible de un generador de IA.

**Fix obligatorio en al menos 2-3 secciones:**

- **Opiniones:** eliminar las 3 tarjetas iguales. Estructura nueva: una cita destacada en serif italic grande (28px) sin borde ni fondo de tarjeta, separada por una línea superior fina (`border-top: 1px solid`). Debajo, las otras 2 citas en grid de 2 columnas, tamaño menor (17px), también sin tarjeta — solo texto + línea divisoria. Jerarquía por tamaño tipográfico, no por repetición de cajas.

- **Enfoque (los 4 valores: Aceptación, Incondicionalidad, Cercanía, Curiosidad):** eliminar el grid 2x2 de cajas. Sustituir por una lista numerada (01-04) en filas horizontales separadas por `border-top: 1px solid`, sin fondo de tarjeta: número en terracota a la izquierda, título serif, descripción alineada a la derecha en gris. Esto también resuelve el hueco vacío al final de la sección (ver punto C).

- Servicios, Sobre mí y Contacto SÍ pueden conservar tarjeta (son objetos delimitados — precio, formulario — donde la tarjeta tiene sentido funcional). El objetivo no es eliminar tarjetas en todas partes, sino que no sea la ÚNICA gramática visual del sitio.

### B. Placeholders de foto rotulados ("Foto de Natalia pendiente", "Consulta Barcelona")
Una caja vacía con texto explicando que falta contenido es peor que no tener foto — comunica "demo sin terminar" más que cualquier otra cosa en el sitio. Mientras no haya material real:
- Quitar el contenedor de imagen y dejar que el texto ocupe el ancho completo de la columna, o
- Sustituir por un bloque de color sólido de marca (forest-700 o terracotta-100) con el monograma/símbolo de marca centrado, sin ningún texto explicativo encima.
- Nunca dejar visible al usuario final la palabra "pendiente".

### C. Espacio vacío grande entre el contenido y el footer
Visible en Enfoque, Sobre mí, FAQ, Opiniones y Contacto — probablemente un `min-height` fijo en el contenedor de página que no se ajusta a secciones cortas. Quitar alturas mínimas forzadas; el footer debe seguir inmediatamente al último bloque de contenido real.

## 8. Checklist para el agente

- [ ] Tokens de color en `@theme` (sección 2)
- [ ] Fuentes Fraunces + Inter vía `next/font/google` (sección 3)
- [ ] Romper grid simétrico de las 3 tarjetas de navegación (sección 4)
- [ ] Arreglar contraste de tags de servicios
- [ ] Quitar/reemplazar fotos de stock del despacho
- [ ] Overlay del hero uniforme (actualmente desigual, hay zonas con poco contraste de texto)
- [ ] Iconos Lucide outline en CTAs de contacto
- [ ] (Opcional pero recomendado) símbolo de marca mínimo para favicon + acentos
- [ ] Rediseñar Opiniones sin tarjetas (sección 8bis-A)
- [ ] Rediseñar Enfoque (los 4 valores) como lista numerada sin tarjetas (sección 8bis-A)
- [ ] Quitar placeholders de foto rotulados, sustituir por bloque de color de marca sin texto (sección 8bis-B)
- [ ] Eliminar min-height forzados que dejan hueco vacío antes del footer (sección 8bis-C)
