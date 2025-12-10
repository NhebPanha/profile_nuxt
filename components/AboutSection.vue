<script setup lang="ts">
import { ABOUT_SECTION } from "@/data/constants";
</script>

<template>
  <section class="" id="about">
    <div
      class="
      flex 
      flex-col 
      gap-2 
      text-center 
      relative 
      before:absolute 
      before:top-0 
      before:left-0 
      before:w-2/3 
      before:h-1.5 
      before:bg-green-border-green-600 
      after:absolute 
      after:bottom-0 
      after:right-0 
      after:w-2/3 
      after:h-1.5 
      after:bg-green-border-green-600 
      py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-primary">about</span> me.
      </h3>
    </div>
    <div class="md:grid md:grid-cols-1 gap-8 items-center py-8">
      <!-- <img
        v-motion-fade-visible-once
        loading="lazy"
        class="w-full h-auto object-cover"
        alt="about image "
        src="/abouttme.jpg" /> -->
      <div
        class="text-left flex flex-col h-full poppins text-balance mt-6 md:mt-0"
      >

      <div class="flex flex-col gap-2 text-center">
        <p class="text-xl">
          {{ ABOUT_SECTION.section1 }}
          I’m a passionate web developer dedicated to creating efficient, responsive, and user-friendly websites. With experience in VueJS, NuxtJS, Laravel, NestJS, I strive to bring innovative ideas to life and solve real-world problems. Let’s build something amazing together!
          <!-- Take a look at the <span class="poppins text-primary">projects</span>  I've contributed to for various companies. -->
          
        </p>
      </div>
        <!-- <p class="text-base md:text-lg text-center">
          {{ ABOUT_SECTION.section1 }}
        </p> -->
        <!-- <div class="text-base md:text-lg">
          <span class="h-3">Skills:</span>
          <ul class="list-disc pl-4">
            <li>
              <strong>Web Development:</strong>
              <span class="text-base"
                >Expertise in Laravel, Vue, Nuxt, and React frameworks.</span
              >
            </li>
            <li>
              <strong>Version Control:</strong>
              <span class="text-base">Proficient in Git and GitHub.</span>
            </li>
            <li>
              <strong>Database Management:</strong>
              <span class="text-base"
                >Skilled in MySQL, PostgreSQL, and Firebase.</span
              >
            </li>
            <li>
              <strong>Frontend Tools:</strong>
              <span class="text-base"
                >Experienced with CSS frameworks and JavaScript libraries.</span
              >
            </li>
            <li>
              <strong>Backend:</strong>
              <span class="text-base"
                >Hands-on experience with API development and deployment.</span
              >
            </li>
            <li>
              <strong>DevOps:</strong>
              <span class="text-base"
                >Familiar with Docker for containerization and streamlining
                workflows (continuing to learn).</span
              >
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <!-- <div
    class="text-left flex flex-col h-full poppins text-balance mt-6 md:mt-0">
    <div class="text-base md:text-lg">
      <span class="h-3">Skills:</span>
      <ul class="list-disc pl-4">
        <li> <strong>Web Development:</strong> <span class="text-base">Expertise in Laravel, Vue, Nuxt, and React frameworks.</span></li>
        <li> <strong>Version Control:</strong> <span class="text-base">Proficient in Git and GitHub.</span></li>
        <li> <strong>Database Management:</strong> <span class="text-base">Skilled in MySQL, PostgreSQL, and Firebase.</span></li>
        <li> <strong>Frontend Tools:</strong> <span class="text-base">Experienced with CSS frameworks and JavaScript libraries.</span></li>
        <li> <strong>Backend:</strong> <span class="text-base">Hands-on experience with API development and deployment.</span></li>
        <li> <strong>DevOps:</strong> <span class="text-base">Familiar with Docker for containerization and streamlining workflows (continuing to learn).</span></li>
      </ul>
    </div>
  </div> -->
  </section>
</template>
