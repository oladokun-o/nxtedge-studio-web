<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import ProductGrid from '$lib/components/products/ProductGrid.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { productDetails } from '$lib/content/products';
</script>

<SEO
  title="Products | Nxtedge Studio"
  description="Nxtflo and the products Nxtedge Studio builds and owns, starting in-house, then made available beyond Nxtedge Studio."
/>

<PageHeader
  eyebrow="Products"
  title="What we're building for ourselves"
  description="Proprietary software, built in-house first, then made available beyond Nxtedge Studio."
/>

<Section bg="background">
  <Container>
    <ProductGrid products={productDetails} />
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Curious about Nxtflo?"
  description="We're building it in-house first. Tell us what you'd want out of it."
  primaryCta={{ label: 'Learn about Nxtflo', href: '/products/nxtflo' }}
/>
