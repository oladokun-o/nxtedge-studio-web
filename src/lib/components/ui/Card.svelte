<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    variant?: 'bordered' | 'elevated' | 'flush';
    href?: string;
    target?: string;
    rel?: string;
    id?: string;
    class?: string;
    media?: Snippet;
    children: Snippet;
  }

  let { variant = 'bordered', href, target, rel, id, class: className = '', media, children }: Props = $props();

  const variants: Record<string, string> = {
    bordered: 'border border-border bg-background hover:border-foreground/40',
    elevated: 'border border-border bg-background shadow-sm hover:shadow-md hover:-translate-y-0.5',
    flush: 'bg-transparent'
  };

  let tag = $derived(href ? ('a' as const) : ('div' as const));
</script>

<svelte:element
  this={tag}
  {href}
  {target}
  {rel}
  {id}
  class="group block overflow-hidden rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-secondary {variants[
    variant
  ]} {className}"
>
  {#if media}
    <div class="aspect-[4/3] overflow-hidden bg-surface">
      {@render media()}
    </div>
  {/if}
  <div class="p-6">
    {@render children()}
  </div>
</svelte:element>
