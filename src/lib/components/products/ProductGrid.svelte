<script lang="ts">
  import type { ProductSummary } from '$lib/types/content';
  import ProductCard from './ProductCard.svelte';
  import Grid from '../layout/Grid.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    products: ProductSummary[];
  }

  let { products }: Props = $props();
</script>

<Grid cols={3}>
  {#each products as product, i (product.slug)}
    <div use:scrollReveal={{ delay: i * 0.05 }}>
      <ProductCard {product} />
    </div>
  {/each}
  <div class="flex flex-col justify-center rounded-lg border border-dashed border-border p-6">
    <p class="font-mono text-xs uppercase tracking-wide text-muted">More products coming soon</p>
    <p class="mt-2 text-sm text-muted">
      Nxtflo is the first of an ongoing product line. Future products will appear here as they ship.
    </p>
  </div>
</Grid>
