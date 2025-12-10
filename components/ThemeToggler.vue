<script setup lang="ts">
const colorMode = useColorMode()

const changeColor = () =>
  (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')
</script>

<template>
  <button
    aria-label="Color Mode"
    class="md:mr-4 mr-12"
    @click="changeColor">
    <Icon
      v-show="colorMode.value === 'light'"
      name="heroicons-outline:moon"
      class="text-slate-800 size-7 hover:text-slate-500" />
    <Icon
      v-show="colorMode.value === 'dark'"
      name="heroicons-outline:sun"
      class="text-yellow-400 size-7 hover:text-yellow-600" />
  </button>
</template>
