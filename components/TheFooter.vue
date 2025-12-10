<script setup lang="ts">
import { NAV_LINKS } from '@/data/constants'
import moment from 'moment';
</script>

<template>
  <footer
    class="dark:bg-black bg-slate-200 border-t-2 border-solid border-primary w-full"
    id="contact">
    <div class="mx-auto max-w-screen-xl my-8">
      <a
        href="/#hero"
        class="flex justify-center items-center text-3xl font-semibold text-primary hover:text-blue-300 hover:underline">
       Panha NHEB
      </a>
      <ul class="flex flex-wrap justify-center items-center mb-6 my-8">
        <li
          v-for="link in NAV_LINKS"
          :key="link.href">
          <a
            class="mr-4 md:mr-6 hover:text-primary hover:underline"
            :href="link.href"
            >{{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="mr-4 hover:text-primary hover:underline md:mr-6"
            >Get in touch</a
          >
        </li>
      </ul>
    </div>
    <section class="border-t border-primary py-2">
      <a
        target="_blank"
        class="md:text-lg flex items-center justify-center hover:text-primary"
        >© {{ moment().year() }} Portfolio Panha NHEB
        <!-- <Icon
          name="fa6-brands:github"
          class="size-5 ml-2" /> -->
      </a>
    </section>
  </footer>
</template>
