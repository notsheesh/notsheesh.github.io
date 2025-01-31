<script lang="ts">
  import { page } from "$app/stores";

  import Seo from "$lib/components/Seo.svelte";
  import Post from "./Post.svelte";

  const stream = import.meta.glob("../../stream/*.md", {
    eager: true,
  }) as any;

  const images = import.meta.glob("../../stream/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/stream\/(.*)\.md$/)?.[1];
  }

  $: streamByDate = Object.keys(stream).sort(
    (a, b) => stream[b].date - stream[a].date
  );
</script>

<Seo title="Shreesh Tripathi – Stream" description="Thinking out loud" />

<section class="layout-md">
  <p class="text-sm md:text-lg mb-4">
    <em
      >Thinking about and building computers. This page contains my devlog and
      thought stream.</em
    >
  </p>
  <hr />
</section>

<div class="stream flex flex-col">
  {#each streamByDate as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Post data={stream[id]} {images} />
      </div>
    </section>
    <hr />
  {/each}
</div>

<style lang="postcss">
</style>
