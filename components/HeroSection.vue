<script setup >
import resume from '@/assets/Hun_Sopheak_Web_Development.pdf'

import { HERO_SECTION } from '@/data/constants'
</script>

<template>
  <section
    id="hero"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 mt-5">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 ">
      <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl ">
        <span class="typewriter">
        Hi! I'm
        <span class="poppins text-primary">Sopheak</span> HUN, <br />Web 
        <span class="poppins text-primary">Developer</span>
        </span>

      </h1>
      <p class="text-base sm:text-lg md:text-xl text-balance">
        <span class="">  {{ HERO_SECTION }} </span>
      
      </p>
      <!-- <div class="typing-container mt-4 text-lg text-secondary">
        <span class="typing-text">Welcome to my portfolio! Check out my latest projects below.</span>
      </div> -->
      <div class="flex gap-8 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/sopheak-hun/"
          target="_blank">
          <button
            class="greenShadow lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-black text-white dark:bg-white dark:text-slate-950">
            <div
              class="absolute top-0 right-full w-full h-full bg-primary opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h2 class="relative z-9">
              Get in touch
              <span class="hidden md:inline-block">
                <Icon
                  class="ml-1 text-white dark:text-slate-600"
                  name="fa6-solid:arrow-right" />
              </span>
            </h2>
          </button>
        </a>

        <a
          class="greenShadow lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-black text-white dark:bg-white dark:text-slate-950"
          :href="resume"
          target="_blank">
          <div
            class="absolute top-0 right-full w-full h-full bg-primary opacity-20 group-hover:translate-x-full z-0 duration-200" />
          <h2 class="relative z-9">
            My resume
            <span class="hidden md:inline-block">
              <Icon
                name="fa6-solid:file"
                class="ml-1 text-white dark:text-slate-600" />
            </span>
          </h2>
        </a>
      </div>
    </div>

    <div
      class="flex p-0.5 relative max-w-[700px] w-full mx-auto"
      v-motion-fade-visible-once>
      <div
        class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center">
        <div
          class="bg-gradient-to-r absolute inset-[-20px] from-cyan-400 to-primary specialSpin" />
      </div>

      <img
        loading="eager"
        src="/hero.jpg"
        alt="programming"
        class="w-full h-full object-cover z-[2]" />
    </div>
  </section>
</template>

<!-- <style scoped>
.typewriter {
  display: inline-block; /* Ensures inline-block behavior for typing effect */
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  width: 24ch; /* Adjust this value to fit your full text */
  border-right: 2px solid black;
  animation: typing 6s steps(30, end) forwards, blink 0.5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0; /* Start with no visible text */
  }
  to {
    width: 24ch; /* Matches the text length */
  }
}

@keyframes blink {
  from {
    border-color: transparent;
  }
  to {
    border-color: black;
  }
}
</style> -->