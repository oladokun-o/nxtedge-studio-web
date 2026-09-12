import { d as attr_class, s as stringify } from "./index.js";
function Grid($$renderer, $$props) {
  let { cols = 3, gap = "md", class: className = "", children } = $$props;
  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4"
  };
  const gapClasses = { sm: "gap-4", md: "gap-6", lg: "gap-8" };
  $$renderer.push(`<div${attr_class(`grid grid-cols-1 ${stringify(colClasses[cols])} ${stringify(gapClasses[gap])} ${stringify(className)}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  Grid as G
};
