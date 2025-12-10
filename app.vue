<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
  title: "Sopheak HUN - Portfolio | Web Developer",
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/png", href: "/favicon-16.png" }],
});

useSeoMeta({
  description:
    "Hi! I'm Sopheak HUN, a passionate Web Developer specializing in creating modern, responsive, and user-friendly websites.",
  author: "Sopheak HUN",
  ogTitle: "Sopheak HUN - Portfolio | Web Developer",
  ogDescription:
    "Hi! I'm Sopheak HUN, a passionate Web Developer specializing in creating modern, responsive, and user-friendly websites.",
  ogImage: "https://sopheak-hun.vercel.app/hero.jpg", // Fixed URL
  ogUrl: "https://sopheak-hun.vercel.app/",
  ogType: "website",
  ogSiteName: "Sopheak HUN Portfolio", // Added og:site_name
  twitterCard: "summary_large_image",
  twitterTitle: "Sopheak HUN - Portfolio | Web Developer",
  twitterDescription:
    "Hi! I'm Sopheak HUN, a passionate Web Developer specializing in creating modern, responsive, and user-friendly websites.",
  twitterImage: "https://sopheak-hun.vercel.app/hero.jpg", // Fixed URL
});
</script>

<template>
  <div class="lenis-wrapper">
    <NuxtLayout>
      <Analytics />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
