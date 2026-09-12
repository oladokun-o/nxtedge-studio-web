<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import SolutionCard from '$lib/components/solutions/SolutionCard.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { solutionDetails } from '$lib/content/solutions';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  let expertise = $derived(data.expertise);
  let relatedSolutions = $derived(solutionDetails.filter((s) => expertise.relatedSolutionSlugs.includes(s.slug)));
</script>

<SEO title="{expertise.title} | Nxtedge Studio" description={expertise.summary} />

<PageHeader eyebrow="Expertise" title={expertise.title} description={expertise.summary}>
  {#snippet breadcrumbs()}
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Expertise', href: '/expertise' }, { label: expertise.title }]} />
  {/snippet}
</PageHeader>

<Section bg="background">
  <Container>
    <div class="max-w-3xl">
      <p class="text-body-lg text-muted">{expertise.overview}</p>
    </div>
  </Container>
</Section>

{#if relatedSolutions.length > 0}
  <Section bg="surface">
    <Container>
      <SectionHeader eyebrow="Related Solutions" title="Where this shows up" />
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each relatedSolutions as solution (solution.slug)}
          <SolutionCard {solution} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}

<CTA
  eyebrow="Get Started"
  title="Need this kind of depth?"
  description="Tell us what you're trying to solve. We'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
