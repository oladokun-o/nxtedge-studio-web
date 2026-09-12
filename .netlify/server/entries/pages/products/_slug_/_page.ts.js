import { error } from "@sveltejs/kit";
import { p as productDetails } from "../../../../chunks/products.js";
const load = ({ params }) => {
  const product = productDetails.find((p) => p.slug === params.slug);
  if (!product) {
    throw error(404, "Product not found");
  }
  return { product };
};
export {
  load
};
