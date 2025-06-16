<script lang="ts" setup>
definePageMeta({
  title: 'Visual development / Background'
});

const firstGroup = [
  { src: '/visdevbg/eva/3.jpg', class: 'md:col-span-2' },
  { src: '/visdevbg/eva/4.jpg', class: '' },
  { src: '/visdevbg/eva/6.jpg', class: '' }
];

const secondGroup = [
  { src: '/visdevbg/eva/1.jpg', class: 'md:col-span-2' },
  { src: '/visdevbg/eva/5.jpg', class: '' },
  { src: '/visdevbg/eva/2.jpg', class: '' }
];

const thirdGroup = [
  { src: '/visdevbg/billierocks/1.jpg', class: '' },
  { src: '/visdevbg/billierocks/2.jpg', class: '' },
  { src: '/visdevbg/billierocks/3.jpg', class: '' },
  { src: '/visdevbg/billierocks/4.jpg', class: '' },
  { src: '/visdevbg/billierocks/5.jpg', class: '' },
  { src: '/visdevbg/billierocks/6.jpg', class: '' },
  { src: '/visdevbg/billierocks/7.jpg', class: '' },
  { src: '/visdevbg/billierocks/8.jpg', class: '' },
  { src: '/visdevbg/billierocks/9.jpg', class: '' },
  { src: '/visdevbg/billierocks/10.jpg', class: '' },
  { src: '/visdevbg/billierocks/11.jpg', class: '' },
  { src: '/visdevbg/billierocks/12.jpg', class: '' },
  { src: '/visdevbg/billierocks/13.jpg', class: '' },
  { src: '/visdevbg/billierocks/15.jpg', class: 'md:col-span-2' },
  { src: '/visdevbg/billierocks/14.jpg', class: 'lg:col-span-3' },
  { src: '/visdevbg/tchouk/1.jpg', class: '' },
  { src: '/visdevbg/tchouk/2.jpg', class: '' },
  { src: '/visdevbg/tchouk/3.jpg', class: '' },
  { src: '/visdevbg/tchouk/4.jpg', class: '' },
  { src: '/visdevbg/tchouk/5.jpg', class: '' }
];
</script>

<template>
  <PageLayout>
    <div className="flex flex-col gap-8 md:pt-0">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-[33%_1fr]">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-center">
            On the opposite you&apos;ll find backgrounds <br className="hidden 2xl:block">
            I made for the french serie &ldquo;Jésus, les traits d’une parole&rdquo; which is an adaptation <br className="hidden 2xl:block">
            of Serge Bloch graphic novel telling about the life of Jesus Christ.<br>
            <br>
            Making the backgrounds was less <br className="hidden 2xl:block">
            about drawing than to paste textures <br className="hidden 2xl:block">
            and elements, and make a nice composition out of it.<br>
            <br>
            I worked straight from the animatic, <br className="hidden 2xl:block">
            there weren&apos;t layouts.<br>
            <br>
            It was quite an interesting experience <br className="hidden 2xl:block">
            for me because I never worked <br className="hidden 2xl:block">
            on my backgrounds with this technique.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <ClickableImage
            v-for="img in firstGroup"
            :key="img.src"
            :src="img.src"
            :class="img.class"
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <ClickableImage
          v-for="img in secondGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
      <p className="text-2xl text-center">
        Below you&apos;ll find a bunch of visuals I made during my internship at Caribara animation in Paris, 2019.<br>
        <br>
        These are visual development for the series &ldquo;Billie and the Rockets&rdquo; (an original project), and &ldquo;Chooks&rdquo;, <br className="hidden 2xl:block">
        adapted from Kerascoët&apos;s comic.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ClickableImage
          v-for="img in thirdGroup"
          :key="img.src"
          :src="img.src"
          :class="img.class"
        />
      </div>
    </div>
  </PageLayout>
</template>
