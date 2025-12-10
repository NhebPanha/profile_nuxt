<script setup>
// import { onMounted } from "vue";
// const { $sr } = useNuxtApp();
// definePageMeta({
//   layout: "default",
// });
// onMounted(() => {
//   $sr.reveal(".reveal", {
//     interval: 200,
//   });
// });
</script>

<template>
  <div >
    <div >
      <main class="flex flex-col flex-1 p-4">
        <HeroSection />
        <div class="md:mb-36" />
        <ProjectSection />
        <div class="md:my-24 my-16" />
        <AboutSection />
        <!-- <div class="md:my-24 my-16" /> -->
        <!-- <SkillSection /> -->
        <div class="md:my-24 my-16" />
        <ContactSection />
      </main>
    </div>
  </div>
</template>
