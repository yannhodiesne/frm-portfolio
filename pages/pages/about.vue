<script lang="ts" setup>
definePageMeta({
  title: 'About me'
});

onMounted(() => {
  document.body.classList.add('body-bg');
  document.getElementById('back')?.classList.add('back-color');
});

onUnmounted(() => {
  document.body.classList.remove('body-bg');
  document.getElementById('back')?.classList.remove('back-color');
});
</script>

<template>
  <PageLayout>
    <NuxtImg
      src="/about/foni.png"
      alt="Fanny Regeste Mistral"
      class="-z-10 invisible 2xl:visible absolute h-1/2 w-auto top-1/3 right-0"
    />
    <p class="2xl:w-4/5 text-justify text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-8">
      Hi !<br>
      I am Fanny, an artist from Lyon, France.<br>
      <br>
      I mostly work as a storyboard artist on kids shows, for several studios (Xilam Animation, Dandeloo, Je Suis Bien Content...).<br>
      <br>
      When I have time, I work on various personal projects and stories, such as short comics or illustrations.<br>
      <br>
      Shoot me an email/dm me on LinkedIn if you want to get in contact!<br>
      <NuxtLink href="mailto:f.regestemistral@hotmail.com">
        f.regestemistral@hotmail.com
      </NuxtLink>
    </p>
  </PageLayout>
</template>

<style>
.body-bg {
  background: #9F675A;
}

.back-color {
  color: #8F040B;
}
</style>
