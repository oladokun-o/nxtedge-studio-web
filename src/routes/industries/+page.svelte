<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { industryDetails } from '$lib/content/industries';

  const badgeColors = ['bg-primary text-white', 'bg-accent text-foreground', 'bg-secondary text-white', 'bg-primary text-white'];
</script>

<SEO
  title="Industries | Nxtedge Studio"
  description="The industries Nxtedge Studio understands: Food & Beverage, Financial Services, Professional Services, and Technology & Startups."
/>

<PageHeader
  eyebrow="Industries"
  title="Industries we understand"
  description="Domain-specific credibility, built from real work, not a speculative list of every vertical we'd like to serve."
/>

<Section bg="background">
  <Container>
    <Grid cols={4}>
      {#each industryDetails as industry, i (industry.slug)}
        <Card href="/industries/{industry.slug}" variant="elevated" class="h-full">
          <span class="inline-flex size-11 items-center justify-center rounded-md {badgeColors[i % badgeColors.length]}">
            <Icon name={industry.icon} class="size-5" />
          </span>
          <h3 class="mt-5 text-h4 font-bold text-foreground">{industry.title}</h3>
          <p class="mt-2 text-sm text-muted">{industry.description}</p>
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Don't see your industry?"
  description="We build for the problem, not just the label. Tell us what you're working with."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
