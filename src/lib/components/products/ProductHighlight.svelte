<script lang="ts">
  import type { ProductSummary } from '$lib/types/content';
  import Badge from '../ui/Badge.svelte';
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';

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

<div id="products" class="scroll-mt-24 rounded-2xl border border-border bg-surface p-8 md:p-12">
  <div class="grid gap-10 md:grid-cols-2 md:items-center">
    <div>
      <div class="flex items-center gap-3">
        <Badge tone="accent">Flagship Product</Badge>
        <Badge tone="neutral">{statusLabel[product.status]}</Badge>
      </div>
      <h3 class="mt-5 font-display text-h2 font-bold text-foreground">{product.title}</h3>
      <p class="mt-2 text-body-lg text-muted">{product.tagline}</p>
      <p class="mt-5 text-body text-foreground/80">{product.description}</p>
      <Button href={product.cta.href} class="mt-8" icon="arrow-up-right">{product.cta.label}</Button>
    </div>
    <div class="grid gap-4">
      {#each product.features as feature (feature.title)}
        <div class="flex items-start gap-4 rounded-lg border border-border bg-background p-5">
          <span class="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
            <Icon name={feature.icon} class="size-4" />
          </span>
          <div>
            <h4 class="font-medium text-foreground">{feature.title}</h4>
            <p class="mt-1 text-sm text-muted">{feature.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
