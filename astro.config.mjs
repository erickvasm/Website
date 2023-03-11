import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://www.erickvasm.com",
  integrations: [tailwind(), image()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
  routes: [
    { path: "/", component: "src/pages/index.astro" },
    { path: "/404", component: "src/pages/no-found.astro" },
  ]
});
