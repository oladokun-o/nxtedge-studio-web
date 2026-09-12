<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Timeline from '$lib/components/marketing/Timeline.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { processSteps } from '$lib/content/homepage';
</script>

<SEO
  title="Process — Nxtedge Studio"
  description="How Nxtedge Studio works — from a raw idea to a delivered, working system."
/>

<PageHeader
  eyebrow="Process"
  title="How we work"
  description="The same four-step process behind every project, from a first conversation to delivery."
/>

<Section bg="background">
  <Container>
    <Timeline steps={processSteps} />
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Have a raw idea? That's enough to start."
  description="Tell us what you're trying to solve — we'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
