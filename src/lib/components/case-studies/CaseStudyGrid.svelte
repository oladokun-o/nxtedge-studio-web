<script lang="ts">
  import type { CaseStudyTeaser } from '$lib/types/content';
  import CaseStudyCard from './CaseStudyCard.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    caseStudies: CaseStudyTeaser[];
  }

  let { caseStudies }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
  {#each caseStudies as caseStudy, i (caseStudy.title)}
    <div use:scrollReveal={{ delay: i * 0.05 }}>
      <CaseStudyCard {caseStudy} />
    </div>
  {/each}
</div>
