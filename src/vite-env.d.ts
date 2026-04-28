/// <reference types="vite/client" />

// Figma asset aliases resolved by vite.config.ts
declare module 'figma:asset/*.png' {
  const src: string;
  export default src;
}
