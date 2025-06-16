<script lang="ts" setup>
const props = defineProps<{
  src: string;
  class?: string | undefined;
}>();

const isOpen = ref(false);

watch(() => isOpen.value, (value) => {
  if (value)
    document.body.classList.add('no-scroll');
  else
    document.body.classList.remove('no-scroll');
});

onKeyStroke('Escape', () => {
  if (isOpen.value)
    isOpen.value = false;
});
</script>

<template>
  <div :class="`my-auto ${props.class}`">
    <NuxtImg
      :src="props.src"
      alt=""
      class="h-auto w-full cursor-pointer"
      draggable="false"
      @click="isOpen = true"
    />
  </div>
  <div
    v-if="isOpen"
    class="
      fixed top-0 left-0 w-full h-full
      flex justify-center items-center
      bg-black/50 z-50
    "
    @click="isOpen = false"
  >
    <NuxtImg
      :src="props.src"
      alt=""
      class="h-auto w-auto max-w-[90vw] max-h-[90vh] cursor-pointer"
      draggable="false"
      @click="isOpen = false"
    />
  </div>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
