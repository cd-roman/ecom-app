/// <reference types="vite/client" />

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export { ReactComponent };
  export default ReactComponent;
}

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: string
  readonly VITE_APPID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}