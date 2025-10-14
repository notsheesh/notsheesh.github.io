<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  type Project = {
    name: string;
    href: string;
    desc?: string;
    aside?: string;
  };

  const featuredProjects: Project[] = [
    // {
    //   name: "Bore",
    //   href: "/work#bore",
    //   desc: "bypass your NAT in just 400 lines of code",
    //   aside: "8500+ stars on GitHub",
    // },
  ];

  const projectCount = featuredProjects.length;
</script>

<Seo
  title="Shreesh Tripathi"
  description="is a computer engineer, daydreamer, and a confused human."
/>

<p
  class="layout-md text-black text-lg md:text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="neutral">is a</span>
  computer engineer<span class="neutral">,</span><br />
  daydreamer<span class="neutral">, and</span><br />
  <span class="neutral">a</span> confused human<span class="neutral">.</span>
</p>

<div class="layout-md text-md md:text-lg space-y-14">
  <div
    class="flex flex-col md:flex-row items-center space-y-10 space-x-0 md:space-y-0 md:space-x-10"
  >
    <div class="w-1/2 md:w-1/3">
      <img
        alt="Photograph of Shreesh Tripathi"
        src="/assets/images/profile.png"
        class="scale-110"
      />
    </div>
    <div class="md:w-2/3 space-y-5">
      <p>Hello, I’m Shreesh and I love computers.</p>
      <p>
        I'm interested in computer architecture and design. I also love
        programming, music, reading, chess, poker, movies, video games, tennis,
        astronomy, motorsports, walking and sleeping.
      </p>

      <p>Hopefully, there will be time for everything.</p>
    </div>
  </div>
  <hr />

  <!-- projects hidden -->
  {#if projectCount > 0}
    <div class="leading-snug space-y-4">
      <p class="pb-2">My work:</p>

      {#each featuredProjects as project}
        <a class="project-pair" href={project.href}>
          <div class="text-black font-medium">
            {project.name}
            <ArrowUpRight size={18} class="inline text-neutral-400" />
          </div>
          <div>
            <p>{project.desc}</p>
            {#if project.aside}
              <aside>{project.aside}</aside>
            {/if}
          </div>
        </a>
      {/each}
    </div>
    <hr />
  {/if}

  <div class="space-y-2 text-md md:text-lg">
    <u>Some things I believe in:</u>
    <ul>
      <li>• Every cycle counts and very little matters.</li>
      <li>• Tools are meant to be mastered not worshipped.</li>
      <li>• Most things are at least simple, if not easy.</li>
      <li>• Laws of physics are the only limit.</li>
      <li>• Everything is a system, and systems resist formalization.</li>
      <li>• How you do anything is how you do everything.</li>
      <li>• Learning comes from doing, not reading or thinking.</li>
      <li>• Everything is made up and there are no prerequisites.</li>
      <li>• In the end, people are everything.</li>
    </ul>
  </div>
  <hr />
</div>

<style lang="postcss">
  .neutral {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
