//import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.erickvasm.com",
  integrations: [tailwind(), icon()],
  routes: [
    { path: "/", component: "src/pages/index.astro" },
    { path: "/blog", component: "src/pages/blog.astro" },
    { path: "/404", component: "src/pages/no-found.astro" },
  ]
});
