import { error } from '@sveltejs/kit';
import { expertiseDetails } from '$lib/content/expertise';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const expertise = expertiseDetails.find((e) => e.slug === params.slug);

  if (!expertise) {
    throw error(404, 'Expertise not found');
  }

  return { expertise };
};
