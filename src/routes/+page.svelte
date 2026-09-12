<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import Hero from '$lib/components/hero/Hero.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import FeatureGrid from '$lib/components/marketing/FeatureGrid.svelte';
  import BentoGrid from '$lib/components/marketing/BentoGrid.svelte';
  import Timeline from '$lib/components/marketing/Timeline.svelte';
  import TechStrip from '$lib/components/marketing/TechStrip.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import SolutionCard from '$lib/components/solutions/SolutionCard.svelte';
  import ProductHighlight from '$lib/components/products/ProductHighlight.svelte';
  import CaseStudyGrid from '$lib/components/case-studies/CaseStudyGrid.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';

  import {
    solutions,
    flagshipProduct,
    caseStudies,
    industries,
    processSteps,
    insightCategories,
    whyNxtedge,
    heroStats,
    builtWith
  } from '$lib/content/homepage';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  const defaultTitle = 'Nxtedge Studio — Technology Company for Digital Products & Business Systems';
  const defaultDescription =
    'Nxtedge Studio designs, engineers, and scales digital products, business systems, and AI-powered solutions — including Nxtflo, our AI-powered delivery operating system.';

  // First item wide, rest even — see component-architecture.md's BentoGrid entry.
  const solutionSpans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2'];

  const industryBadgeColors = ['bg-primary text-white', 'bg-accent text-foreground', 'bg-secondary text-white', 'bg-primary text-white'];
</script>

<SEO
  title={data.settings?.metaTitle ?? defaultTitle}
  description={data.settings?.metaDescription ?? defaultDescription}
  logo={data.settings?.logo}
  ogImage={data.settings?.ogImage}
/>

<Hero settings={data.settings} stats={heroStats} />

<!-- Featured Solutions -->
<Section id="solutions" bg="tint">
  <Container>
    <SectionHeader
      eyebrow="Solutions"
      title="What we build"
      description="Five core offerings, one team — from a first product to the systems that run your business."
    />
    <BentoGrid class="mt-14">
      {#each solutions as solution, i (solution.slug)}
        <div class={solutionSpans[i] ?? 'md:col-span-2'}>
          <SolutionCard {solution} class="h-full" />
        </div>
      {/each}
    </BentoGrid>
  </Container>
</Section>

<!-- Featured Products -->
<Section bg="background">
  <Container>
    <SectionHeader
      eyebrow="Products"
      title="What we're building for ourselves"
      description="Proprietary software, built in-house first, then made available beyond Nxtedge Studio."
    />
    <div class="mt-14">
      <ProductHighlight product={flagshipProduct} />
    </div>
  </Container>
</Section>

<!-- Why Nxtedge -->
<Section bg="surface">
  <Container>
    <SectionHeader eyebrow="Why Nxtedge" title="Why businesses trust us with real systems" />
    <div class="mt-14">
      <FeatureGrid items={whyNxtedge} columns={4} />
    </div>
  </Container>
</Section>

<!-- Case Studies -->
<Section id="work" bg="background">
  <Container>
    <SectionHeader
      eyebrow="Work"
      title="Systems we've delivered"
      description="A sample of what we've built for clients — full names and results go live as each client signs off on public case studies."
    />
    <div class="mt-14">
      <CaseStudyGrid {caseStudies} />
    </div>
  </Container>
</Section>

<!-- Industries -->
<Section id="industries" bg="tint">
  <Container>
    <SectionHeader eyebrow="Industries" title="Industries we understand" />
    <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each industries as industry, i (industry.title)}
        <Card variant="elevated">
          <span class="inline-flex size-11 items-center justify-center rounded-md {industryBadgeColors[i % industryBadgeColors.length]}">
            <Icon name={industry.icon} class="size-5" />
          </span>
          <h3 class="mt-5 text-h4 font-bold text-foreground">{industry.title}</h3>
          <p class="mt-2 text-sm text-muted">{industry.description}</p>
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<!-- Process -->
<Section bg="background">
  <Container>
    <SectionHeader eyebrow="Process" title="How we work" align="center" />
    <div class="mt-14">
      <Timeline steps={processSteps} />
    </div>
  </Container>
</Section>

<!-- Insights -->
<Section id="insights" bg="surface">
  <Container>
    <SectionHeader
      eyebrow="Insights"
      title="What we're learning and sharing"
      description="Our content hub is in progress — here's what's coming."
    />
    <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each insightCategories as insight (insight.category)}
        <Card variant="flush" class="border border-dashed border-border">
          <Badge tone="neutral">{insight.category}</Badge>
          <p class="mt-4 text-body text-muted">{insight.description}</p>
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<!-- CTA -->
<CTA
  eyebrow="Get Started"
  title="Have a raw idea? That's enough to start."
  description="Tell us what you're trying to solve — we'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: `mailto:${data.settings?.email ?? 'hello@nxtedgestudio.com'}` }}
  secondaryCta={data.settings?.calendarLink
    ? { label: 'Book a Discovery Call', href: data.settings.calendarLink }
    : undefined}
/>
