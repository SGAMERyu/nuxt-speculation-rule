import { defineNuxtModule, createResolver } from "@nuxt/kit";

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
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.hook("nitro:config", (nitro) => {
      nitro.plugins = nitro.plugins || [];
      const { speculationRules } = nuxt.options as any;
      nuxt.options.runtimeConfig.public.speculationRules =
        speculationRules || {};
      nitro.plugins.push(resolve("runtime/plugin"));
    });
  },
});
