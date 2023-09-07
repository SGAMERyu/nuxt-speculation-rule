import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-speculation-rule",
    configKey: "speculationRule",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.hook("nitro:config", (nitro) => {
      // ensure `nitro.plugins` is initialized
      nitro.plugins = nitro.plugins || [];

      // add your custom plugin
      nitro.plugins.push(resolve("runtime/plugin"));
    });
  },
});
