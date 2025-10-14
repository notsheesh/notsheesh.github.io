<script lang="ts">
  import { page } from "$app/stores";

  import Seo from "$lib/components/Seo.svelte";
  import Post from "./Post.svelte";

  const pieces = import.meta.glob("../../pieces/*.md", {
    eager: true,
  }) as any;

  const images = import.meta.glob("../../pieces/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/pieces\/(.*)\.md$/)?.[1];
  }

  $: piecesByDate = Object.keys(pieces).sort((a, b) => {
    const dateA = pieces[a].date ? new Date(pieces[a].date).getTime() : 0;
    const dateB = pieces[b].date ? new Date(pieces[b].date).getTime() : 0;
    return dateB - dateA;
  });
</script>

<Seo
  title="Shreesh's Pieces"
  description="is a computer engineer, daydreamer, and a confused human."
/>

<section class="layout-md">
  <div class="text-sm md:text-lg mb-4">
    <em> "Who in the world am I? Ah, that's the great puzzle." </em>
    <span class="text-sm text-neutral-500">
      ― Lewis Carroll, Alice in Wonderland</span
    >
  </div>
  <hr />
  <p class="mt-4 mb-4">
    After much searching, I've settled on the idea that you're born as a
    painting, a complete picture, which is then jigsawed into pieces, shuffled
    and scattered. The rest of your life is about rediscovering those pieces --
    in people, places and moments -- and thus, your true self.
  </p>
  <p class="mb-4">
    This idea permits duality and fits squarely with both: the divine
    benevolence, cosmic order or destiny, and the raw and rather unmystical
    control and agency humans have over their lives.
  </p>
  <p class="mb-4">
    You could think of it as an acknowledgments section, but for a puzzle, that
    is, me -- a thank you to the people who raised me, challenged me, and
    believed in me, the experiences that broke me open and allowed me to put
    myself back together and the moments that reminded me who I really am.
  </p>
  <p class="mb-4">
    For who I am and what I have to offer, I owe it all to these pieces.
  </p>
  <hr />
</section>

<div class="pieces flex flex-col">
  {#each piecesByDate as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Post data={pieces[id]} {images} />
      </div>
    </section>
    <hr />
  {/each}
</div>

<style lang="postcss">
</style>
