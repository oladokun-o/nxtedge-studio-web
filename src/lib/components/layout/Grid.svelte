<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    cols?: 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
    class?: string;
    children: Snippet;
  }

  let { cols = 3, gap = 'md', class: className = '', children }: Props = $props();

  const colClasses: Record<number, string> = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses: Record<string, string> = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };
</script>

<div class="grid grid-cols-1 {colClasses[cols]} {gapClasses[gap]} {className}">
  {@render children()}
</div>
