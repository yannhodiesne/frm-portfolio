<script lang="ts" setup>
definePageMeta({
  title: 'Gallery'
});
</script>

<template>
  <PageLayout back-link="/">
    <div class="w-2/3 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      <GalleryButton
        name="Storyboard"
        path="/pages/storyboard"
        image="/gallery/storyboard.jpg"
      />
      <GalleryButton
        name="Visual development / background"
        path="/pages/visdevbg"
        image="/gallery/visdevbg.jpg"
      />
      <GalleryButton
        name="Short movie: The origin of world and men"
        path="/pages/shortmovie"
        image="/gallery/shortmovie.jpg"
      />
      <GalleryButton
        name="Personal work"
        path="/pages/perso"
        image="/gallery/personalwork.jpg"
        image-class="object-fit"
      />
    </div>
  </PageLayout>
</template>
