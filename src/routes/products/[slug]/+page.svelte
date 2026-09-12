<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import FeatureGrid from '$lib/components/marketing/FeatureGrid.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import SolutionCard from '$lib/components/solutions/SolutionCard.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { solutionDetails } from '$lib/content/solutions';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  let product = $derived(data.product);

  const statusLabel: Record<string, string> = {
    live: 'Live',
    beta: 'Beta',
    'coming-soon': 'In Development'
  };

  let relatedSolutions = $derived(solutionDetails.filter((s) => s.relatedProductSlugs.includes(product.slug)));
</script>

<SEO title="{product.title} — Nxtedge Studio" description={product.tagline} />

<PageHeader eyebrow="Products" title={product.title} description={product.tagline}>
  {#snippet breadcrumbs()}
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.title }]} />
  {/snippet}
</PageHeader>

<Section bg="background">
  <Container>
    <Badge tone="accent">{statusLabel[product.status]}</Badge>
    <div class="mt-6 max-w-3xl">
      <p class="text-body-lg text-muted">{product.description}</p>
    </div>
  </Container>
</Section>

<Section bg="surface">
  <Container>
    <SectionHeader eyebrow="Features" title="What it does" />
    <div class="mt-10">
      <FeatureGrid items={product.features} columns={3} />
    </div>
  </Container>
</Section>

{#if relatedSolutions.length > 0}
  <Section bg="background">
    <Container>
      <SectionHeader eyebrow="Related Solutions" title="Built on solutions we already offer" />
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {#each relatedSolutions as solution (solution.slug)}
          <SolutionCard {solution} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}

<CTA
  eyebrow="Get Started"
  title={product.cta.label}
  description="We're building {product.title} in-house first — tell us what you'd want out of it."
  primaryCta={{ label: product.cta.label, href: product.cta.href }}
/>
