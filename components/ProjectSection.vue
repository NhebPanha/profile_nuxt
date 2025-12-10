<script setup lang="ts">
import { PROJECTS } from '@/data/constants'
</script>

<template>
  <section
    class="pt-32 flex flex-col gap-24"
    id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="text-large sm:text-xl md:text-2xl">A showcase of my professional work.</h3>
      <h4 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Take a look at the <span class="poppins text-primary">projects</span>  I've contributed to for various companies.
        
      </h4>
    </div>

    <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10">
      <ProjectCard
        v-for="project in PROJECTS"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :imgUrl="project.image"
        :technologies="project.technologies"
      />
    </div>
  </section>
</template>
