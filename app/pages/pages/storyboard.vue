<script lang="ts" setup>
definePageMeta({
  title: 'Storyboard'
});

const youtubeEmbeds = [
  'https://www.youtube-nocookie.com/embed/LajeXC2ahjw?si=1HZzAjcrw_Ek015v',
  'https://www.youtube-nocookie.com/embed/KKCoz-hnEnQ?si=Pu_FtpbP0NjvarZE',
  'https://www.youtube-nocookie.com/embed/a6CH9KwJP8M?si=KphZqZRAOtECunSW',
  'https://www.youtube-nocookie.com/embed/7QGnh8BMWrA?si=Gp7roDI_Fi9mxzC_'
];
</script>

<template>
  <PageLayout>
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pt-8 md:pt-0">
        <div class="flex justify-center">
          <p class="my-auto text-center">
            <span class="text-2xl">
              Shoot me an email/dm me on LinkedIn if you want to see <br class="hidden 2xl:block">
              my top secret demoreel !<br>
              <br>
              It includes my work on theses series :<br>
            </span>
            &ldquo;Oggy Oggy&rdquo; (Xilam animation)<br>
            &ldquo;Billy le hamster cowboy&rdquo; (Dandeloo)<br>
            &ldquo;Zig & Sharko&rdquo; (Xilam animation)<br>
            &ldquo;Potobot&rdquo; (Xilam animation)<br>
          </p>
        </div>
        <div class="relative aspect-video">
          <div class="absolute top-0 left-0 w-full h-full border-0 z-0 bg-gray-300 animate-pulse" />
          <iframe
            src="https://player.vimeo.com/video/901255300?h=0752843f64"
            class="absolute top-0 left-0 w-full h-full border-0 z-1"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <p class="text-2xl">
        Below you&apos;ll find some personal work and projects.
      </p>
      <div class="grid grid-flow-row gap-8 md:grid-flow-col md:auto-cols-fr">
        <div
          v-for="url in youtubeEmbeds"
          :key="url"
          class="relative aspect-video"
        >
          <div class="absolute top-0 left-0 w-full h-full border-0 z-0 bg-gray-300 animate-pulse" />
          <iframe
            :src="url"
            class="absolute top-0 left-0 w-full h-full border-0 z-1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </PageLayout>
</template>
