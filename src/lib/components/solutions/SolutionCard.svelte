<script lang="ts">
  import type { SolutionSummary } from '$lib/types/content';
  import Card from '../ui/Card.svelte';
  import Icon from '../ui/Icon.svelte';

  interface Props {
    solution: SolutionSummary;
    class?: string;
  }

  let { solution, class: className = '' }: Props = $props();
</script>

<Card href="/solutions/{solution.slug}" variant="elevated" class="h-full {className}">
  <span class="inline-flex size-12 items-center justify-center rounded-md bg-primary text-white">
    <Icon name={solution.icon} class="size-6" />
  </span>
  <h3 class="mt-6 text-h3 font-bold text-foreground">{solution.title}</h3>
  <p class="mt-3 text-body text-muted">{solution.summary}</p>
  <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
    Learn more
    <Icon name="arrow-up-right" class="size-3.5" />
  </span>
</Card>
