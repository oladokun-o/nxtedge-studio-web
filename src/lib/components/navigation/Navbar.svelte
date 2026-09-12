<script lang="ts">
  import { primaryNav, ctaLink } from '$lib/config/navigation';
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';
  import MegaMenu from './MegaMenu.svelte';
  import MobileNav from './MobileNav.svelte';
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }

  let { settings = null }: Props = $props();

  let openMenu = $state<string | null>(null);
  let mobileOpen = $state(false);

  let activeItem = $derived(primaryNav.find((item) => item.label === openMenu));

  function closeMenu() {
    openMenu = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      openMenu = null;
      mobileOpen = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- svelte-ignore a11y_no_static_element_interactions -- mouseleave is a pointer-only convenience; Escape + aria-expanded already cover keyboard access -->
<header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur" onmouseleave={closeMenu}>
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
    <a href="/" class="flex shrink-0 items-center gap-1">
      <img src="/brand/nxtedge-mark-charcoal.png" alt="" class="h-7 w-auto" />
      <img src="/brand/nxtedge-wordmark-charcoal.png" alt="Nxtedge" class="h-4.5 w-auto" />
    </a>

    <nav class="hidden items-center gap-0 lg:flex" aria-label="Primary">
      {#each primaryNav as item (item.label)}
        {#if item.children}
          <button
            class="flex cursor-pointer items-center gap-1 font-medium text-sm tracking-wide text-foreground transition-colors hover:text-foreground hover:bg-accent/25 {openMenu === item.label ? 'bg-foreground/5' : ''} rounded-full px-1.5 focus-visible:outline-2 focus-visible:outline-secondary"
            aria-expanded={openMenu === item.label}
            aria-controls="menu-{item.label}"
            onmouseenter={() => (openMenu = item.label)}
            onclick={() => (openMenu = openMenu === item.label ? null : item.label)}
          >
            {item.label}
            <Icon
              name="chevron-right"
              class="size-3 rotate-90 transition-transform duration-200 {openMenu === item.label ? '-rotate-90' : ''}"
            />
          </button>
        {:else}
          <a
            href={item.href}
            class="font-medium text-sm tracking-wide text-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-secondary hover:bg-accent/25 rounded-full px-1.5 mx-1"
            onmouseenter={closeMenu}
          >
            {item.label}
          </a>
        {/if}
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      <a
        href="#"
        class="hidden font-medium px-3 text-sm tracking-wide text-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-secondary lg:inline"
      >
        Login
      </a>
      <Button href="/#contact" variant="outline" size="sm" class="hidden text-sm! py-1.5! lg:inline-flex font-bold!">Free website redesign</Button>
      <Button href={ctaLink.href} size="sm" class="hidden lg:inline-flex font-semibold!">{ctaLink.label}</Button>
      <button
        class="inline-flex size-10 items-center justify-center rounded-md border border-border focus-visible:outline-2 focus-visible:outline-secondary lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        aria-label="Open menu"
        onclick={() => (mobileOpen = true)}
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>
  </div>

  {#if activeItem?.children}
    <MegaMenu
      id="menu-{activeItem.label}"
      label={activeItem.label}
      description={activeItem.description}
      items={activeItem.children}
      featured={activeItem.featured}
      onclose={closeMenu}
    />
  {/if}
</header>

<MobileNav bind:open={mobileOpen} />
