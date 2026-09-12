<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Carousel from '$lib/components/shared/Carousel.svelte';
  import CaseStudyCard from '$lib/components/case-studies/CaseStudyCard.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';
  import { caseStudyDetails } from '$lib/content/work';
</script>

<SEO
  title="Work | Nxtedge Studio"
  description="Systems we've delivered for clients: sales tracking, microcredit, loan documentation, and corporate websites."
/>

<PageHeader
  eyebrow="Work"
  title="Systems we've delivered"
  description="A sample of what we've built for clients. Full names and results go live as each client signs off on public case studies."
/>

<Section bg="background">
  <Container>
    <Carousel>
      {#each caseStudyDetails as caseStudy (caseStudy.slug)}
        <div class="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
          <a href="/work/{caseStudy.slug}" class="block h-full">
            <CaseStudyCard {caseStudy} />
          </a>
        </div>
      {/each}
    </Carousel>
  </Container>
</Section>

<CTA
  eyebrow="Get Started"
  title="Want results like this?"
  description="Tell us what you're trying to solve. We'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
