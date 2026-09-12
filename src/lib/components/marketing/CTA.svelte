<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Container from '../layout/Container.svelte';
  import Section from '../layout/Section.svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    description?: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  }

  let { eyebrow, title, description, primaryCta, secondaryCta }: Props = $props();
</script>

<Section id="contact" bg="primary" padding="lg">
  <Container>
    <div class="flex flex-col items-center gap-6 text-center">
      {#if eyebrow}
        <span class="font-mono text-eyebrow uppercase tracking-wide text-white/70">{eyebrow}</span>
      {/if}
      <h2 class="max-w-2xl font-display text-h1 font-bold text-white">{title}</h2>
      {#if description}
        <p class="max-w-xl text-body-lg text-white/70">{description}</p>
      {/if}
      <div class="mt-4 flex flex-wrap items-center justify-center gap-6">
        <Button href={primaryCta.href} variant="inverted" icon="arrow-up-right">{primaryCta.label}</Button>
        {#if secondaryCta}
          <a
            href={secondaryCta.href}
            class="text-body-lg font-medium text-white/80 underline decoration-white/40 underline-offset-4 hover:text-white"
          >
            {secondaryCta.label}
          </a>
        {/if}
      </div>
    </div>
  </Container>
</Section>
