<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import TechStackRow from '$lib/components/solutions/TechStackRow.svelte';
  import SolutionCard from '$lib/components/solutions/SolutionCard.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { solutionDetails } from '$lib/content/solutions';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  let caseStudy = $derived(data.caseStudy);
  let relatedSolutions = $derived(solutionDetails.filter((s) => caseStudy.relatedSolutionSlugs.includes(s.slug)));
</script>

<SEO title="{caseStudy.title} | Nxtedge Studio" description={caseStudy.summary} />

<PageHeader eyebrow={caseStudy.industry} title={caseStudy.title} description={caseStudy.summary}>
  {#snippet breadcrumbs()}
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: caseStudy.title }]} />
  {/snippet}
</PageHeader>

<Section bg="background">
  <Container>
    <div class="flex flex-wrap gap-2">
      {#each caseStudy.tags as tag (tag)}
        <Badge tone="neutral">{tag}</Badge>
      {/each}
    </div>
    <div class="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <h2 class="font-display text-h4 font-bold text-foreground">The Challenge</h2>
        <p class="mt-4 text-body text-muted">{caseStudy.businessChallenge}</p>
      </div>
      <div>
        <h2 class="font-display text-h4 font-bold text-foreground">The Solution</h2>
        <p class="mt-4 text-body text-muted">{caseStudy.solutionNarrative}</p>
      </div>
    </div>
  </Container>
</Section>

<Section bg="surface">
  <Container>
    <SectionHeader eyebrow="Technology Stack" title="What we built it with" />
    <div class="mt-10">
      <TechStackRow technologies={caseStudy.technologies} />
    </div>
  </Container>
</Section>

{#if relatedSolutions.length > 0}
  <Section bg="background">
    <Container>
      <SectionHeader eyebrow="Related Solutions" title="The capability behind this" />
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
  title="Want results like this?"
  description="Tell us what you're trying to solve. We'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
