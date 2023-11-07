import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    publicDir: './public',
    plugins: [
      react()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import './src/common/styles/variables';
            @import './src/common/styles/functions';
            @import './src/common/styles/mixins';`
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@routes": path.resolve(__dirname, 'src/routes'),
        "@store": path.resolve(__dirname, 'src/store'),
        "@views": path.resolve(__dirname, 'src/views'),
        "@assets": path.resolve(__dirname, 'src/assets'),
        "@components": path.resolve(__dirname, 'src/components'),
      },
    },
    build: {
      outDir: "build",
    },
    server: {
      port: 80,
      host: true
    },
  };
});
