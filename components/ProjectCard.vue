<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  icon: { type: String },
  category: { type: String },
  technologies: { type: Array },
});
</script>
<template>
  <div class="flex justify-center items-center p-2 h-full">
    <div
      class="position-relative w-full h-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-indigo-900/50 hover:shadow-cyan-500/50 transform transition-all duration-500 card-glow"
    >
      <!-- Image Section -->
      <div class="relative w-full h-52 sm:h-64 mb-6">
        <img
          class="absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/5"
          :src="imgUrl"
        />
        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-black/20"
        ></div>
      </div>

      <!-- Content -->
      <div class="text-white">
        <h5
          id="project-title"
          class="text-3xl sm:text-4xl font-bold leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          {{ title }}
        </h5>

        <p class="text-indigo-300 text-sm sm:text-base font-medium mb-4">
          {{ category || "Web Application" }}
        </p>

        <p
          id="project-description"
          class="dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6 text-black/100"
        >
          {{ description }}
        </p>
      </div>

      <!-- Technology Inline -->
      <div
         class="mt-8 pt-6 border-t dark:border-white/10 flex items-center gap-3 whitespace-nowrap overflow-x-auto no-scrollbar"
      > 
        <span v-for="(tech, index) in (technologies as Array<{ name: string; icon: string; label: string }>)" :key="index" class="inline-flex items-center space-x-1 text-sm dark:bg-white/5 px-3 py-1 rounded-full border dark:border-white/10 no-scrollbar">
          <Icon :name="tech.icon" class="text-lg" /> 
          <span class="text-black/100 dark:text-gray-200"> {{ tech.label }} </span>
        </span> 
      </div>
    </div>
  </div>
</template>
<style >
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  /* IE/Edge */
  scrollbar-width: none;     /* Firefox */
}

</style>