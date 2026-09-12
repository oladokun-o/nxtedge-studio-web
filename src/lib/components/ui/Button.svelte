<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte';

  interface Props {
    variant?: 'solid' | 'outline' | 'ghost' | 'inverted';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    icon?: string;
    type?: 'button' | 'submit';
    class?: string;
    onclick?: (event: MouseEvent) => void;
    children: Snippet;
  }

  let {
    variant = 'solid',
    size = 'md',
    href,
    target,
    rel,
    disabled = false,
    icon,
    type = 'button',
    class: className = '',
    onclick,
    children
  }: Props = $props();

  const base =
    'inline-flex items-center gap-2 rounded-md font-sans font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-secondary disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<string, string> = {
    solid: 'bg-primary text-white hover:bg-foreground',
    outline: 'border border-border text-foreground hover:border-foreground',
    ghost: 'text-foreground hover:text-secondary',
    inverted: 'bg-white text-primary hover:bg-white/90'
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm'
  };

  let classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
  <a {href} {target} {rel} class={classes} aria-disabled={disabled || undefined} {onclick}>
    {@render children()}
    {#if icon}<Icon name={icon} class="size-4" />{/if}
  </a>
{:else}
  <button {type} {disabled} class={classes} {onclick}>
    {@render children()}
    {#if icon}<Icon name={icon} class="size-4" />{/if}
  </button>
{/if}
