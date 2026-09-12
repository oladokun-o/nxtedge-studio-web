<script lang="ts">
  import { primaryNav, ctaLink } from '$lib/config/navigation';
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';

  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  let panel: HTMLElement | undefined = $state();

  function close() {
    open = false;
  }

  $effect(() => {
    if (open) {
      const focusable = panel?.querySelector<HTMLElement>('a, button');
      focusable?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>

{#if open}
  <div class="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <button class="absolute inset-0 bg-primary/60" aria-label="Close menu" onclick={close}></button>
    <div bind:this={panel} class="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-background p-6">
      <div class="flex items-center justify-between">
        <span class="text-h4 font-semibold text-foreground">Menu</span>
        <button
          class="inline-flex size-10 items-center justify-center rounded-md border border-border focus-visible:outline-2 focus-visible:outline-secondary"
          onclick={close}
          aria-label="Close menu"
        >
          <Icon name="x" class="size-5" />
        </button>
      </div>

      <nav class="mt-10 flex flex-1 flex-col gap-1" aria-label="Mobile">
        {#each primaryNav as item (item.label)}
          <a href={item.href} class="border-b border-border py-4 text-h4 text-foreground" onclick={close}>
            {item.label}
          </a>
          {#if item.children}
            <div class="flex flex-col gap-2 pb-4 pl-4">
              {#each item.children as child (child.label)}
                <a href={child.href} class="text-body text-muted hover:text-foreground" onclick={close}>{child.label}</a>
              {/each}
            </div>
          {/if}
        {/each}
      </nav>

      <Button href={ctaLink.href} class="mt-8 w-full justify-center" onclick={close}>{ctaLink.label}</Button>
    </div>
  </div>
{/if}
