import { a6 as head, e as escape_html, a as attr, f as derived, d as attr_class, s as stringify } from "./index.js";
import imageUrlBuilder from "@sanity/image-url";
import { c as client } from "./client.js";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).auto("format");
}
function SEO($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, description, logo, ogImage } = $$props;
    let ogUrl = derived(() => ogImage ? urlFor(ogImage).width(1200).height(630).url() : null);
    head("vk2j2p", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> `);
      if (ogUrl()) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", ogUrl())}/> <meta name="twitter:image"${attr("content", ogUrl())}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/>`);
    });
  });
}
function Container($$renderer, $$props) {
  let {
    size = "default",
    reveal = false,
    class: className = "",
    children
  } = $$props;
  const widths = { default: "max-w-7xl", wide: "max-w-[1600px]" };
  $$renderer.push(`<div${attr_class(`mx-auto w-full px-6 md:px-10 ${stringify(widths[size])} ${stringify(className)}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Section($$renderer, $$props) {
  let {
    id,
    bg = "transparent",
    padding = "default",
    reveal = true,
    class: className = "",
    children
  } = $$props;
  const bgClasses = {
    background: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    primary: "bg-primary text-white",
    accent: "bg-accent text-foreground",
    tint: "bg-accent/[0.04] text-foreground",
    transparent: ""
  };
  const paddingClasses = {
    default: "py-16 md:py-24 lg:py-28",
    lg: "py-24 md:py-32 lg:py-40",
    none: ""
  };
  $$renderer.push(`<section${attr("id", id)}${attr_class(`${stringify(bgClasses[bg])} ${stringify(paddingClasses[padding])} ${stringify(className)}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></section>`);
}
export {
  Container as C,
  Section as S,
  SEO as a
};
