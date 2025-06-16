<script lang="ts" setup>
const props = defineProps<{
  backLink?: string | undefined;
  padding?: number | undefined;
}>();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="h-36 grid grid-cols-[auto_1fr] md:grid-cols-3">
      <div
        id="back"
        class="justify-self-start pl-4 md:pl-16 flex items-center text-gray-500"
      >
        <NuxtLink :href="props.backLink ? props.backLink : '/gallery'">
          &#706; Back
        </NuxtLink>
      </div>
      <NuxtLink
        href="/"
        aria-label="Home"
      >
        <NuxtImg
          src="/logo.png"
          alt="Fanny Regeste Mistral"
          draggable="false"
          priority
          class="w-auto h-36 mx-auto"
        />
      </NuxtLink>
    </header>
    <main :class="`2xl:container 2xl:mx-auto flex flex-col justify-center grow min-h-[50vh] pt-4 ${props.padding ? `px-${props.padding}` : 'px-8'}`">
      <slot />
    </main>
    <footer>
      <SocialBanner class="justify-center py-8" />
    </footer>
  </div>
</template>
