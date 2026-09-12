import { error } from "@sveltejs/kit";
import { e as expertiseDetails } from "../../../../chunks/expertise.js";
const load = ({ params }) => {
  const expertise = expertiseDetails.find((e) => e.slug === params.slug);
  if (!expertise) {
    throw error(404, "Expertise not found");
  }
  return { expertise };
};
export {
  load
};
