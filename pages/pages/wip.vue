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
      <NuxtPicture
        src="/wip/wip.png"
        alt="Work in progress!"
        draggable="false"
        :img-attrs="{ class: 'max-h-[60vh] w-auto mx-auto' }"
      />
    </NuxtLink>
  </PageLayout>
</template>
