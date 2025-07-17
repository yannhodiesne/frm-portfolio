<script lang="ts" setup>
const props = defineProps<{
  class?: string | undefined;
}>();

const hoverAnimation = 'transform transition duration-250 hover:scale-125 hover:text-[#8F040B]';
</script>

<template>
  <div :class="`text-2xl flex gap-8 ${props.class ?? ''}`">
    <a
      draggable="false"
      :class="hoverAnimation"
      href="https://twitter.com/MimosaFRM"
      target="_blank"
      title="Twitter"
    >
      <Icon name="cib:twitter" />
    </a>
    <a
      draggable="false"
      :class="hoverAnimation"
      href="https://www.linkedin.com/in/fanny-regeste/"
      target="_blank"
      title="LinkedIn"
    >
      <Icon name="cib:linkedin" />
    </a>
    <a
      draggable="false"
      :class="hoverAnimation"
      href="https://vimeo.com/user56630178"
      target="_blank"
      title="Vimeo"
    >
      <Icon name="cib:vimeo-v" />
    </a>
    <a
      draggable="false"
      :class="hoverAnimation"
      href="https://www.youtube.com/channel/UCWHwmpa-9TS6wykRSbSzXtA"
      target="_blank"
      title="YouTube"
    >
      <Icon name="cib:youtube" />
    </a>
    <a
      draggable="false"
      :class="hoverAnimation"
      href="mailto:f.regestemistral@hotmail.com"
      target="_blank"
      title="Email"
    >
      <Icon name="fluent:mail-32-filled" />
    </a>
  </div>
</template>
