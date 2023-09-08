import { defineNitroPlugin } from "nitropack/dist/runtime/plugin";
import { useRuntimeConfig } from "#imports";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    const speculationRules = useRuntimeConfig().public.speculationRules;
    html.head.push(`<script 
      type="speculationrules">${JSON.stringify(speculationRules)}</script>`);
  });
});
