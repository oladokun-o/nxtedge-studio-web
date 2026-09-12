<script lang="ts">
  import type { SolutionSummary } from '$lib/types/content';
  import SolutionCard from './SolutionCard.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    solutions: SolutionSummary[];
  }

  let { solutions }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each solutions as solution, i (solution.slug)}
    <div use:scrollReveal={{ delay: i * 0.05 }}>
      <SolutionCard {solution} class="h-full" />
    </div>
  {/each}
</div>
