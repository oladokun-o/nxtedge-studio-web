<script lang="ts">
  import type { Snippet } from 'svelte';
  import Container from './Container.svelte';
  import Section from './Section.svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    description?: string;
    breadcrumbs?: Snippet;
  }

  let { eyebrow, title, description, breadcrumbs }: Props = $props();
</script>

<Section bg="surface" class="border-b border-border">
  <Container>
    {#if breadcrumbs}
      <div class="mb-6">{@render breadcrumbs()}</div>
    {/if}
    {#if eyebrow}
      <span class="font-mono text-xs uppercase tracking-wide text-secondary">{eyebrow}</span>
    {/if}
    <h1 class="mt-4 font-display text-h1 font-bold text-foreground">{title}</h1>
    {#if description}
      <p class="mt-5 max-w-2xl text-body-lg text-muted">{description}</p>
    {/if}
  </Container>
</Section>
