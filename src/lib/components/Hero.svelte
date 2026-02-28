<script lang="ts">
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }
  let { settings = null }: Props = $props();
</script>

<!-- ==================== Start Header ==================== -->
<header class="header-ds">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-5">
        <div class="caption md-mb30">
          {#if settings?.heroHeading}
            <h1>{@html settings.heroHeading}</h1>
          {:else}
            <h1>Bigger, <br /> Bolder and <br /> <span class="play-font">Better</span></h1>
          {/if}
        </div>
      </div>
      <div class="col-lg-5">
        <div class="text md-mb50">
          {#if settings?.heroBio}
            <p>{settings.heroBio}</p>
          {:else}
            <p>Based in Nigeria, we're a digital products design &amp; development studio passionate about creating high-quality digital experiences.</p>
          {/if}
          <a href="#about" class="butn butn-md butn-bord butn-rounded mt-40">
            <div class="d-flex align-items-center">
              <span>Learn More</span>
              <span class="icon ml-10">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-lg-5 d-flex align-items-end">
        <div class="social-icon md-hide">
          {#if settings?.instagram}
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
          {/if}
          {#if settings?.linkedIn}
            <a href={settings.linkedIn} target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          {/if}
          {#if !settings?.instagram && !settings?.linkedIn}
            <a href="#0"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#0"><i class="fa-brands fa-instagram"></i></a>
          {/if}
        </div>
      </div>
      <div class="col-lg-5">
        <div class="numb d-flex">
          <div>
            <h2>98%</h2>
            <span>Clients satisfied and <br /> repeating</span>
          </div>
          <div class="ml-auto">
            <div>
              <h2>25+</h2>
              <span>Projects completed <br /> across Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- ==================== End Header ==================== -->
