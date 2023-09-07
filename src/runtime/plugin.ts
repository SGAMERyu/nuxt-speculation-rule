function createSpecScript() {}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    console.log("render:html", event);
    html.head.push(`<script 
      type="speculationrules">{
        "prerender": [
        {
          "source": "list",
          "urls": ["test1.html", "test2.html"]
        }
      ]
    }</script>`);
  });
});
