import { error } from '@sveltejs/kit';
import { productDetails } from '$lib/content/products';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const product = productDetails.find((p) => p.slug === params.slug);

  if (!product) {
    throw error(404, 'Product not found');
  }

  return { product };
};
