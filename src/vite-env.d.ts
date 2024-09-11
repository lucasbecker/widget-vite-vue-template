/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_URL: string;
  readonly VITE_WIDGET_ID: string;
  readonly VITE_WIDGET_TAG_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
