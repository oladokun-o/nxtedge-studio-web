<script lang="ts">
  import SEO from '$lib/components/shared/SEO.svelte';
  import PageHeader from '$lib/components/layout/PageHeader.svelte';
  import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import SectionHeader from '$lib/components/marketing/SectionHeader.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import SolutionCard from '$lib/components/solutions/SolutionCard.svelte';
  import CaseStudyCard from '$lib/components/case-studies/CaseStudyCard.svelte';
  import CTA from '$lib/components/marketing/CTA.svelte';

  import { solutionDetails } from '$lib/content/solutions';
  import { caseStudyDetails } from '$lib/content/work';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  let industry = $derived(data.industry);
  let relatedSolutions = $derived(solutionDetails.filter((s) => industry.relatedSolutionSlugs.includes(s.slug)));
  let relatedCaseStudies = $derived(caseStudyDetails.filter((c) => industry.relatedCaseStudySlugs.includes(c.slug)));
</script>

<SEO title="{industry.title} — Nxtedge Studio" description={industry.description} />

<PageHeader eyebrow="Industries" title={industry.title} description={industry.description}>
  {#snippet breadcrumbs()}
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: industry.title }]} />
  {/snippet}
</PageHeader>

<Section bg="background">
  <Container>
    <SectionHeader eyebrow="The Challenges" title="What businesses in this space run into" />
    <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      {#each industry.challenges as challenge (challenge)}
        <li class="flex items-start gap-3 rounded-lg border border-border p-5">
          <span class="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
            <Icon name="check" class="size-4" />
          </span>
          <p class="text-body text-foreground/80">{challenge}</p>
        </li>
      {/each}
    </ul>
  </Container>
</Section>

<Section bg="surface">
  <Container>
    <div class="max-w-3xl">
      <h2 class="text-h3 font-bold text-foreground">How we solve them</h2>
      <p class="mt-4 text-body-lg text-muted">{industry.howWeSolve}</p>
    </div>
  </Container>
</Section>

{#if relatedSolutions.length > 0}
  <Section bg="background">
    <Container>
      <SectionHeader eyebrow="Related Solutions" title="What we'd bring to this" />
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each relatedSolutions as solution (solution.slug)}
          <SolutionCard {solution} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}

{#if relatedCaseStudies.length > 0}
  <Section bg="surface">
    <Container>
      <SectionHeader eyebrow="Related Work" title="Case studies in this industry" />
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {#each relatedCaseStudies as caseStudy (caseStudy.slug)}
          <a href="/work/{caseStudy.slug}" class="block h-full">
            <CaseStudyCard {caseStudy} />
          </a>
        {/each}
      </div>
    </Container>
  </Section>
{/if}

<CTA
  eyebrow="Get Started"
  title="Building for {industry.title}?"
  description="Tell us what you're trying to solve — we'll help you turn it into a structured, working system."
  primaryCta={{ label: 'Start a Project', href: '/#contact' }}
/>
