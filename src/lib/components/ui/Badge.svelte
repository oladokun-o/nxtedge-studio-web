<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    tone?: 'neutral' | 'accent' | 'success';
    class?: string;
    children: Snippet;
  }

  let { tone = 'neutral', class: className = '', children }: Props = $props();

  const tones: Record<string, string> = {
    neutral: 'bg-surface text-muted border border-border',
    accent: 'bg-secondary/10 text-secondary border border-secondary/20',
    success: 'bg-success/10 text-success border border-success/20'
  };
</script>

<span
  class="inline-flex items-center rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wide {tones[tone]} {className}"
>
  {@render children()}
</span>
