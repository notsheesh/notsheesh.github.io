<script lang="ts">
  import { page } from "$app/stores";

  import Seo from "$lib/components/Seo.svelte";
  import Post from "./Post.svelte";

  const notes = import.meta.glob("../../notes/*.md", {
    eager: true,
  }) as any;

  const images = import.meta.glob("../../notes/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/notes\/(.*)\.md$/)?.[1];
  }

  $: notesByDate = Object.keys(notes).sort((a, b) => {
    const dateA = notes[a].date ? new Date(notes[a].date) : new Date(0);
    const dateB = notes[b].date ? new Date(notes[b].date) : new Date(0);
    return dateB - dateA;
  });
</script>

<Seo
  title="Shreesh's Notes"
  description="is a computer engineer, programmer, and a confused human."
/>

<section class="layout-md">
  <p class="text-sm md:text-lg mb-4">
    <em>
      Things I want to remember ∩ Things I don’t mind the internet knowing
    </em>
  </p>
  <hr />
</section>

<div class="notes flex flex-col">
  {#each notesByDate as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Post data={notes[id]} {images} />
      </div>
    </section>
    <hr />
  {/each}
</div>

<style lang="postcss">
</style>
