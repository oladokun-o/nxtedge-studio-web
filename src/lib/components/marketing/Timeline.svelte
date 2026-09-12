<script lang="ts">
  import type { ProcessStep } from '$lib/types/content';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    steps: ProcessStep[];
  }

  let { steps }: Props = $props();
</script>

<ol class="grid grid-cols-1 gap-8 md:grid-cols-4">
  {#each steps as step, i (step.order)}
    <li use:scrollReveal={{ delay: i * 0.08 }} class="flex flex-col gap-4">
      <span
        class="inline-flex size-11 items-center justify-center rounded-full bg-primary font-mono text-sm text-white"
      >
        {String(step.order).padStart(2, '0')}
      </span>
      <h3 class="mt-2 text-h4 font-bold text-foreground">{step.title}</h3>
      <p class="text-body text-muted">{step.description}</p>
    </li>
  {/each}
</ol>
