<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }
  let { settings = null }: Props = $props();

  const navLinks = [
    { label: 'Home',     href: '#' },
    { label: 'Studio',   href: '#about' },
    { label: 'Works',    href: '#work' },
    { label: 'Services', href: '#services' },
  ];
</script>

<!-- ==================== Start Navbar ==================== -->
<nav class="navbar navbar-expand-lg">
  <div class="container">

    <!-- Logo -->
    <a class="logo" href="/">
      {#if settings?.logo}
        <img src={urlFor(settings.logo).height(40).url()} alt={settings.siteTitle ?? 'Nxtedge Studio'} />
      {:else}
        <img src="/assets/imgs/Logo-light.svg" alt="Nxtedge Studio" />
      {/if}
    </a>

    <!-- Nav links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        {#each navLinks as link}
          <li class="nav-item">
            <a class="nav-link" href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="topnav d-flex align-items-center">
      <a href={settings?.calendarLink ?? (settings?.email ? `mailto:${settings.email}` : '#contact')}
        target={settings?.calendarLink ? '_blank' : undefined}
        rel={settings?.calendarLink ? 'noopener noreferrer' : undefined}
        class="butn butn-rounded">
        <div class="d-flex align-items-center">
          <span>Start Project</span>
          <span class="icon ml-10">
            <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
          </span>
        </div>
      </a>
      <div class="menu-icon cursor-pointer">
        <span class="icon ti-align-right"></span>
      </div>
    </div>
  </div>
</nav>

<!-- Off-canvas menu -->
<div class="hamenu">
  <div class="close-menu cursor-pointer ti-close"></div>
  <div class="container-fluid rest d-flex">
    <div class="menu-links">
      <ul class="main-menu rest">
        {#each navLinks as link}
          <li>
            <div class="o-hidden">
              <a href={link.href} class="link">
                <span class="fill-text" data-text={link.label}>{link.label}</span>
              </a>
            </div>
          </li>
        {/each}
        <li>
          <div class="o-hidden">
            <a href="#contact" class="link">
              <span class="fill-text" data-text="Contact Us">Contact Us</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="cont-info valign">
      <div class="text-center full-width">
        <div class="logo">
          {#if settings?.logo}
            <img src={urlFor(settings.logo).height(40).url()} alt={settings.siteTitle ?? 'Nxtedge Studio'} />
          {:else}
            <img src="/common/imgs/Logo-light.svg" alt="Nxtedge Studio" />
          {/if}
        </div>
        <div class="social-icon mt-40">
          {#if settings?.instagram}
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
          {/if}
          {#if settings?.linkedIn}
            <a href={settings.linkedIn} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>
          {/if}
          {#if !settings?.instagram && !settings?.linkedIn}
            <a href="#"><i class="fab fa-x-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          {/if}
        </div>
        {#if settings?.email}
          <div class="item mt-30">
            <h5><a href="mailto:{settings.email}">{settings.email}</a></h5>
          </div>
        {/if}
        {#if settings?.phone}
          <div class="item mt-10">
            <h5 class="underline"><a href="tel:{settings.phone}">{settings.phone}</a></h5>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
<!-- ==================== End Navbar ==================== -->
