<script lang="ts">
  import type { StudioService } from '$lib/types/sanity';

  interface Props {
    services?: StudioService[];
  }
  let { services = [] }: Props = $props();

  const fallback = [
    { _id: 'f1', title: 'Web & App Development', description: 'Web apps, mobile apps, and custom business systems built to perform.', icon: 'code' },
    { _id: 'f2', title: 'Networking & Infrastructure', description: 'CCTV installation, internet setup, and general networking solutions.', icon: 'wifi' },
    { _id: 'f3', title: 'Digital Transformation', description: 'Helping businesses move from manual, messy processes to structured digital systems.', icon: 'transform' },
  ];

  const iconMap: Record<string, string> = {
    code: '../common/imgs/icons/code-solid.svg',
    wifi: '../common/imgs/icons/crown-solid.svg',
    transform: '../common/imgs/icons/chart-line-solid.svg',
    design: '../common/imgs/icons/bezier-curve-solid.svg',
  };

  let displayed = $derived(services.length > 0 ? services : fallback);
</script>

<!-- ==================== Start Services ==================== -->
<section id="services" class="services-ds section-padding">
  <div class="container">
    <div class="sec-head mb-70 d-flex align-items-center">
      <div>
        <h2>Our <span>Services</span></h2>
      </div>
      <div class="ml-auto">
        <a href="#contact" class="butn butn-md butn-bord butn-rounded">
          <div class="d-flex align-items-center">
            <span>See Our Approach</span>
            <span class="icon ml-10">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

    {#each displayed as service (service._id)}
      <div class="item d-flex align-items-center">
        <div class="title">
          <h2>{service.title}</h2>
        </div>
        <div class="text ml-auto">
          <div class="d-flex align-items-center">
            {#if service.description}
              <p>{service.description}</p>
            {/if}
            <div>
              <div class="icon invert">
                {#if service.icon && iconMap[service.icon]}
                  <img src={iconMap[service.icon]} alt="" />
                {:else}
                  <img src="/common/imgs/icons/crown-solid.svg" alt="" />
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}

  </div>
</section>
<!-- ==================== End Services ==================== -->
