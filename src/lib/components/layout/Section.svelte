<script lang="ts">
  import type { Snippet } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    id?: string;
    bg?: 'background' | 'surface' | 'primary' | 'accent' | 'tint' | 'transparent';
    padding?: 'default' | 'lg' | 'none';
    reveal?: boolean;
    class?: string;
    children: Snippet;
  }

  let { id, bg = 'transparent', padding = 'default', reveal = true, class: className = '', children }: Props = $props();

  const bgClasses: Record<string, string> = {
    background: 'bg-background text-foreground',
    surface: 'bg-surface text-foreground',
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-foreground',
    tint: 'bg-accent/[0.04] text-foreground',
    transparent: ''
  };

  const paddingClasses: Record<string, string> = {
    default: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-28',
    none: ''
  };
</script>

<section {id} class="{bgClasses[bg]} {paddingClasses[padding]} {className}" use:scrollReveal={{ enabled: reveal }}>
  {@render children()}
</section>
