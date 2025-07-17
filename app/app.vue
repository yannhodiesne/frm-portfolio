<script lang="ts" setup>
useSeoMeta({
  ogImage: '/og-image.png'
});

const analytics
  = process.env.NODE_ENV === 'production'
    ? { 'defer': true, 'src': 'https://analytics.wetcrapaud.fr/script.js', 'data-website-id': '1c7b9f15-e0a9-41ca-861e-7782ee037693' }
    : null;

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  script: [analytics].filter(Boolean)
});
</script>

<template>
  <NuxtPage />
</template>
