<script lang="ts">
  import type { Snippet } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    cta?: Snippet;
  }

  let { eyebrow, title, description, align = 'left', cta }: Props = $props();
</script>

<div
  use:scrollReveal
  class="flex flex-col gap-6 {align === 'center'
    ? 'items-center text-center'
    : 'md:flex-row md:items-end md:justify-between'}"
>
  <div class="max-w-2xl">
    {#if eyebrow}
      <span class="font-mono text-xs uppercase tracking-wide text-secondary">{eyebrow}</span>
    {/if}
    <h2 class="mt-3 font-display text-h2 font-bold text-foreground">{title}</h2>
    {#if description}
      <p class="mt-4 text-body-lg text-muted">{description}</p>
    {/if}
  </div>
  {#if cta}
    <div>{@render cta()}</div>
  {/if}
</div>
