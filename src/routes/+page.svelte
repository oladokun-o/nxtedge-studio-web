<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Services from '$lib/components/Services.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Contact from '$lib/components/Contact.svelte';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  const defaultTitle = 'Nxtedge Studio — Digital Solutions Agency';
  const defaultDescription = 'Full-service digital solutions agency. Web & app development, networking, and digital transformation.';
</script>

<SEO
  title={data.settings?.metaTitle ?? defaultTitle}
  description={data.settings?.metaDescription ?? defaultDescription}
  logo={data.settings?.logo}
  ogImage={data.settings?.ogImage}
/>

<!-- ==================== Start Loading ==================== -->
<div class="loader-wrap">
  <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
  </svg>
  <div class="loader-wrap-heading">
    <div class="load-text">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </div>
  </div>
</div>
<!-- ==================== End Loading ==================== -->

<div class="cursor"></div>

<!-- ==================== Start progress-scroll-button ==================== -->
<div class="progress-wrap cursor-pointer">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>
<!-- ==================== End progress-scroll-button ==================== -->

<!-- Navbar (includes hamenu off-canvas) -->
<Navbar settings={data.settings} />

<div id="smooth-wrapper">
  <div id="smooth-content">
    <main>

      <!-- Hero -->
      <Hero settings={data.settings} />

      <!-- ==================== Start box light ==================== -->
      <section class="box-light section-padding pt-0">

        <!-- About / Intro -->
        <About settings={data.settings} />

        <!-- Portfolio / Works -->
        <Portfolio projects={data.projects ?? []} />

      </section>
      <!-- ==================== End box light ==================== -->

      <!-- Services -->
      <Services services={data.services ?? []} />

      <!-- ==================== Start dark box ==================== -->
      <section class="box-dark">
        <div class="container box">
          <div class="layers"></div>

          <!-- Testimonials -->
          <Testimonials />

        </div>
      </section>
      <!-- ==================== End dark box ==================== -->

    </main>

    <!-- Footer / Contact -->
    <Contact settings={data.settings} />

  </div>
</div>
