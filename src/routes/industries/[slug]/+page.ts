import { error } from '@sveltejs/kit';
import { industryDetails } from '$lib/content/industries';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const industry = industryDetails.find((i) => i.slug === params.slug);

  if (!industry) {
    throw error(404, 'Industry not found');
  }

  return { industry };
};
