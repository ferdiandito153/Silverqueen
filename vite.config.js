import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Untuk GitHub Pages project site, ganti menjadi '/NAMA-REPOSITORY/'
  base: '/',
});