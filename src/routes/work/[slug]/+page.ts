import { error } from '@sveltejs/kit';
import { caseStudyDetails } from '$lib/content/work';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const caseStudy = caseStudyDetails.find((c) => c.slug === params.slug);

  if (!caseStudy) {
    throw error(404, 'Case study not found');
  }

  return { caseStudy };
};
