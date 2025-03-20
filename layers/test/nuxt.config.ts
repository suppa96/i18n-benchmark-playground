import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

export default defineNuxtConfig({
  modules: ["@nuxtjs/storybook", "@nuxt/icon", "@nuxtjs/i18n"],
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./app/assets/icons",
      },
    ],
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "fr", iso: "fr-FR", dir: "ltr" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    messages: {
      en,
      fr,
    },
  },
});
