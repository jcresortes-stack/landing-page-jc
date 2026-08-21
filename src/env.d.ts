/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** ID del sitio en Umami. Ver .env.example. */
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  /** URL del script de tracking de Umami. Ver .env.example. */
  readonly PUBLIC_UMAMI_SCRIPT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
