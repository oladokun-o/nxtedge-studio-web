import { s as solutionDetails } from "./solutions.js";
import { p as productDetails } from "./products.js";
import { c as caseStudyDetails } from "./work.js";
import { i as industryDetails } from "./industries.js";
const solutions = solutionDetails.map(({ title, slug, category, summary, icon }) => ({
  title,
  slug,
  category,
  summary,
  icon
}));
const flagshipProduct = productDetails.find((p) => p.slug === "nxtflo");
const caseStudies = caseStudyDetails;
const industries = industryDetails;
const processSteps = [
  {
    order: 1,
    title: "Discovery",
    description: "We start with a conversation — your raw idea, however rough, is enough to begin."
  },
  {
    order: 2,
    title: "Structuring & Scope",
    description: "We turn that conversation into a clear, structured project scope."
  },
  {
    order: 3,
    title: "Proposal & Costing",
    description: "You get a straightforward proposal — what we're building, what it costs, and when."
  },
  {
    order: 4,
    title: "Build & Delivery",
    description: "We build, keep you in the loop, and deliver a working product — not just a handoff."
  }
];
const insightCategories = [
  { category: "Engineering", description: "How we build and ship.", icon: "code" },
  { category: "Artificial Intelligence", description: "Where AI actually earns its place.", icon: "sparkles" },
  { category: "Business", description: "Notes on running a technology studio.", icon: "trending-up" },
  { category: "Product Updates", description: "What we're shipping, including Nxtflo.", icon: "layers" }
];
const whyNxtedge = [
  {
    title: "Full-stack, not just software",
    description: "We handle web and mobile development alongside physical infrastructure — networking, CCTV, the parts other studios don't touch.",
    icon: "layers"
  },
  {
    title: "Built on real delivery experience",
    description: "Every solution we design is shaped by projects we have actually shipped and supported end to end.",
    icon: "shield"
  },
  {
    title: "AI where it earns its place",
    description: "We use AI to make delivery faster and more structured — not as a marketing label.",
    icon: "sparkles"
  },
  {
    title: "A long-term technology partner",
    description: "We are not a one-off vendor. We build the systems your business runs on, and we stay involved.",
    icon: "users"
  }
];
const heroStats = [
  { value: "4+", label: "Systems delivered" },
  { value: "2", label: "Industries served" }
];
export {
  industries as a,
  caseStudies as c,
  flagshipProduct as f,
  heroStats as h,
  insightCategories as i,
  processSteps as p,
  solutions as s,
  whyNxtedge as w
};
