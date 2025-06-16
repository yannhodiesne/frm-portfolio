<script lang="ts" setup>
definePageMeta({
  title: 'Portfolio'
});

const menuHoverAnimation = 'transform transition duration-250 hover:scale-[1.17] hover:text-[#8F040B]';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 p-8 justify-center items-center min-h-screen">
    <aside>
      <SocialBanner class="flex-row px-8 justify-center md:flex-col md:px-0 md:py-8" />
    </aside>
    <main>
      <div class="mx-auto">
        <div class="relative">
          <img
            src="/background.webp"
            alt="Animated silly walk"
            class="opacity-60 max-h-[80svh] w-auto mx-auto"
            draggable="false"
            priority
          >
          <div class="absolute bottom-0 w-full h-1/2">
            <NuxtPicture
              src="/logo.png"
              alt="Fanny Regeste Mistral"
              draggable="false"
              priority
              :img-attrs="{ class: 'w-auto h-full mx-auto' }"
            />
          </div>
        </div>

        <nav class="mx-auto w-auto pt-6 grid md:grid-flow-col md:auto-cols-fr md:gap-16 gap-12 text-4xl md:text-5xl lg:text-6xl justify-items-center">
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

        <footer class="mx-auto w-fit pt-6">
          Made by Yann Hodiesne. © {{ new Date().getFullYear() }} Fanny Regeste Mistral. All rights reserved.
        </footer>
      </div>
    </main>
  </div>
</template>
