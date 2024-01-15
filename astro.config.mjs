import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import node from "@astrojs/node";

import preact from "@astrojs/preact";

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
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
  site: "https://ruela8.tunaderechosantiago.com"
});