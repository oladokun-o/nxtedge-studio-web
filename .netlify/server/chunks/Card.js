import { a5 as element, f as derived, a as attr, d as attr_class, s as stringify } from "./index.js";
function Card($$renderer, $$props) {
  let {
    variant = "bordered",
    href,
    target,
    rel,
    id,
    class: className = "",
    media,
    children
  } = $$props;
  const variants = {
    bordered: "border border-border bg-background hover:border-foreground/40",
    elevated: "border border-border bg-background shadow-sm hover:shadow-md hover:-translate-y-0.5",
    flush: "bg-transparent"
  };
  let tag = derived(() => href ? "a" : "div");
  element(
    $$renderer,
    tag(),
    () => {
      $$renderer.push(`${attr("href", href)}${attr("target", target)}${attr("rel", rel)}${attr("id", id)}${attr_class(`group block overflow-hidden rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-secondary ${stringify(variants[variant])} ${stringify(className)}`)}`);
    },
    () => {
      if (media) {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<div class="aspect-[4/3] overflow-hidden bg-surface">`);
        media($$renderer);
        $$renderer.push(`<!----></div>`);
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]--> <div class="p-6">`);
      children($$renderer);
      $$renderer.push(`<!----></div>`);
    }
  );
}
export {
  Card as C
};
