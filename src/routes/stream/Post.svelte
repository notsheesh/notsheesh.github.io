<script lang="ts">
  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/utils";

  type Post = {
    title: string;
    date: string;
    content: string;
    image: string;
    subimages?: string[];
  };

  export let data: Post;
  export let images: Record<string, { default: string }>;

  function isUrl(path: string): boolean {
    try {
      new URL(path);
      return true;
    } catch {
      return false;
    }
  }
</script>

<!-- Title -->
<h3 class="text-black text-lg md:text-xl font-semibold mb-2">
  {#if data.title}
    <span class="mr-1">{data.title}</span>
  {/if}
  {#if data.date}
    <small class="whitespace-nowrap text-neutral-500 text-base font-normal">
      {formatTime("%d %B %Y", data.date)}
    </small>
  {/if}
</h3>

<!-- Description and image -->
<div class="">
  <!-- Image -->
  {#if data.image}
    <div class="col-span-3 md:col-span-1">
      <a rel="external" href={images[`../../posts/${data.image}`]?.default}>
        <img
          src={isUrl(data.image)
            ? data.image
            : images[`../../posts/${data.image}`]?.default}
          alt="{data.title} preview image"
          class:url-image={isUrl(data.image)}
        />
      </a>
    </div>
  {/if}

  <!-- Sub-images -->  
  {#if data.subimages}
    <div class="grid grid-cols-3 gap-4 mb-10">
      {#each data.subimages as image}
        <div class="col-span-full md:col-span-1">
          <a rel="external" href={images[`../../posts/${image}`]?.default}>
            <img
              src={isUrl(image)
                ? image
                : images[`../../posts/${data.image}`]?.default}
              alt="{data.title} subimage"
            />
          </a>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Description -->
  <div class="col-span-3 md:col-span-2">
    <Markdown source={data.content} />
  </div>
</div>

<style lang="postcss">
  .url-image {
    margin: 1rem auto;
  }
</style>
