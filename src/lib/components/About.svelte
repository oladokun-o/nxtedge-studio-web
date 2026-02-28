<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }
  let { settings = null }: Props = $props();
</script>

<!-- ==================== Start Intro ==================== -->
<div id="about" class="intro-ds">
  <div class="container">
    <div class="layers"></div>
    <div class="box">

      <!-- Top USPs -->
      <div class="comit bord-thin-bottom pb-30 mb-80">
        <div class="row">
          <div class="col-lg-4">
            <div class="item">
              <h6>Top-notch Experts</h6>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item text-center">
              <h6>Dedicated Support 24/7</h6>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item text-right">
              <h6>Flexible Engagement</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- Founders + about body -->
      <div class="founders">
        <div class="row justify-content-between">
          <div class="col-lg-3 md-mb30">
            <div class="imgs d-flex align-items-center">
              <div>
                <div class="img img1">
                  <img src="/assets/imgs/intro/f1.jpg" alt="Founder" />
                </div>
              </div>
            </div>
            <p>Founder of <br /> Nxtedge Studio</p>
          </div>
          <div class="col-lg-7">
            <div class="cont">
              {#if settings?.aboutBody && settings.aboutBody.length > 0}
                <div class="h4-style">
                  <PortableText value={settings.aboutBody} />
                </div>
              {:else}
                <h4>We help businesses elevate their value through custom software development, digital infrastructure, and end-to-end delivery — from raw idea to working product.</h4>
              {/if}
              <a href="#services" class="butn butn-md butn-bg butn-rounded mt-40">
                <div class="d-flex align-items-center">
                  <span>More About Us</span>
                  <span class="icon ml-10">
                    <i class="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Brand / award logos -->
      <div class="brand-ds pt-100 pb-100">
        <div class="row">
          <div class="col-lg-3 col-md-6 item">
            <div class="text-center">
              <div class="img">
                <img src="/assets/imgs/brands/1.svg" alt="" />
              </div>
              <p>4.8/5 Star Rating on <br /> Goodfirms</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 item">
            <div class="text-center">
              <div class="img">
                <img src="/assets/imgs/brands/2.svg" alt="" />
              </div>
              <p>Top 50 Global <br /> Companies on Clutch</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 item">
            <div class="text-center">
              <div class="img">
                <img src="/assets/imgs/brands/3.svg" alt="" />
              </div>
              <p>95% Job Success <br /> on Upwork</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 item">
            <div class="text-center">
              <div class="img">
                <img src="/assets/imgs/brands/4.svg" alt="" />
              </div>
              <p>Top 20 Global Team <br /> on Behance</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<!-- ==================== End Intro ==================== -->
