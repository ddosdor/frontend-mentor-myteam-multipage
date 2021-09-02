<template>
  <p class="UiTextContent font-semibold text-center
            md:text-left
           "
     :class="[ smaller ? 'text-sm leading-25' : 'text-base leading-28']"
  >
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiTextContent',
  props: {
    /**
     * Set smaller text
     */
    smaller: Boolean,
  },
});
</script>
