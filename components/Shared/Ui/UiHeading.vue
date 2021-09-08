<template>
  <component :is="htmlHeadingElement"
             class="UiHeading w-full text-center
                    md:text-left
                   "
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiHeading',
  props: {
    /**
     * Set heading as 'h1' with 'large' class
     */
    h1: Boolean,
    /**
     * Set heading as 'h2'
     */
    h2: Boolean,
    /**
     * Set heading as 'h3'
     */
    h3: Boolean,
  },
  setup(props) {
    const htmlHeadingElement = ref<String>('h1');
    switch (true) {
      case props.h1: htmlHeadingElement.value = 'h1'; break;
      case props.h2: htmlHeadingElement.value = 'h2'; break;
      case props.h3: htmlHeadingElement.value = 'h3'; break;
      default: htmlHeadingElement.value = 'h1';
    }

    return { htmlHeadingElement };
  },
});
</script>

<style lang="sass" scoped>
h1,
h2,
h3
  @apply font-bold

h1
  @apply text-[40px] leading-[40px]
  @apply md:text-[64px] md:leading-56
  @apply lg:text-[64px] lg:leading-100

h2
  @apply text-[32px] leading-[32px]
  @apply lg:text-[48px] lg:leading-48

h3
  @apply text-[18px] leading-28
</style>
