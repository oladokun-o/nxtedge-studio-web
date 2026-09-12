<script lang="ts">
  import type { Snippet } from 'svelte';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import AutoScroll from 'embla-carousel-auto-scroll';

  /*
    Continuous auto-playing logo strip — Embla + the auto-scroll plugin, per
    the reference (assets/designs/ "Trusted by B2B teams" row). Slides are
    duplicated by the caller so the loop reads as seamless; this component
    just wires up the action + plugin.
  */
  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const options = { loop: true, dragFree: true, align: 'start' as const };
  const plugins = [AutoScroll({ speed: 0.6, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })];
</script>

<!--
  Fade-edge mask — "shadow" separation from whatever sits beside the marquee
  (e.g. the "Trusted by" label), so scrolling logos fade in/out at the edges
  instead of cutting off abruptly against it.
-->
<div
  class="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
  use:emblaCarouselSvelte={{ options, plugins }}
>
  <div class="flex items-center">
    {@render children()}
  </div>
</div>
