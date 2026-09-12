<script lang="ts">
  import type { CaseStudyTeaser } from '$lib/types/content';
  import Card from '../ui/Card.svelte';
  import Badge from '../ui/Badge.svelte';
  import Icon from '../ui/Icon.svelte';

  interface Props {
    caseStudy: CaseStudyTeaser;
  }

  let { caseStudy }: Props = $props();
</script>

<Card variant="elevated" class="h-full">
  <div class="flex items-start justify-between">
    <span class="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">
      <Icon name={caseStudy.icon} class="size-5" />
    </span>
    <Badge tone="neutral">{caseStudy.industry}</Badge>
  </div>
  <h3 class="mt-5 text-h4 font-bold text-foreground">{caseStudy.title}</h3>
  <p class="mt-3 text-body text-muted">{caseStudy.summary}</p>
  <ul class="mt-5 flex flex-wrap gap-2">
    {#each caseStudy.tags as tag (tag)}
      <li class="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{tag}</li>
    {/each}
  </ul>
</Card>
