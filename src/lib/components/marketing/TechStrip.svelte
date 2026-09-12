<script lang="ts">
  import type { TechStripItem } from '$lib/types/content';

  interface Props {
    title?: string;
    items: TechStripItem[];
  }

  let { title = 'Built with', items }: Props = $props();
</script>

<div>
  <p class="text-center font-mono text-xs uppercase tracking-wide text-muted">{title}</p>
  <div class="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
    {#each items as item (item.name)}
      <span class="text-lg font-medium text-foreground/40 transition-colors hover:text-foreground/70">
        {item.name}
      </span>
    {/each}
  </div>
</div>
