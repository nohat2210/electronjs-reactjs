import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["serialport", "sqlite3"],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
