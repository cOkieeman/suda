import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Fantareal 教程站",
    pageTitleSuffix: " - FA Guide",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "fantareal-guide.vercel.app",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "00-首页",
      "01-ComfyUI",
      "02-妹居",
      "03-酒馆",
      "90-模板",
      "91-Inbox",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfbf8",
          lightgray: "#e7e1d8",
          gray: "#b8aa99",
          darkgray: "#5a5148",
          dark: "#25211d",
          secondary: "#8a4b2b",
          tertiary: "#3f7f72",
          highlight: "rgba(138, 75, 43, 0.12)",
          textHighlight: "#ffe08a88",
        },
        darkMode: {
          light: "#171513",
          lightgray: "#34302a",
          gray: "#756b5f",
          darkgray: "#d8d0c6",
          dark: "#f3eee7",
          secondary: "#e09a68",
          tertiary: "#7cc7b4",
          highlight: "rgba(224, 154, 104, 0.16)",
          textHighlight: "#a8782588",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
