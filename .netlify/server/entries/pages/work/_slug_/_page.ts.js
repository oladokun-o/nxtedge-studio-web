import { error } from "@sveltejs/kit";
import { c as caseStudyDetails } from "../../../../chunks/work.js";
const load = ({ params }) => {
  const caseStudy = caseStudyDetails.find((c) => c.slug === params.slug);
  if (!caseStudy) {
    throw error(404, "Case study not found");
  }
  return { caseStudy };
};
export {
  load
};
