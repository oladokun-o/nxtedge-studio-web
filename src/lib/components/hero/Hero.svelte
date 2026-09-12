<script lang="ts">
  import type { StudioSettings } from "$lib/types/sanity";
  import type { Stat } from "$lib/types/content";
  import Button from "../ui/Button.svelte";
  import Icon from "../ui/Icon.svelte";
  import Container from "../layout/Container.svelte";
  import Section from "../layout/Section.svelte";
  import LogoMarquee from "../shared/LogoMarquee.svelte";
  import { scrollReveal } from "$lib/actions/scrollReveal";

  interface Props {
    settings?: StudioSettings | null;
    stats: Stat[];
  }

  let { settings = null, stats }: Props = $props();

  // Real capability list (mirrors lib/content/solutions.ts's five delivery
  // pillars) — deliberately not a product pitch. The hero's right side used to
  // spotlight Nxtflo (still in development), which overstated where that
  // product actually is; this instead shows what's already true today.
  const capabilities = [
    "Web Development",
    "Mobile Applications",
    "Business Systems",
    "AI Solutions",
    "Cloud & Infrastructure",
  ];

  /*
    TEMPORARY PLACEHOLDER DATA — user explicitly requested fake data here to
    fill the layout, to be swapped for real client-approved assets later.
    Names are deliberately the kind of fictional placeholder names used in
    software mockups (Acme/Globex/Initech/Umbrella/Northwind) — not
    plausible-sounding real company names — so this can never be mistaken for
    an actual client if it ships before being replaced.
  */
  const placeholderClients = [
    "Acme Co.",
    "Globex",
    "Initech",
    "Umbrella Group",
    "Northwind Traders",
  ];
</script>

