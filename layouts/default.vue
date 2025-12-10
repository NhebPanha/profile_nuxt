<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type LenisType from 'lenis' // optional typing import (may need allowJs or declare module)
const y = ref(0)

const nuxtApp = useNuxtApp()
const lenis = nuxtApp.$lenis as unknown as {
  on?: (event: string, cb: (e: any) => void) => void
  off?: (event: string, cb: (e: any) => void) => void
  scrollTo?: (target: number | string | Element, opts?: any) => void
} | undefined

const goTop = () => {
  // prefer Lenis smooth scroll if available
  if (lenis && typeof lenis.scrollTo === 'function') {
    // scrollTo accepts number (pixels) or selector/element
    lenis.scrollTo(0)
  } else {
    // fallback
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  // If Lenis is present, use its scroll event (preferred)
  if (lenis && typeof lenis.on === 'function') {
    const handler = (e: any) => {
      // Lenis provides e.scroll (current scroll value)
      // sometimes the event payload shape can vary; handle common cases
      if (typeof e === 'number') {
        y.value = e
      } else if (e && typeof e.scroll === 'number') {
        y.value = e.scroll
      } else if (typeof window.scrollY === 'number') {
        y.value = window.scrollY
      }
    }

    lenis.on('scroll', handler)

    // cleanup on unmount
    onBeforeUnmount(() => {
      if (typeof lenis.off === 'function') lenis.off('scroll', handler)
    })
  } else {
    // fallback to native listeners if Lenis isn't present
    const updateScroll = () => {
      y.value = window.scrollY
    }

    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateScroll)

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    })

    // initial read
    updateScroll()
  }
})
</script>

<template>
  <div class="selection:bg-green-200/60 dark:selection:bg-green-200/30 lenis-wrapper">
    <SpeedInsights />
    <TheHeader
      :y="y"
      :goTop="goTop" />
    <div
      class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <div class="fixed bottom-0 right-0 p-10 z-[10]">
        <button
          aria-label="go to top button"
          @click="goTop"
          class="rounded-full bg-slate-600 text-primary px-3 sm:px-4 hover:bg-slate-500 cursor-pointer aspect-square grid place-items-center"
          :class="{ hidden: y < 20 }">
          <Icon name="fa6-solid:arrow-up" />
        </button>
      </div>
      <slot />

      <div class="mb-10" />
    </div>
    <TheFooter />
  </div>
</template>
