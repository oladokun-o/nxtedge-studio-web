<script lang="ts">
  import type { NavSubItem, NavFeatured } from '$lib/config/navigation';
  import Icon from '../ui/Icon.svelte';

  interface Props {
    id: string;
    label: string;
    description?: string;
    items: NavSubItem[];
    featured?: NavFeatured;
    onclose?: () => void;
  }

  let { id, label, description, items, featured, onclose }: Props = $props();
</script>

<!--
  Full-bleed, flush against the header (no margin gap between trigger and
  panel — a gap here creates a dead zone with nothing hoverable in it, which
  closes the menu the instant the pointer crosses it on the way down). Height
  is intentionally auto (sized to content), not fixed.
-->
<div {id} role="menu" class="absolute inset-x-0 top-full w-full border-t border-border bg-background shadow-2xl">
  <div class="mx-auto max-w-7xl px-6 py-10 md:px-10">
    <div class="grid grid-cols-[12rem_1fr_16rem] gap-8">
      <div>
        <span class="inline-flex rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-secondary">
          {label}
        </span>
        {#if description}
          <p class="mt-4 text-sm text-muted">{description}</p>
        {/if}
      </div>

      <div class="grid grid-cols-2 gap-x-8 gap-y-6">
        {#each items as item (item.label)}
          <a href={item.href} role="menuitem" class="group block focus-visible:outline-2 focus-visible:outline-secondary" onclick={onclose}>
            <span class="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-secondary">
              {#if item.icon}<Icon name={item.icon} class="size-4 shrink-0" />{/if}
              {item.label}
            </span>
            {#if item.description}
              <span class="mt-1 block text-sm text-muted">{item.description}</span>
            {/if}
          </a>
        {/each}
      </div>

      {#if featured}
        <a
          href={featured.href}
          role="menuitem"
          class="block rounded-lg bg-primary p-6 text-white transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-secondary"
          onclick={onclose}
        >
          <span class="font-mono text-xs uppercase tracking-wide text-accent">{featured.eyebrow}</span>
          <p class="mt-3 font-display text-h4 font-bold text-white">{featured.title}</p>
          <p class="mt-2 text-sm text-white/70">{featured.description}</p>
          <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white">
            {featured.label}
            <Icon name="arrow-up-right" class="size-3.5" />
          </span>
        </a>
      {/if}
    </div>
  </div>
</div>