<Section padding="lg" reveal={false} class="relative overflow-hidden pt-15! pb-0!">
  <!--
    Subtle dot-grid texture, per assets/designs/ (Web Hero's hero background) —
    pure CSS radial-gradient, no image asset needed. Faded via a mask so it
    reads as texture, not a harsh grid, and fully decorative (no content risk).
    Replaces the previous blurred color blobs for a closer structural match.
  -->
  <div
    class="pointer-events-none absolute inset-0 -z-10 opacity-25 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
    style="background-image: radial-gradient(var(--color-muted) 1.5px, transparent 1.5px); background-size: 28px 28px;"
  ></div>
  <Container>
    <div class="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
      <div use:scrollReveal>
        <h1
          class="mt-5 font-display text-h1 font-bold leading-[1.05] text-foreground"
        >
          {#if settings?.heroHeading}
            {settings.heroHeading}
          {:else}
            We build technology that helps businesses <span
              class="bg-accent/50 px-2">grow</span
            >.
          {/if}
        </h1>
        <p class="mt-6 max-w-xl text-body-lg text-muted">
          {settings?.heroBio ??
            "Nxtedge Studio designs, engineers, and scales digital products, business systems, and AI-powered solutions for businesses that need more than a website."}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <Button href="#contact" icon="arrow-up-right">Start a project</Button>
          <Button href="#work" variant="outline">See Our Work</Button>
        </div>

        <!--
          "Accredited by" row, placed in the hero itself per Web Hero's own
          placement (assets/designs/). Real, checkable marks in their own
          brand colors (Simple Icons, CC0) — tech-stack proof today.
          Clutch: real profile confirmed to exist, link not yet provided —
          shown as a text wordmark placeholder (href="#") rather than left
          out, per instruction; swap for the real logo + link once provided.
        -->
        <div class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
          <span class="text-xs uppercase tracking-wide text-muted font-medium"
            >Accredited by</span
          >
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="#" aria-label="Clutch" class="block">
              <svg
                class="h-4 w-auto"
                viewBox="0 0 1758 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M457.219 0H537.219V500H457.219V0ZM817.219 340.5C817.219 417.02 752.879 423.12 733.739 423.12C685.919 423.12 677.219 378.36 677.219 351.36V160H597.219V350.96C597.219 398.36 612.099 437.48 638.179 463.56C661.219 486.62 695.739 499.22 733.139 499.22C759.659 499.22 797.219 490.96 817.219 472.7V500H897.219V160H817.219V340.5ZM1057.22 40H977.219V160H917.219V240H977.219V500H1057.22V240H1117.22V160H1057.22V40ZM1369.16 398.34C1351.74 414 1328.74 422.68 1303.5 422.68C1247.86 422.68 1207 381.82 1207 325.72C1207 269.62 1246.56 230.48 1303.5 230.48C1328.3 230.48 1351.74 238.74 1369.6 254.4L1381.74 264.84L1435.68 210.92L1422.18 198.74C1390.44 170.08 1348.3 154 1303.48 154C1203.48 154 1130.86 226.16 1130.86 325.3C1130.86 424.02 1205.22 498.76 1303.48 498.76C1349.14 498.76 1391.72 482.68 1423.06 453.56L1436.1 441.38L1381.32 387.5L1369.16 398.34ZM1721.22 189.64C1698.18 166.6 1671.18 154 1633.78 154C1607.26 154 1577.22 162.26 1557.22 180.5V0H1477.22V500H1557.22V312.7C1557.22 236.18 1611.58 230.1 1630.72 230.1C1678.54 230.1 1677.22 274.88 1677.22 301.84V500H1757.22V302.26C1757.22 254.86 1747.32 215.74 1721.22 189.64Z"
                  fill="#0B1C17"
                />
                <path
                  d="M1300.86 268.758C1316.2 268.758 1330.91 274.852 1341.76 285.699C1352.61 296.546 1358.7 311.258 1358.7 326.598C1358.7 341.938 1352.61 356.65 1341.76 367.497C1330.91 378.344 1316.2 384.438 1300.86 384.438C1285.52 384.438 1270.81 378.344 1259.96 367.497C1249.11 356.65 1243.02 341.938 1243.02 326.598C1243.02 311.258 1249.11 296.546 1259.96 285.699C1270.81 274.852 1285.52 268.758 1300.86 268.758Z"
                  fill="#FF3D2E"
                />
                <path
                  d="M345.22 374.42C314.8 405.72 273.48 422.68 230 422.68C140.88 422.68 76.08 352.68 76.08 256.6C76.08 160.08 140.88 90.08 230 90.08C273.06 90.08 313.92 107.02 344.8 137.9L356.96 150.08L410.44 96.6L398.7 84.42C354.36 38.76 294.36 14 230 14C98.7 14 0 118.34 0 257.02C0 395.28 99.14 499.2 230 499.2C294.8 499.2 354.8 474 399.14 428.34L410.88 416.16L357.84 361.82L345.22 374.42Z"
                  fill="#0B1C17"
                />
              </svg>
            </a>
            <Icon name="svelte" class="size-5 text-[#FF3E00]" />
            <Icon name="tailwind" class="size-5 text-[#06B6D4]" />
            <Icon name="sanity" class="size-5 text-[#0D0E12]" />
            <Icon name="claude" class="size-5 text-[#D97757]" />
            <Icon name="openai" class="size-5 text-[#000000]" />
            <Icon name="gemini" class="size-5 text-[#8E75B2]" />
            <Icon name="gsap" class="size-5 text-[#0AE448]" />
            <Icon name="netlify" class="size-5 text-[#00C7B7]" />
          </div>
        </div>
      </div>

      <div class="relative hidden lg:block">
        <div
          use:scrollReveal={{ delay: 0.15 }}
          class="rounded-2xl border border-border bg-background p-6 shadow-lg"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs uppercase tracking-wide text-muted"
              >Full-Service Delivery</span
            >
            <span
              class="inline-flex size-8 items-center justify-center rounded-md bg-accent/50 text-black"
            >
              <Icon name="shield" class="size-4" />
            </span>
          </div>
          <p class="mt-4 text-h4 font-medium text-foreground">
            Everything under one team
          </p>
          <ul class="mt-6 flex flex-col gap-3">
            {#each capabilities as capability (capability)}
              <li
                class="flex items-center gap-3 rounded-md bg-surface px-4 py-3 text-sm text-foreground/80"
              >
                <span
                  class="inline-flex size-5 items-center justify-center rounded-full bg-accent/50 text-black"
                >
                  <Icon name="check" class="size-3" />
                </span>
                {capability}
              </li>
            {/each}
          </ul>
        </div>

        <div
          use:scrollReveal={{ delay: 0.3 }}
          class="absolute -bottom-3 -right-6 flex items-center gap-6 rounded-xl border border-border bg-primary px-6 py-4 text-white shadow-lg"
        >
          {#each stats as stat (stat.label)}
            <div>
              <p class="font-display text-h4 font-bold text-white">
                {stat.value}
              </p>
              <p class="text-xs text-white/60">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</Section>

<Section class="py-0! px-0!">
  <Container class="px-0!">
    <!--
      TEMPORARY PLACEHOLDER — "Trusted by" client-logo strip. Fictional
      software-mockup company names (Acme/Globex/Initech/Umbrella/Northwind),
      not plausible real-sounding businesses, so this can't be mistaken for an
      actual client relationship if it ships before being swapped for real
      client-approved logos. Auto-playing marquee (Embla + auto-scroll plugin)
      per the reference; slides duplicated so the loop reads as seamless.
    -->
    <div class="mt-16 flex items-center gap-8 border-y border-border py-10 px-6 md:px-10">
      <span
        class="shrink-0 text-xs tracking-wide text-muted"
        >Trusted by teams at</span
      >
      <div class="min-w-0 flex-1">
        <LogoMarquee>
          {#each [...placeholderClients, ...placeholderClients] as client, i (i)}
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a
              href="#"
              class="mr-10 shrink-0 font-display text-lg font-medium whitespace-nowrap text-foreground/40 transition-colors hover:text-foreground/70"
            >
              {client}
            </a>
          {/each}
        </LogoMarquee>
      </div>
    </div>
  </Container>
</Section>
