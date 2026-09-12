<script lang="ts">
  import type { FeatureItem } from '$lib/types/content';
  import Icon from '../ui/Icon.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    items: FeatureItem[];
    columns?: 2 | 3 | 4;
  }

  let { items, columns = 2 }: Props = $props();

  const colClasses: Record<number, string> = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  // Bold, alternating icon fills — matches the reference's solid color badges
  // instead of a single muted tint.
  const badgeColors = ['bg-accent text-foreground', 'bg-primary text-white', 'bg-secondary text-white'];
</script>

<div class="grid grid-cols-1 gap-6 {colClasses[columns]}">
  {#each items as item, i (item.title)}
    <div
      use:scrollReveal={{ delay: i * 0.05 }}
      class="flex flex-col gap-4 rounded-lg border border-border bg-background p-6"
    >
      <span class="inline-flex size-11 items-center justify-center rounded-md {badgeColors[i % badgeColors.length]}">
        <Icon name={item.icon} class="size-5" />
      </span>
      <h3 class="text-h4 font-bold text-foreground">{item.title}</h3>
      <p class="text-body text-muted">{item.description}</p>
    </div>
  {/each}
</div>
