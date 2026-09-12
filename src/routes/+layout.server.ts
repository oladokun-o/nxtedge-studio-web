import { client } from '$lib/sanity/client';
import { studioSettingsQuery } from '$lib/sanity/queries';
import type { StudioSettings } from '$lib/types/sanity';
import type { LayoutServerLoad } from './$types';

// Shared across every route (Navbar/Footer live in +layout.svelte per
// site-map.md's precondition) — fetched once here instead of per-page.
export const load: LayoutServerLoad = async () => {
  const settings = await client.fetch<StudioSettings>(studioSettingsQuery);
  return { settings };
};
