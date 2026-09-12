import { error } from "@sveltejs/kit";
import { s as solutionDetails } from "../../../../chunks/solutions.js";
const load = ({ params }) => {
  const solution = solutionDetails.find((s) => s.slug === params.slug);
  if (!solution) {
    throw error(404, "Solution not found");
  }
  return { solution };
};
export {
  load
};
