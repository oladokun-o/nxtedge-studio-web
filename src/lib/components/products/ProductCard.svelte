<script lang="ts">
  import type { ProductSummary } from '$lib/types/content';
  import Card from '../ui/Card.svelte';
  import Badge from '../ui/Badge.svelte';

  interface Props {
    product: ProductSummary;
  }

  let { product }: Props = $props();

  const statusLabel: Record<string, string> = {
    live: 'Live',
    beta: 'Beta',
    'coming-soon': 'In Development'
  };
</script>

<Card variant="elevated" href={product.cta.href} class="h-full">
  <Badge tone="accent">{statusLabel[product.status]}</Badge>
  <h3 class="mt-4 text-h4 font-bold text-foreground">{product.title}</h3>
  <p class="mt-2 text-body text-muted">{product.tagline}</p>
</Card>
