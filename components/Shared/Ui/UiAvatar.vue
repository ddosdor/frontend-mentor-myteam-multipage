<template>
  <NuxtImg class="UiAvatar rounded-full ring-2 ring-secondary-eggshelBlue"
           :src="src"
           :width="smaller ? '62' : '96'"
           :height="smaller ? '62' : '96'"
           v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiAvatar',
  inheritAttrs: false,
  props: {
    smaller: Boolean,
    src: {
      type: String,
      default: null,
    },
  },
});
</script>
