<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { expertiseDetails } from '$lib/content/expertise';
</script>

<SEO
  title="Expertise | Nxtedge Studio"
  description="Cross-cutting technical specializations Nxtedge Studio brings to client work: MVP development, data migration, AI-assisted workflows, and more."
/>

<PageHeader
  eyebrow="Expertise"
  title="Where we go deep"
  description="Narrower specializations that cut across our five solutions, the specific technical depth behind the work."
/>

<Section bg="background">
  <Container>
    <Grid cols={3}>
      {#each expertiseDetails as expertise (expertise.slug)}
        <Card href="/expertise/{expertise.slug}" variant="elevated" class="h-full">
          <span class="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">
            <Icon name={expertise.icon} class="size-5" />
          </span>
          <h3 class="mt-5 text-h4 font-bold text-foreground">{expertise.title}</h3>
          <p class="mt-2 text-sm text-muted">{expertise.summary}</p>
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Need this kind of depth?"
  description="Tell us what you're trying to solve. We'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
