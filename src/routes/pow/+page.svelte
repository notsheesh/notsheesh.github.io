<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Shreesh's Proof of Work"
  description="is a hardware engineer, programmer, and a confused human."
/>

<section class="layout-md py-6">
  <h2 class="heading2">Proof of Work</h2>

  <Workplace
    title="Fullchip Verif Engineer II"
    company="NVIDIA"
    dates="January 2026 – Present"
    location="Santa Clara, CA"
  >
    <!-- <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> -->
  </Workplace>

  <Workplace
    title="Fullchip Verif Intern"
    company="NVIDIA"
    dates="May 2025 – August 2025"
    location="Santa Clara, CA"
  >
    <li>
      Simulation speed ups for <a
        href="https://semianalysis.com/2025/03/19/nvidia-gtc-2025-built-for-reasoning-vera-rubin-kyber-cpo-dynamo-inference-jensen-math-feynman/"
        class="link">Rubin</a
      > with Kelvin Ng's group
    </li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="Carnegie Mellon University"
    dates="August 2025 – Present"
    location="Pittsburgh, PA"
  >
    <li>Advisors: Prof. John Paul Shen, Prof. Shawn Blanton</li>
    <li>AI/ML Workloads on Heterogeneous Coupled Architectures</li>
  </Workplace>

  <Workplace
    title="Teaching Assistant"
    company="Carnegie Mellon University"
    dates="August 2025 – Present"
    location="Pittsburgh, PA"
  >
    <li>Course: 18740 Modern Computer Architecture</li>
    <li>
      Instructors: Prof. John Paul Shen (CMU, Intel, Nokia), Scott Mionis (CMU,
      Apple)
    </li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="Carnegie Mellon University"
    dates="March 2024 – August 2024"
    location="Pittsburgh, PA"
  >
    <li>Advisors: Prof. James Bain, Prof. Saugata Ghose</li>
    <li>Simulations for Compute in Memory</li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="San Jose State University"
    dates="September 2022 – March 2024"
    location="San Jose, CA"
  >
    <li>
      Reinforcement Learning Methods for Assistive and Rehabilitation Robotic
      Systems
    </li>
    <li>
      Survey published in <a
        href="https://ieeexplore.ieee.org/document/10966209"
        class="link">IEEE Transactions on Systems, Man, and Cybernetics</a
      >
    </li>
    <li>Advisors: Prof. Mojtaba Sharifi, Prof. Mahdi Tavakoli</li>
  </Workplace>

  <Workplace
    title="Product Management Intern"
    company="LeapScholar"
    dates="April 2022 – September 2022"
    location="Bengaluru, India"
  >
    <li>New bets for top of the funnel</li>
    <li>
      Reported to the Chief of Staff, Vijay Dhingra and Founder, Arnav Kumar
    </li>
  </Workplace>

  <Workplace
    title="Engineering Intern"
    company="JLL Technologies"
    dates="January 2022 – May 2022"
    location="Bengaluru, India"
  />

  <Workplace
    title="Research Assistant"
    company="University of Alberta"
    dates="May 2021 – August 2021"
    location="Alberta, Canada"
  >
    <li>Part of Telerobotic and Biorobotic Systems Group</li>
    <li>Supported by Mitacs through the Globalink Research program</li>
    <li>Advisors: Prof. Mojtaba Sharifi, Prof. Mahdi Tavakoli</li>
  </Workplace>

  <Workplace
    title="Open Source Contributor"
    company="Virtual Labs, IIIT Hyderabad"
    dates="May 2020 – August 2020"
    location="Hyderabad, India"
  >
    <!-- <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> -->
  </Workplace>

  <Workplace
    title="Sensing Engineer"
    company="Collegiate AI Robotics Team, Project MANAS"
    dates="August 2018 – July 2019"
    location="Manipal, India"
  >
    <li>
      27th Intelligent Ground Vehicle Competition (2019):
      <a href="https://igvc.secs.oakland.edu/design/2019/6.pdf" class="link"
        >Design Report</a
      >
      |
      <a href="http://www.igvc.org/results/r2019.pdf" class="link">Results</a>
    </li>
  </Workplace>
</section>

<section class="layout-md py-6">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Carnegie Mellon University</h3>
      <div class="text-neutral-500 mb-0.5">Jan 2024 — Dec 2025</div>
    </div>
    <p class="byline">Master of Science, Electrical and Computer Engineering</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Manipal Institute of Technology</h3>
      <div class="text-neutral-500 mb-0.5">Aug 2018 — May 2022</div>
    </div>
    <p class="byline">
      Bachelor of Technology, Electronics, Communication, Computer Engineering
    </p>
  </div>
</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
