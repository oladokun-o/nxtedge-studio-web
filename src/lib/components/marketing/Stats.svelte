<script lang="ts">
  import type { Stat } from '$lib/types/content';

  interface Props {
    stats: Stat[];
    class?: string;
  }

  let { stats, class: className = '' }: Props = $props();
</script>

<dl class="flex flex-wrap gap-10 {className}">
  {#each stats as stat (stat.label)}
    <div>
      <dt class="sr-only">{stat.label}</dt>
      <dd class="font-display text-h2 font-bold text-foreground">{stat.value}</dd>
      <p class="mt-1 max-w-[18ch] text-sm text-muted">{stat.label}</p>
    </div>
  {/each}
</dl>
