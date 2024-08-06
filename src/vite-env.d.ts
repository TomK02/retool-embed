/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RETOOL_EMBED_APP_TITLE: string;
  readonly RETOOL_EMBED_FIREBASE_CONFIG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
