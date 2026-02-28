<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { SanityImageRef } from '$lib/types/sanity';

  interface Props {
    title: string;
    description: string;
    logo?: SanityImageRef | null;
    ogImage?: SanityImageRef | null;
  }

  let { title, description, logo, ogImage }: Props = $props();

  let ogUrl = $derived(ogImage ? urlFor(ogImage).width(1200).height(630).url() : null);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if ogUrl}
    <meta property="og:image" content={ogUrl} />
  {/if}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
