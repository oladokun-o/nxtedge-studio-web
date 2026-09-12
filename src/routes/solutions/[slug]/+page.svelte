<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import CapabilityList from '$lib/components/solutions/CapabilityList.svelte';
  import TechStackRow from '$lib/components/solutions/TechStackRow.svelte';
  import Timeline from '$lib/components/marketing/Timeline.svelte';
  import CaseStudyGrid from '$lib/components/case-studies/CaseStudyGrid.svelte';
  import ProductCard from '$lib/components/products/ProductCard.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { processSteps, caseStudies, flagshipProduct } from '$lib/content/homepage';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  let solution = $derived(data.solution);

  let relatedCaseStudies = $derived(caseStudies.filter((cs) => cs.relatedSolutionSlugs.includes(solution.slug)));

  let relatedProducts = $derived(solution.relatedProductSlugs.includes(flagshipProduct.slug) ? [flagshipProduct] : []);
</script>

<SEO title="{solution.title} | Nxtedge Studio" description={solution.summary} />

<PageHeader eyebrow="Solutions" title={solution.title} description={solution.summary}>
  {#snippet breadcrumbs()}
    <Breadcrumbs
      items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: solution.title }]}
    />
  {/snippet}
</PageHeader>

<Section bg="background">
  <Container>
    <div class="max-w-3xl">
      <h2 class="text-h3 font-bold text-foreground">Overview</h2>
      <p class="mt-4 text-body-lg text-muted">{solution.overview}</p>
    </div>
  </Container>
</Section>

<Section bg="surface">
  <Container>
    <SectionHeader eyebrow="The Problem" title="Business problems this solves" />
    <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      {#each solution.businessProblems as problem (problem)}
        <li class="rounded-lg border border-border bg-background p-5 text-body text-foreground/80">{problem}</li>
      {/each}
    </ul>
  </Container>
</Section>

<Section bg="background">
  <Container>
    <SectionHeader eyebrow="Capabilities" title="What's included" />
    <div class="mt-10">
      <CapabilityList capabilities={solution.capabilities} />
    </div>
  </Container>
</Section>

<Section bg="surface">
  <Container>
    <SectionHeader eyebrow="Technology Stack" title="What we build it with" />
    <div class="mt-10">
      <TechStackRow technologies={solution.technologies} />
    </div>
  </Container>
</Section>

<Section bg="background">
  <Container>
    <SectionHeader eyebrow="Process" title="How we work" align="center" />
    <div class="mt-14">
      <Timeline steps={processSteps} />
    </div>
  </Container>
</Section>

{#if relatedCaseStudies.length > 0}
  <Section bg="surface">
    <Container>
      <SectionHeader eyebrow="Related Work" title="Case studies" />
      <div class="mt-10">
        <CaseStudyGrid caseStudies={relatedCaseStudies} />
      </div>
    </Container>
  </Section>
{/if}

{#if relatedProducts.length > 0}
  <Section bg="background">
    <Container>
      <SectionHeader eyebrow="Related Products" title="Built with this solution" />
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {#each relatedProducts as product (product.slug)}
          <ProductCard {product} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}

<CTA
  eyebrow="Get Started"
  title="Ready to start your {solution.title} project?"
  description="Tell us what you're trying to solve. We'll help you turn it into a structured, working system."
  primaryCta={{ label: solution.cta.label, href: solution.cta.href }}
/>
