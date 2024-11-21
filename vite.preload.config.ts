import { defineConfig } from "vite";
// import { fileURLToPath, URL } from "node:url";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [tsconfigPaths()],
});
