export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },
  speculationRules: {
    prerender: [
      {
        source: "list",
        urls: ["/test1", "/test2"],
      },
    ],
  },
} as any);
