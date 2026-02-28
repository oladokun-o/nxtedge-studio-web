import { client } from '$lib/sanity/client';
import { studioSettingsQuery, studioServicesQuery, studioProjectsQuery } from '$lib/sanity/queries';
import type { StudioSettings, StudioService, StudioProject } from '$lib/types/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const [settings, services, projects] = await Promise.all([
    client.fetch<StudioSettings>(studioSettingsQuery),
    client.fetch<StudioService[]>(studioServicesQuery),
    client.fetch<StudioProject[]>(studioProjectsQuery)
  ]);

  return { settings, services, projects };
};
