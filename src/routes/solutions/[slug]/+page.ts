import { error } from '@sveltejs/kit';
import { solutionDetails } from '$lib/content/solutions';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const solution = solutionDetails.find((s) => s.slug === params.slug);

  if (!solution) {
    throw error(404, 'Solution not found');
  }

  return { solution };
};
