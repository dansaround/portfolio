import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portfolio-dansarounds-projects.vercel.app",
  output: "static",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
