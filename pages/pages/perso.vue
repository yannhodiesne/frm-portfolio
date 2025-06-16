<script lang="ts" setup>
definePageMeta({
  title: 'Personal work'
});

const arlesGroup = [
  { src: '/perso/arlesiennes/2.jpg', class: 'col-span-full lg:col-span-2' },
  { src: '/perso/arlesiennes/1.jpg', class: 'lg:order-first' },
  { src: '/perso/arlesiennes/3.jpg', class: '' },
  { src: '/perso/arlesiennes/4.jpg', class: '2xl:col-start-2' },
  { src: '/perso/arlesiennes/5.jpg', class: '' }
];

const dndGroup = [
  { src: '/perso/dnd/1.jpg', class: 'col-span-full 2xl:col-span-2 2xl:col-start-2' },
  { src: '/perso/dnd/2.jpg', class: 'col-span-full 2xl:col-start-1' },
  { src: '/perso/dnd/5.jpg', class: 'mb-0' },
  { src: '/perso/dnd/3.jpg', class: 'mb-0' },
  { src: '/perso/dnd/10.jpg', class: 'mb-0' },
  { src: '/perso/dnd/14.jpg', class: 'mb-0' },
  { src: '/perso/dnd/11.jpg', class: 'mb-0' },
  { src: '/perso/dnd/8.jpg', class: 'mb-0' },
  { src: '/perso/dnd/9.jpg', class: 'mb-0' },
  { src: '/perso/dnd/13.jpg', class: 'mb-0' },
  { src: '/perso/dnd/16.jpg', class: 'mb-0' },
  { src: '/perso/dnd/17.jpg', class: 'mb-0' },
  { src: '/perso/dnd/12.jpg', class: 'mb-0' },
  { src: '/perso/dnd/7.jpg', class: 'mb-0' },
  { src: '/perso/dnd/15.jpg', class: 'mb-0' },
  { src: '/perso/dnd/4.jpg', class: 'mb-0' },
  { src: '/perso/dnd/6.jpg', class: 'mb-0' }
];

const tcopbGroup = [
  { src: '/perso/tcopb/7.jpg', class: 'col-span-full 2xl:col-span-2' },
  { src: '/perso/tcopb/8.jpg', class: '' },
  { src: '/perso/tcopb/9.jpg', class: '' },
  { src: '/perso/tcopb/17.jpg', class: 'col-span-full 2xl:col-span-2' },
  { src: '/perso/tcopb/16.jpg', class: 'col-span-full 2xl:col-span-2' },
  { src: '/perso/tcopb/4.jpg', class: 'col-span-full 2xl:col-span-2' },
  { src: '/perso/tcopb/5.jpg', class: 'col-span-full 2xl:col-span-2' },
  { src: '/perso/tcopb/3.jpg', class: '' },
  { src: '/perso/tcopb/2.jpg', class: '' },
  { src: '/perso/tcopb/6.jpg', class: '' },
  { src: '/perso/tcopb/1.jpg', class: '' },
  { src: '/perso/tcopb/10.jpg', class: '' },
  { src: '/perso/tcopb/11.jpg', class: '' },
  { src: '/perso/tcopb/12.jpg', class: '' },
  { src: '/perso/tcopb/13.jpg', class: '' },
  { src: '/perso/tcopb/14.jpg', class: '2xl:col-span-2' },
  { src: '/perso/tcopb/15.jpg', class: '2xl:col-span-2' }
];

const othersFirstGroup = [
  { src: '/perso/others/2.jpg', class: '' },
  { src: '/perso/others/1.jpg', class: '' },
  { src: '/perso/others/6.jpg', class: '' }
];

const othersSecondGroup = [
  { src: '/perso/others/7.jpg', class: '' },
  { src: '/perso/others/8.jpg', class: '2xl:col-span-2' },
  { src: '/perso/others/9.jpg', class: '' },
  { src: '/perso/others/3.jpg', class: 'xl:col-span-2 2xl:col-span-3' },
  { src: '/perso/others/5.jpg', class: '' }
];
</script>

<template>
  <PageLayout>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8 md:flex-row items-center">
        <NuxtPicture
          src="/perso/hardworking.png"
          alt="Hard working Fanny"
          draggable="false"
          :img-attrs="{ class: 'h-auto basis-1/3 w-full mx-auto' }"
          class="h-auto w-full basis-1/3 mx-auto"
        />
        <p class="text-3xl text-center basis-2/3">
          On this page you&apos;ll find various work on personal projects, <br class="hidden xl:block">such as webcomics, illustrations and other shenanigans.
        </p>
      </div>
      <p class="text-xl pt-16">
        I was born in Arles in the south of France. These are arlesian girls, wearing the traditional costume.
      </p>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ClickableImage
          v-for="img in arlesGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <p class="text-xl pt-16">
        Obsessed with D&D (especially Baldur&apos;s Gate 3), here are several posings of a Tiefling.<br>
        I also made my friends take a &ldquo;Which D&D character are you?&rdquo; test and I drew them based on their answers!
      </p>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ClickableImage
          v-for="img in dndGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <p class="text-xl pt-16">
        The Curse Of Pirate&apos;s Bay is a webcomic I started to publish in June, 2021. <br>
        It&apos;s a story about Eva, a young girl, who accidentally finds herself stuck on a pirate boat. <br>
        She has to hide who she really is to survive, in the hopes of coming back home someday.<br>
        &gt;&gt; <a
          class="text-blue-500 underline"
          draggable="false"
          href="https://www.webtoons.com/en/canvas/the-curse-of-pirates-bay/list?title_no=383228"
          target="_blank"
        >You can read it here!</a> &lt;&lt;
      </p>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ClickableImage
          v-for="img in tcopbGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <p class="text-xl pt-16">
        Those are participations to the Character Design Challenge, and fanarts.
      </p>
      <div class="gap-4 grid grid-cols-1 lg:grid-cols-3">
        <ClickableImage
          v-for="img in othersFirstGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ClickableImage
          v-for="img in othersSecondGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
    </div>
  </PageLayout>
</template>
