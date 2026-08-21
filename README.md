# JC Resortes — Landing Page

Landing page corporativa para **JC Resortes**, empresa colombiana fabricante de resortes industriales y de precisión.

## Página publicada

> [jcresortes.com](https://jcresortes.com)

## Tech Stack

- [Astro 6](https://astro.build/) — framework de sitio estático
- [Tailwind CSS v4](https://tailwindcss.com/) — estilos
- [Three.js](https://threejs.org/) — visor 3D de productos

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Analítica (Umami)

El sitio usa [Umami](https://umami.is) para analítica de visitas 100% anónima (sin cookies). Es opcional: si las variables de entorno no están configuradas, el script simplemente no se renderiza.

Variables de entorno (ver `.env.example`):

- `PUBLIC_UMAMI_WEBSITE_ID` — ID del sitio en tu instancia de Umami.
- `PUBLIC_UMAMI_SCRIPT_URL` — URL del script de tracking (self-hosted o cloud.umami.is).

Como el sitio es 100% estático (`output: 'static'`), estas variables solo se leen en **build time** y quedan horneadas en el HTML de `dist/`. Si despliegas en un proveedor (Netlify, Vercel, Cloudflare Pages, etc.), configúralas también ahí — no solo en tu `.env` local — para que el build de producción las tome.

El componente `src/components/Analytics.astro` centraliza todo el tracking:

- Carga el script de Umami con `defer` (no bloquea el renderizado ni afecta el tiempo de carga).
- Registra un evento `section-view` automáticamente por cada elemento con `data-track-view="<slug>"` que entra al viewport (una sola vez por carga de página).
- Umami detecta solo (sin JS adicional) cualquier elemento con `data-umami-event="<nombre>"` como clic. Para elementos que se repiten (tarjetas de producto, links de menú, miniaturas de galería, etc.) se usa un único nombre de evento compartido + un dato adicional vía `data-umami-event-<propiedad>="<valor>"`, por ejemplo:

  ```html
  <a data-umami-event="product-card-click" data-umami-event-product="resorte-compresion-01">…</a>
  ```

Al agregar una sección o botón nuevo, sigue esta misma convención (`data-track-view` para secciones, `data-umami-event(-*)` para clics) para que quede reflejado en el dashboard de Umami.

## Autor

Creado por [PauloPabDev](https://github.com/PauloPabDev)
