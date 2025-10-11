<script lang="ts">
  import { fade } from "svelte/transition";

  export let title: string;
  export let company: string;
  export let url: string;
  export let dates: string;
  export let location: string;
  export let defaultHidden = false;

  let hidden = defaultHidden;
</script>

<div
  class="mb-8 border-b border-neutral-300 pb-8"
  style="border-bottom-width: 0.5px;"
  class:cursor-pointer={hidden}
  on:click={() => (hidden = false)}
  on:keypress={() => {}}
>
  <h3 class="text-black text-lg leading-tight mb-1">
    <span class="font-medium">{company}</span>
    <span class="px-0.5 text-neutral-500 text-lg">•</span>
    <span class="opacity-90">{title}</span>
  </h3>
  <p class="font-light mb-2">
    <span class="whitespace-nowrap">{dates}</span>
    <span class="px-0.5 text-neutral-500 text-lg">•</span>
    <span class="whitespace-nowrap">{location}</span>
  </p>
  {#if !hidden}
    <div class="opacity-85" in:fade|local>
      <slot />
    </div>
  {/if}
</div>
