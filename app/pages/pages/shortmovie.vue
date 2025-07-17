<script lang="ts" setup>
definePageMeta({
  title: 'Short movie: The Origin of world and men'
});

const firstGroup = [
  { src: '/shortmovie/9.jpg', class: '' },
  { src: '/shortmovie/5.jpg', class: '' },
  { src: '/shortmovie/4.jpg', class: '' },
  { src: '/shortmovie/3.jpg', class: '' },
  { src: '/shortmovie/21.jpg', class: '' },
  { src: '/shortmovie/22.jpg', class: '' },
  { src: '/shortmovie/24.jpg', class: '' },
  { src: '/shortmovie/25.jpg', class: '' },
  { src: '/shortmovie/23.jpg', class: '' },
  { src: '/shortmovie/17.jpg', class: '' },
  { src: '/shortmovie/16.jpg', class: '' },
  { src: '/shortmovie/11.jpg', class: '' },
  { src: '/shortmovie/15.jpg', class: '' },
  { src: '/shortmovie/14.jpg', class: '' },
  { src: '/shortmovie/10.jpg', class: '' },
  { src: '/shortmovie/13.jpg', class: '' },
  { src: '/shortmovie/2.jpg', class: '' },
  { src: '/shortmovie/6.jpg', class: '' },
  { src: '/shortmovie/7.jpg', class: '' },
  { src: '/shortmovie/8.jpg', class: '' }
];

const secondGroup = [
  { src: '/shortmovie/12.jpg', class: '' },
  { src: '/shortmovie/19.jpg', class: '' },
  { src: '/shortmovie/20.jpg', class: '' }
];
</script>

<template>
  <PageLayout>
    <div class="gap-8 flex flex-col">
      <h1 class="text-2xl uppercase text-center">
        Short Movie Animation: The Origin of World and Men
      </h1>
      <div class="relative aspect-video">
        <div class="absolute top-0 left-0 w-full h-full border-0 z-0 bg-gray-300 animate-pulse" />
        <iframe
          src="https://player.vimeo.com/video/392172838?h=e5eb79b8ce"
          class="absolute top-0 left-0 w-full h-full border-0 z-1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div class="flex flex-col gap-4 text-justify md:w-1/2 mx-auto">
        <p class="text-xl indent-8">
          A long time ago, when nothing existed yet, three spirits decide to have a competition to determine which one of them is the strongest, and therefore deserves to be king.
        </p>
        <p class="text-xl italic">
          Produced during my formation at Emile Cohl&apos;s art school (Lyon, France). Production went from june 2018 to june 2019.
        </p>
      </div>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ClickableImage
          v-for="img in firstGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ClickableImage
          v-for="img in secondGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
    </div>
  </PageLayout>
</template>
