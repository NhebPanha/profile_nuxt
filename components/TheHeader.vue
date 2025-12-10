<script setup lang="ts">
import { NAV_LINKS } from '@/data/constants'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'

type Props = {
  y: number
  goTop: () => void
}

const { y, goTop } = defineProps<Props>()

const isOpen = ref(false)

// get Lenis instance (if available)
const nuxtApp = useNuxtApp()
const lenis = (nuxtApp as any).$lenis as
  | { scrollTo?: (target: any, opts?: any) => void }
  | undefined

let headerEl: HTMLElement | null = null

onMounted(() => {
  headerEl = document.querySelector('header')
})

onBeforeUnmount(() => {
  headerEl = null
})

/**
 * Smooth scroll to an anchor or pixel position.
 * - If href starts with '#' -> treat as in-page anchor and scroll to it.
 * - If external -> perform normal navigation.
 * - Uses lenis.scrollTo if available, otherwise native scroll with behavior: 'smooth'.
 */
function handleNav(href: string) {
  if (!href) return

  // external / full URLs should navigate normally
  const isHash = href.startsWith('#')
  const isExternal = href.startsWith('http') || href.startsWith('//')

  if (isExternal && !isHash) {
    // allow normal navigation (open in new tab if target set)
    window.location.href = href
    return
  }

  if (isHash) {
    const id = href.slice(1)
    const target = document.getElementById(id)
    if (!target) return

    // compute offset (header height)
    const headerHeight =
      (headerEl?.getBoundingClientRect().height ?? 0) + 8 /* extra gap */

    // target top coordinate relative to document
    const top =
      window.pageYOffset + target.getBoundingClientRect().top - headerHeight

    if (lenis && typeof lenis.scrollTo === 'function') {
      // Lenis accepts number (pixels) or selector/element; pixel number respects offset
      lenis.scrollTo(Math.round(top))
    } else {
      // native fallback
      window.scrollTo({ top: Math.round(top), behavior: 'smooth' })
    }

    // close mobile menu (if open)
    isOpen.value = false
    return
  }

  // default fallback - navigate
  window.location.href = href
}
</script>
<template>
  <header
    class="fixed w-full z-20 top-0 duration-200 px-4 border-b border-solid"
   :class="{
  'py-4 dark:bg-black bg-slate-200 border-primary border-b-2': y > 0 || isOpen,
  'py-6 bg-transparent border-transparent': !(y > 0 || isOpen)
}"
  >
    <nav class="flex flex-row items-center justify-between max-w-[1400px] mx-auto">
      <div
        class="flex gap-4 items-center cursor-pointer text-primary hover:text-blue-300"
        @click="goTop"
      >
        <span class="inline-block">
          <Icon name="fa6-solid:code" class="h-6 w-6" />
        </span>
        <h1 class="font-medium text-xl">
          <b class="font-bold poppins mr-1">Sopheak</b>
          <span class="font-bold poppins ml-1 hidden md:inline-block"> HUN </span>
        </h1>
      </div>

      <div
        class="flex gap-4 items-center ml-auto relative"
        v-motion-fade-visible-once
      >
        <ThemeToggler />
        <button
          aria-label="expand mobile menu button"
          @click="isOpen = !isOpen"
          class="md:hidden block p-2 absolute top-0 right-0"
          :class="{ open: isOpen, 'focus:outline-none': true }"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <nav class="items-center flex-row hidden md:flex">
        <div class="flex pr-3">
          <div class="sm:flex items-center gap-4 text-center hidden">
            <!-- Desktop links: use handleNav to trigger Lenis -->
            <a
              v-for="link in NAV_LINKS"
              :key="link.href"
              class="hover:text-primary hover:underline cursor-pointer"
              :href="link.href"
              @click.prevent="handleNav(link.href)"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/sopheak-hun/" target="_blank">
          <button
            class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-black text-white dark:bg-white dark:text-slate-950"
          >
            <div
              class="absolute top-0 right-full w-full h-full bg-primary opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h2 class="relative z-9 md:whitespace-normal whitespace-nowrap">
              Get in touch
            </h2>
          </button>
        </a>
      </nav>
    </nav>

    <!-- Mobile menu -->
    <nav
      v-show="isOpen"
      @click="isOpen = false"
      class="md:hidden p-4 mt-2 flex flex-col gap-2 text-center font-bold"
      :class="{
        'py-4 dark:bg-slate-950 bg-slate-200 border-primary  dark:border-green-950 ': y > 0,
        'py-6 bg-transparent border-transparent': y <= 0
      }"
    >
      <a
        v-for="link in NAV_LINKS"
        :key="link.href"
        class="border rounded p-2 border-primary animate-link cursor-pointer"
        :href="link.href"
        @click.prevent="handleNav(link.href)"
      >
        {{ link.label }}
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        aria-label="Contact page link"
        class="rounded p-2 bg-primary animate-link"
      >
        Get in touch
      </a>
    </nav>
  </header>
</template>

<style scoped>
/* small tweak so the mobile overlay sits below the header height on most devices.
   If you need a different offset, adjust the top value above (top-16). */
@media (max-width: 768px) {
  header { --header-height: 4rem; }
}

</style>
