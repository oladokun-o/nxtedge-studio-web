<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { StudioProject } from '$lib/types/sanity';

  interface Props {
    projects?: StudioProject[];
  }
  let { projects = [] }: Props = $props();
</script>

<!-- ==================== Start Portfolio / Works ==================== -->
<div id="work" class="works-ds">
  <div class="container pt-100 bord-thin-top">
    <div class="sec-head mb-70 d-flex align-items-center">
      <div>
        <h2>Featured <span>Works</span></h2>
      </div>
      <div class="ml-auto">
        <a href="#contact" class="butn butn-md butn-bord butn-rounded">
          <div class="d-flex align-items-center">
            <span>See All Projects</span>
            <span class="icon ml-10">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

    <div class="work-box">
      {#if projects.length > 0}
        <div class="swiper work-swiper swiper-container">
          <div class="swiper-wrapper">
            {#each projects as project (project._id)}
              <div class="swiper-slide">
                <div class="item">
                  <div class="img">
                    {#if project.coverImage}
                      <img
                        src={urlFor(project.coverImage).width(900).height(600).url()}
                        loading="lazy"
                        alt={project.title}
                      />
                    {:else}
                      <img src="/assets/imgs/works/1.jpg" alt={project.title} />
                    {/if}
                  </div>
                  <div class="cont">
                    {#if project.liveUrl}
                      <h4><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.title}</a></h4>
                    {:else}
                      <h4><a href="#0">{project.title}</a></h4>
                    {/if}
                    <span class="sub-color">
                      {project.client ?? ''}{project.client && project.tags?.length ? ', ' : ''}{project.tags?.slice(0, 2).join(', ') ?? ''}
                    </span>
                  </div>
                </div>
              </div>
            {/each}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      {:else}
        <!-- Placeholder slides when no Sanity data yet -->
        <div class="swiper work-swiper swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="item">
                <div class="img"><img src="/assets/imgs/works/1.jpg" alt="Project" /></div>
                <div class="cont">
                  <h4><a href="#0">Coming Soon</a></h4>
                  <span class="sub-color">Projects in progress</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      {/if}
    </div>
  </div>
</div>
<!-- ==================== End Portfolio / Works ==================== -->
