<script lang="ts" setup>
const props = defineProps<{
  name: string;
  path: string;
  image: string;
}>();
</script>

<template>
  <NuxtLink
    :href="props.path"
    class="aspect-video relative group"
  >
    <h1
      class="
        absolute top-1/2 left-1/2
        text-center uppercase
        -translate-x-1/2 -translate-y-1/2
        text-white text-lg md:text-xl lg:text-2xl
        lg:invisible z-10 group-hover:visible
        transition-[visibility] duration-100
      "
    >
      {{ props.name }}
    </h1>
    <NuxtPicture
      :src="props.image"
      :alt="props.name"
      draggable="false"
      :img-attrs="{ class: 'h-full transition duration-300 object-cover brightness-50 lg:brightness-100 group-hover:brightness-50 object-center' }"
    />
  </NuxtLink>
</template>
