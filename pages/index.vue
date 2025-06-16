<script lang="ts" setup>
definePageMeta({
  title: 'Portfolio'
});

const menuHoverAnimation = 'transform transition duration-250 hover:scale-[1.17] hover:text-[#8F040B]';
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 p-8 justify-center items-center min-h-screen">
    <aside>
      <SocialBanner class="flex-row px-8 justify-center lg:flex-col lg:px-0 lg:py-8" />
    </aside>
    <main>
      <div class="mx-auto">
        <div class="relative lg:h-[80svh] aspect-video">
          <img
            src="/background.webp"
            alt="Animated silly walk"
            class="opacity-60 w-full"
            draggable="false"
            preload
          >
          <div class="absolute bottom-0 w-full h-1/2">
            <NuxtImg
              src="/logo.webp"
              alt="Fanny Regeste Mistral"
              draggable="false"
              preload
              class="w-auto h-full mx-auto"
            />
          </div>
        </div>

        <nav class="mx-auto w-auto pt-6 pb-6 grid lg:grid-flow-col lg:auto-cols-fr lg:gap-16 gap-12 text-4xl md:text-5xl lg:text-6xl justify-items-center">
          <h1 :class="menuHoverAnimation">
            <NuxtLink href="/pages/storyboard">
              DEMOREEL
            </NuxtLink>
          </h1>
          <h1 :class="menuHoverAnimation">
            <NuxtLink href="/gallery">
              GALLERY
            </NuxtLink>
          </h1>
          <h1 :class="menuHoverAnimation">
            <NuxtLink href="/pages/about">
              ABOUT
            </NuxtLink>
          </h1>
        </nav>

        <footer class="mx-auto w-fit text-center">
          Made by Yann Hodiesne. © {{ new Date().getFullYear() }} Fanny Regeste Mistral. All rights reserved.
        </footer>
      </div>
    </main>
  </div>
</template>
