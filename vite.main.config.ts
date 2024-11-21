import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["serialport", "sqlite3"],
    },
  },
  plugins: [tsconfigPaths()],
});
