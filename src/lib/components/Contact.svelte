<script lang="ts">
  import type { StudioSettings } from '$lib/types/sanity';

  interface Props {
    settings?: StudioSettings | null;
  }
  let { settings = null }: Props = $props();
</script>

<!-- ==================== Start Footer / Contact section ==================== -->
<footer id="contact" class="footer-ds bord-thin-top-light">
  <div class="container section-padding">
    <div class="row justify-content-between">

      <!-- Subscribe / newsletter column -->
      <div class="col-lg-4">
        <div class="subscribe md-mb50">
          <h6>Be the first to get the latest news <br /> about trends, inspiration &amp; more</h6>
          <div class="form-group">
            <label for="email_subscribe">Email Address</label>
            <input id="email_subscribe" type="email" placeholder="Enter your email address" name="email_subscribe" />
            <button type="submit" class="icon invert">
              <img src="/common/imgs/icons/paper-plane.svg" alt="" />
            </button>
          </div>
          <span>By subscribing, you accept our <a href="#0">Privacy Policy</a></span>
        </div>
      </div>

      <!-- Contact info columns -->
      <div class="col-lg-6">
        <div class="contact-info">
          <div class="row lg-marg">
            <div class="col-md-6">
              <div class="item mb-60">
                <h6>Work Inquiry</h6>
                {#if settings?.email}
                  <p><a href="mailto:{settings.email}">{settings.email}</a></p>
                {:else}
                  <p>contact@nxtedgestudio.com</p>
                {/if}
                {#if settings?.phone}
                  <p>{settings.phone}</p>
                {/if}
                {#if settings?.calendarLink}
                  <p><a href={settings.calendarLink} target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a></p>
                {/if}
              </div>
            </div>
            <div class="col-md-6">
              <div class="item mb-60">
                <h6>Follow Us</h6>
                {#if settings?.linkedIn}
                  <p><a href={settings.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                {/if}
                {#if settings?.instagram}
                  <p><a href={settings.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                {/if}
                {#if !settings?.linkedIn && !settings?.instagram}
                  <p>LinkedIn</p>
                  <p>Instagram</p>
                {/if}
              </div>
            </div>
            <div class="col-md-6">
              <div class="item sm-mb60">
                <h6>Nigeria</h6>
                <p>Full-service digital solutions agency</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="item">
                <h6>Links</h6>
                <p><a href="#0">Terms &amp; Conditions</a></p>
                <p><a href="#0">Privacy Policy</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Sub-footer -->
  <div class="sub-footer bord-thin-top-light pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="copy d-flex align-items-center md-mb30">
            <div>
              <div class="logo">
                <img src="/assets/imgs/Logo-f.svg" alt="Nxtedge Studio" />
              </div>
            </div>
            <div class="ml-50">
              <p>&copy; {new Date().getFullYear()} <a href="#0">{settings?.siteTitle ?? 'Nxtedge Studio'} Agency</a>. <br /> All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-end">
          <div class="links sub-color d-flex justify-content-between">
            <a href="#" class="active">Home</a>
            <a href="#work">Works</a>
            <a href="#about">Studio</a>
            <a href="#services">Services</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- ==================== End Footer ==================== -->
