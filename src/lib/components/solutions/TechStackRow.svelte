<script lang="ts">
  import type { TechStackItem } from '$lib/types/content';

  interface Props {
    technologies: TechStackItem[];
  }

  let { technologies }: Props = $props();
</script>

<div class="flex flex-wrap gap-3">
  {#each technologies as tech (tech.name)}
    <span class="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80">
      {tech.name}
    </span>
  {/each}
</div>
