<script lang="ts">
  interface Crumb {
    label: string;
    href?: string;
  }

  interface Props {
    items: Crumb[];
  }

  let { items }: Props = $props();
</script>

<nav aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center gap-2 text-sm text-muted">
    {#each items as item, i (item.label)}
      <li class="flex items-center gap-2">
        {#if item.href}
          <a href={item.href} class="hover:text-foreground">{item.label}</a>
        {:else}
          <span aria-current="page" class="text-foreground">{item.label}</span>
        {/if}
        {#if i < items.length - 1}
          <span aria-hidden="true">/</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
