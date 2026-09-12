<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { productPricing, servicesPricingNote } from '$lib/content/pricing';
</script>

<SEO
  title="Pricing — Nxtedge Studio"
  description="Product pricing for Nxtflo and Nxtpay, and how we price client services and solutions."
/>

<PageHeader
  eyebrow="Pricing"
  title="Straightforward, not one-size-fits-all"
  description="Product pricing you can see now, and services scoped to what you're actually building."
/>

{#each productPricing as product (product.productSlug)}
  <Section bg={product.productSlug === 'nxtflo' ? 'background' : 'surface'}>
    <Container>
      <SectionHeader eyebrow={product.productTitle} title="{product.productTitle} pricing" description={product.note} />
      <Grid cols={product.tiers.length > 2 ? 4 : 2} class="mt-10">
        {#each product.tiers as tier (tier.name)}
          <Card variant="bordered" class="flex h-full flex-col">
            <p class="font-mono text-xs uppercase tracking-wide text-secondary">{tier.name}</p>
            <p class="mt-3 font-display text-h3 font-bold text-foreground">
              {tier.price}
              {#if tier.cadence}<span class="text-body font-normal text-muted">{tier.cadence}</span>{/if}
            </p>
            <p class="mt-2 text-sm text-muted">{tier.description}</p>
            <ul class="mt-5 flex flex-col gap-2">
              {#each tier.features as feature (feature)}
                <li class="flex items-start gap-2 text-sm text-foreground/80">
                  <Icon name="check" class="mt-0.5 size-4 shrink-0 text-success" />
                  {feature}
                </li>
              {/each}
            </ul>
          </Card>
        {/each}
      </Grid>
    </Container>
  </Section>
{/each}

<Section bg="primary">
  <Container>
    <div class="max-w-2xl">
      <span class="font-mono text-xs uppercase tracking-wide text-white/60">{servicesPricingNote.title}</span>
      <p class="mt-4 text-body-lg text-white/80">{servicesPricingNote.description}</p>
      <Button href={servicesPricingNote.cta.href} variant="inverted" class="mt-8" icon="arrow-up-right">
        {servicesPricingNote.cta.label}
      </Button>
    </div>
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Not sure what this costs?"
  description="Tell us what you're trying to solve — we'll come back with a clear, itemized proposal."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
