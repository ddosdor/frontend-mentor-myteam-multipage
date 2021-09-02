<template>
  <component :is="htmlHeadingElement"
             class="UiHeading"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiHeading',
  props: {
    h1Large: Boolean,
    h1Small: Boolean,
    h2: Boolean,
    h3: Boolean,
  },
  setup() {
    const htmlHeadingElement = ref<String>('h1');

    return { htmlHeadingElement };
  },
});
</script>
