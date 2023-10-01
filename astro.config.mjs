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
				discord: 'https://discord.com/invite/WRu3KXqz',
			},
			head: [
        {
					tag: 'title',
					content: 'Sugarcane AI Documentation'
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: '/public/images/sugar/logos/full-small.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + '/public/images/sugar/logos/full-small.png' },
				},
			],
      // sidebar: [
      //   {
      //     label: 'Sugarcane AI',
      //     items: [
      //       { label: 'Main', link: '/docs/guides/' },
      //       { label: 'Get Started', link: '/docs/guides/get_started/' },
      //       { label: 'Architecture', link: '/docs/guides/architecture/', badge: { text: 'New', variant: 'tip' } },
      //     ],
      //   }
      // ]
      
      sidebar: [
        {
          label: 'Sugarcane AI',
          type: 'category',
          items: [
            { label: 'Introduction 🙏', link: '/docs/guides/introduction' },
            // { label: 'QuickStart', link: '/docs/guides/installation/' },
          ],
        },
        {
          label: 'Architecture',
          type: 'category',
          items: [
            { label: 'Microservices Framework 🔧', link: '/docs/guides/framework/' },
            { label: 'Micro LLMs 🧬', link: '/docs/guides/microllm/' },
            { label: 'Prompt Packages 📦', link: '/docs/guides/packages/' },
            { label: 'Prompt Templates 📑', link: '/docs/guides/templates/' },
          ],
        },
        {
          label: 'Examples',
          type: 'doc',
          items: [
            { label: 'Demo Videos 📺', link: '/docs/guides/demo/' },
          ],
        },

        {
          label: 'Roadmap',
          type: 'doc',
          items: [
            { label: 'Roadmap 🗺️', link: '/docs/guides/roadmap/' },
          ],
        },
        {
          label: 'Connect',
          type: 'doc',
          items: [
            { label: 'Connect 🌐', link: '/docs/guides/connect/' },
          ],
        },
       
        // {
        //   label: 'Tutorials',
        //   items: [
        //     { label: 'How to 1', link: '/docs/guides/howto_1' },
        //     { label: 'How to 2', link: '/docs/guides/howto_2/' },
        //   ],
        // },
        {
          label: 'Contribution',
          items: [
            { label: 'How to Contribute 🤝', link: '/docs/guides/contribute' },
            { label: 'Contributors 👨‍💻', link: '/docs/guides/contributors/' },
          ],
        },
        {
          label: 'Licence',
          items: [
            { label: 'Licence', link: '/docs/guides/licence' },
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