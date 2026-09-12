<script lang="ts">
  interface Partner {
    name: string;
    logo?: string;
  }

  interface Props {
    title?: string;
    partners: Partner[];
  }

  let { title = 'Trusted by', partners }: Props = $props();
</script>

{#if partners.length > 0}
  <div>
    <p class="text-center font-mono text-xs uppercase tracking-wide text-muted">{title}</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
      {#each partners as partner (partner.name)}
        {#if partner.logo}
          <img src={partner.logo} alt={partner.name} class="h-8 w-auto grayscale" />
        {:else}
          <span class="text-body font-medium text-muted">{partner.name}</span>
        {/if}
      {/each}
    </div>
  </div>
{/if}
