// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: "https://hamz.at",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Urbanist",
        cssVariable: "--font-urbanist",
      },
      {
        provider: "local",
        name: "Aeonik",
        cssVariable: "--font-aeonik",
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/aeonik/light.otf"],
          },
          {
            weight: 300,
            style: "italic",
            src: ["./src/assets/fonts/aeonik/lightitalic.otf"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/aeonik/regular.otf"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/aeonik/regularitalic.otf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/aeonik/bold.otf"],
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/aeonik/bolditalic.otf"],
          },
        ],
      },
    ],
  },
});