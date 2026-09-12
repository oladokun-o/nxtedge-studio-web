import { d as attr_class, s as stringify, b as ensure_array_like, e as escape_html } from "./index.js";
import { I as Icon } from "./Button.js";
function FeatureGrid($$renderer, $$props) {
  let { items, columns = 2 } = $$props;
  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  const badgeColors = [
    "bg-accent text-foreground",
    "bg-primary text-white",
    "bg-secondary text-white"
  ];
  $$renderer.push(`<div${attr_class(`grid grid-cols-1 gap-6 ${stringify(colClasses[columns])}`)}><!--[-->`);
  const each_array = ensure_array_like(items);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$renderer.push(`<div class="flex flex-col gap-4 rounded-lg border border-border bg-background p-6"><span${attr_class(`inline-flex size-11 items-center justify-center rounded-md ${stringify(badgeColors[i % badgeColors.length])}`)}>`);
    Icon($$renderer, { name: item.icon, class: "size-5" });
    $$renderer.push(`<!----></span> <h3 class="text-h4 font-bold text-foreground">${escape_html(item.title)}</h3> <p class="text-body text-muted">${escape_html(item.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  FeatureGrid as F
};
