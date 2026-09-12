<script lang="ts">
  import { primaryNav, ctaLink } from '$lib/config/navigation';
  import Icon from '../ui/Icon.svelte';
  import Button from '../ui/Button.svelte';
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }

  let { settings = null }: Props = $props();

  /*
    Column shape mirrors Web Hero's actual footer (assets/designs/):
    Services/Industries/Expertise/Locations/Company, five columns of real link
    lists above a copyright bar — not a slice()'d duplicate of two columns.
    Locations is dropped (no documented Nigerian city/region list exists in the
    repo — see decisions log). Solutions/Industries/Expertise are read straight
    from primaryNav (single source of truth, navigation.ts), not re-typed here.
    Web Hero's founder-LinkedIn chip in the CTA banner is intentionally omitted
    — no founder name/photo/personal LinkedIn is documented anywhere in this
    repo, and fabricating one would be exactly the kind of invented credential
    CLAUDE_Nxtedge_Updated.md's rules forbid.
  */
  const solutionsLinks = primaryNav.find((item) => item.label === 'Solutions')?.children ?? [];
  const industriesLinks = primaryNav.find((item) => item.label === 'Industries')?.children ?? [];
  const expertiseLinks = primaryNav.find((item) => item.label === 'Expertise')?.children ?? [];
  const companyLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '/process' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact us', href: '/#contact' }
  ];
</script>

<footer class="bg-primary text-white">
  <div class="mx-auto max-w-7xl px-6 py-16 md:px-10">
    <div class="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
      <h2 class="font-display text-h1 font-bold text-white">
        Tell us what you're building<span class="text-accent">.</span>
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button href={ctaLink.href} variant="inverted" icon="arrow-up-right">{ctaLink.label}</Button>
        {#if settings?.calendarLink}
          <Button href={settings.calendarLink} target="_blank" rel="noopener noreferrer" variant="outline" class="border-white/20 text-white hover:border-white">
            Book a Discovery Call
          </Button>
        {/if}
      </div>
    </div>

    <div class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <span class="font-mono text-xs uppercase tracking-wide text-white/40">Solutions</span>
        <ul class="mt-5 flex flex-col gap-3">
          {#each solutionsLinks as link (link.label)}
            <li><a href={link.href} class="text-body text-white/70 hover:text-white">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div>
        <span class="font-mono text-xs uppercase tracking-wide text-white/40">Industries</span>
        <ul class="mt-5 flex flex-col gap-3">
          {#each industriesLinks as link (link.label)}
            <li><a href={link.href} class="text-body text-white/70 hover:text-white">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div>
        <span class="font-mono text-xs uppercase tracking-wide text-white/40">Expertise</span>
        <ul class="mt-5 flex flex-col gap-3">
          {#each expertiseLinks as link (link.label)}
            <li><a href={link.href} class="text-body text-white/70 hover:text-white">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div>
        <span class="font-mono text-xs uppercase tracking-wide text-white/40">Company</span>
        <ul class="mt-5 flex flex-col gap-3">
          {#each companyLinks as link (link.label)}
            <li><a href={link.href} class="text-body text-white/70 hover:text-white">{link.label}</a></li>
          {/each}
          {#if settings?.email}
            <li><a href="mailto:{settings.email}" class="text-body text-white/70 hover:text-white">{settings.email}</a></li>
          {:else}
            <li><a href="mailto:hello@nxtedgestudio.com" class="text-body text-white/70 hover:text-white">hello@nxtedgestudio.com</a></li>
          {/if}
          {#if settings?.phone}
            <li><a href="tel:{settings.phone}" class="text-body text-white/70 hover:text-white">{settings.phone}</a></li>
          {/if}
        </ul>
        <div class="mt-6 flex gap-3">
          {#if settings?.instagram}
            <a
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex size-9 items-center justify-center rounded-md border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
              aria-label="Instagram"
            >
              <Icon name="instagram" class="size-4" />
            </a>
          {/if}
          {#if settings?.linkedIn}
            <a
              href={settings.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex size-9 items-center justify-center rounded-md border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" class="size-4" />
            </a>
          {/if}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
      <p>&copy; {new Date().getFullYear()} {settings?.siteTitle ?? 'Nxtedge Studio'}. All rights reserved.</p>
      <p class="font-mono text-xs uppercase tracking-wide">Built as a technology studio, not an agency.</p>
    </div>
  </div>
</footer>
