<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string;
  }

  let { children, class: className = '' }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-6 {className}">
  {@render children()}
</div>
