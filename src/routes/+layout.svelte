<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import Navbar from '$lib/components/navigation/Navbar.svelte';
  import Footer from '$lib/components/navigation/Footer.svelte';
  import type { LayoutData } from './$types';

  interface Props {
    children: Snippet;
    data: LayoutData;
  }
  let { children, data }: Props = $props();
</script>

<a href="#main-content" class="skip-link">Skip to content</a>

<Navbar settings={data.settings} />

<main id="main-content">
  {@render children()}
</main>

<Footer settings={data.settings} />
