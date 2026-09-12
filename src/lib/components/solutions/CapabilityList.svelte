<script lang="ts">
  import type { Capability } from '$lib/types/content';
  import Icon from '../ui/Icon.svelte';

  interface Props {
    capabilities: Capability[];
  }

  let { capabilities }: Props = $props();
</script>

<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {#each capabilities as capability (capability.title)}
    <li class="flex items-start gap-3 rounded-lg border border-border p-5">
      <span class="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-success/15 text-success">
        <Icon name="check" class="size-4" />
      </span>
      <div>
        <p class="font-medium text-foreground">{capability.title}</p>
        <p class="mt-1 text-sm text-muted">{capability.description}</p>
      </div>
    </li>
  {/each}
</ul>
