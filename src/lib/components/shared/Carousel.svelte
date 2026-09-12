<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '../ui/Icon.svelte';

  /*
    Native CSS scroll-snap carousel — decisions.md Decision 3's approved-but-
    never-built replacement for Swiper ("a lightweight, dependency-light
    carousel... using native CSS scroll-snap"). No JS library, just
    overflow-x-auto + scroll-snap-type and scrollBy for the prev/next buttons.
    Prev/next button chrome (circular, outlined) follows the reference designs
    in assets/designs/ (Web Hero's case-study carousel).
  */

  interface Props {
    children: Snippet;
    class?: string;
  }

  let { children, class: className = '' }: Props = $props();

  let track: HTMLDivElement | undefined = $state();

  function scroll(direction: 1 | -1) {
    if (!track) return;
    const amount = track.clientWidth * 0.8 * direction;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: amount, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
</script>

<div class="relative {className}">
  <div
    bind:this={track}
    class="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  >
    {@render children()}
  </div>

  <div class="mt-6 flex items-center justify-end gap-3">
    <button
      type="button"
      class="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-secondary"
      aria-label="Previous"
      onclick={() => scroll(-1)}
    >
      <Icon name="chevron-right" class="size-4 rotate-180" />
    </button>
    <button
      type="button"
      class="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-secondary"
      aria-label="Next"
      onclick={() => scroll(1)}
    >
      <Icon name="chevron-right" class="size-4" />
    </button>
  </div>
</div>
