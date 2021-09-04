<template>
  <NuxtImg class="UiAvatar rounded-full ring-2 ring-secondary-eggshelBlue"
           :src="src"
           :width="smaller ? '62' : '96'"
           :height="smaller ? '62' : '96'"
           v-bind="$attrs"
           :alt="alt"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiAvatar',
  inheritAttrs: false,
  props: {
    /**
     * Set avatar smaller
     */
    smaller: Boolean,
    /**
     * Avatar image src
     */
    src: {
      type: String,
      default: null,
    },
    /**
     * Set alt to avatar image (required)
     */
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>
