<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SolutionGrid from '$lib/components/solutions/SolutionGrid.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { solutions } from '$lib/content/homepage';
</script>

<SEO
  title="Solutions — Nxtedge Studio"
  description="Five core offerings — web development, mobile applications, business systems, AI solutions, and cloud & infrastructure — one technology studio."
/>

<PageHeader
  eyebrow="Solutions"
  title="What we build"
  description="Five core offerings, one team — from a first product to the systems that run your business."
/>

<Section bg="background">
  <Container>
    <SolutionGrid {solutions} />
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Not sure which solution fits?"
  description="Tell us what you're trying to solve — we'll help you figure out the right starting point."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
