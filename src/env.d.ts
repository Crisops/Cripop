/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_API_KEY: string;
  readonly SECRET_TOKEN_ACCESS: string;
  readonly TMDB_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
