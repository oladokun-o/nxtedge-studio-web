import { error } from "@sveltejs/kit";
import { i as industryDetails } from "../../../../chunks/industries.js";
const load = ({ params }) => {
  const industry = industryDetails.find((i) => i.slug === params.slug);
  if (!industry) {
    throw error(404, "Industry not found");
  }
  return { industry };
};
export {
  load
};
