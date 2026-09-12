import { d as attr_class, s as stringify } from "./index.js";
function Badge($$renderer, $$props) {
  let { tone = "neutral", class: className = "", children } = $$props;
  const tones = {
    neutral: "bg-surface text-muted border border-border",
    accent: "bg-secondary/10 text-secondary border border-secondary/20",
    success: "bg-success/10 text-success border border-success/20"
  };
  $$renderer.push(`<span${attr_class(`inline-flex items-center rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wide ${stringify(tones[tone])} ${stringify(className)}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></span>`);
}
export {
  Badge as B
};
