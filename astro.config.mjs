// import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import starlight from "@astrojs/starlight";

const site = 'https://astro.build/'

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://sugarcaneai.dev",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    
    react(),
    // 
    sitemap({
      filter: (page) => !page.startsWith('https://sugarcaneai.dev/x')
      // filter: (page) => page !== 'https://stargazers.club/secret-vip-lounge/',
    }),
    
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }), 
    AutoImport({
      imports: [
        "@/shortcodes/Button", 
        "@/shortcodes/Accordion", 
        "@/shortcodes/Notice", 
        "@/shortcodes/Video", 
        "@/shortcodes/Youtube", 
        "@/shortcodes/Tabs", 
        "@/shortcodes/Tab"
      ]
    }), 
    // mdx(),
    starlight({
      title: 'Sugarcane AI Docs',
      favicon: '/public/images/sugar/favicon.png',
      editLink: {
				baseUrl: 'https://github.com/sugarcane-ai/sugarcane-ai.github.io/edit/main/src/content/docs/',
			},
      logo: {
				light: '/public/images/sugar/logos/full-small.png',
				dark: '/public/images/sugar/logos/full-small.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/sugarcane-ai',
				discord: 'https://discord.gg/TZw4GDrG',
			},
			// head: [
      //   {
			// 		tag: 'title',
			// 		content: 'Sugarcane AI Documentation'
			// 	},
			// 	{
			// 		tag: 'meta',
			// 		attrs: { property: 'og:image', content: '/public/images/sugar/logos/full-small.png' },
			// 	},
			// 	{
			// 		tag: 'meta',
			// 		attrs: { property: 'twitter:image', content: site + '/public/images/sugar/logos/full-small.png' },
			// 	},
			// ],
      sidebar: [
		    // An external link to the Astro website.
        {
          label: 'Arcitecture',
          items: [
            { label: 'Components', link: '/guides/components/' },
          ],
        },
      ]
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  }
});