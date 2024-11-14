import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Define 'src' como el directorio raíz
  build: {
    outDir: '../dist', // Define el directorio de salida de la compilación fuera de 'src'
  },
});
