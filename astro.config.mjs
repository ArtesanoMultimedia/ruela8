import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
      UnoCSS(),
    tailwind(),
    icon(),
    react({
      experimentalReactChildren: true,
    })
  ],
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
  site: "https://ruela8.netlify.app/"
});