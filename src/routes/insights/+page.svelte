<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import { insightCategories } from '$lib/content/homepage';
</script>

<SEO
  title="Insights — Nxtedge Studio"
  description="Notes on engineering, AI, and running a technology studio — coming soon from Nxtedge Studio."
/>

<PageHeader
  eyebrow="Insights"
  title="What we're learning and sharing"
  description="Written from delivery, not a content calendar. Nothing published yet — here's what's coming."
/>

<Section bg="background">
  <Container>
    <ul class="mx-auto flex max-w-2xl flex-col divide-y divide-border">
      {#each insightCategories as insight (insight.category)}
        <li class="flex flex-col gap-2 py-8 first:pt-0">
          <Badge tone="neutral" class="w-fit">{insight.category}</Badge>
          <p class="text-body-lg text-muted">{insight.description}</p>
        </li>
      {/each}
    </ul>
  </Container>
</Section>
