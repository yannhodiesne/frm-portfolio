<script lang="ts" setup>
definePageMeta({
  title: 'Page not found'
});

defineRouteRules({
  prerender: true
});
</script>

<template>
  <PageLayout :padding="0">
    <NuxtLink
      href="/"
      aria-label="Home"
    >
      <NuxtImg
        src="/404.png"
        alt="404: not found"
        draggable="false"
        preload
        class="min-h-[45vh] w-auto object-cover md:max-h-[60vh] md:mx-auto"
      />
    </NuxtLink>
  </PageLayout>
</template>
