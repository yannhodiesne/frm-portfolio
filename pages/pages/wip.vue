<script lang="ts" setup>
definePageMeta({
  title: 'Work in progress!'
});

defineRouteRules({
  prerender: true
});
</script>

<template>
  <PageLayout>
    <NuxtLink
      href="/"
      aria-label="Home"
    >
      <NuxtImg
        src="/wip/wip.png"
        alt="Work in progress!"
        draggable="false"
        class="max-h-[60vh] w-auto mx-auto"
      />
    </NuxtLink>
  </PageLayout>
</template>
