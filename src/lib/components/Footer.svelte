<script lang="ts">
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }
  let { settings = null }: Props = $props();

  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home',     href: '#' },
    { label: 'Works',    href: '#work' },
    { label: 'Studio',   href: '#about' },
    { label: 'Services', href: '#services' },
  ];
</script>

<!-- ==================== Footer ==================== -->
<footer class="bg-[#151515] border-t border-white/10 px-6">

  <!-- Main footer -->
  <div class="max-w-[1320px] mx-auto py-20 grid lg:grid-cols-2 gap-16">

    <!-- Left: newsletter / brand -->
    <div>
      <h6 class="text-white font-semibold mb-2">
        {settings?.siteTitle ?? 'Nxtedge Studio'}
      </h6>
      {#if settings?.tagline}
        <p class="text-white/40 text-sm mb-8">{settings.tagline}</p>
      {:else}
        <p class="text-white/40 text-sm mb-8">Full-service digital solutions agency.</p>
      {/if}

      {#if settings?.calendarLink}
        <a href={settings.calendarLink} target="_blank" rel="noopener noreferrer" class="butn butn-bord text-sm">
          Book a Call
        </a>
      {:else if settings?.email}
        <a href="mailto:{settings.email}" class="butn butn-bord text-sm">
          {settings.email}
        </a>
      {/if}
    </div>

    <!-- Right: contact info columns -->
    <div class="grid sm:grid-cols-2 gap-10">
      <div>
        <h6 class="text-xs uppercase tracking-widest text-white/40 mb-4">Work Inquiry</h6>
        {#if settings?.email}
          <p class="text-white/70 text-sm mb-1">
            <a href="mailto:{settings.email}" class="hover:text-white transition-colors">{settings.email}</a>
          </p>
        {:else}
          <p class="text-white/70 text-sm mb-1">contact@nxtedgestudio.com</p>
        {/if}
        {#if settings?.phone}
          <p class="text-white/50 text-sm">{settings.phone}</p>
        {/if}
      </div>
      <div>
        <h6 class="text-xs uppercase tracking-widest text-white/40 mb-4">Navigate</h6>
        {#each navLinks as link}
          <p class="mb-1">
            <a href={link.href} class="text-white/70 text-sm hover:text-white transition-colors">{link.label}</a>
          </p>
        {/each}
      </div>
    </div>

  </div>

  <!-- Sub-footer -->
  <div class="max-w-[1320px] mx-auto py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-white/30 text-sm">
      &copy; {year}
      <a href="#" class="hover:text-white/60 transition-colors">{settings?.siteTitle ?? 'Nxtedge Studio'}</a>.
      All rights reserved.
    </p>
    <div class="flex gap-6">
      {#each navLinks as link}
        <a href={link.href} class="text-white/30 text-sm hover:text-white/60 transition-colors">{link.label}</a>
      {/each}
    </div>
  </div>

</footer>
