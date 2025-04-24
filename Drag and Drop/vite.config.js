import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const BACKEND_URL = process.env.VITE_BACKEND_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  components: {
    Spin: {
      defaultProps: {
        style: { color: "#ffb100" },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: BACKEND_URL,
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      cachedChecks: false,
    },
  },
});
