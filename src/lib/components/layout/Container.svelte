<script lang="ts">
  import type { Snippet } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    size?: 'default' | 'wide';
    reveal?: boolean;
    class?: string;
    children: Snippet;
  }

  let { size = 'default', reveal = false, class: className = '', children }: Props = $props();

  const widths: Record<string, string> = {
    default: 'max-w-7xl',
    wide: 'max-w-[1600px]'
  };
</script>

<!--
  reveal defaults to false here — Container almost always sits inside a
  Section, which already reveals the whole block; a second reveal on both
  would double up (two overlapping fade+rise animations on the same visible
  area). Opt in explicitly (reveal) for the rare case a Container is used on
  its own, outside a Section — kept to an opacity-only fade (no y-offset) so
  it never compounds visually with an ancestor's transform if both are used.
-->
<div class="mx-auto w-full px-6 md:px-10 {widths[size]} {className}" use:scrollReveal={{ enabled: reveal, y: 0 }}>
  {@render children()}
</div>
