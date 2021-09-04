<template>
  <component :is="htmlHeadingElement"
             class="UiHeading w-full text-center
                    md:text-left
                   "
             :class="h1Size"
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
    h1Large: Boolean,
    /**
     * Set heading as 'h1' with 'small' class
     */
    h1Small: Boolean,
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
    const h1Size = ref<String | null>(null);
    switch (true) {
      case props.h1Large: h1Size.value = 'large'; break;
      case props.h1Small: h1Size.value = 'small'; break;
      case props.h2: htmlHeadingElement.value = 'h2'; break;
      case props.h3: htmlHeadingElement.value = 'h3'; break;
      default: h1Size.value = 'large';
    }

    return { htmlHeadingElement, h1Size };
  },
});
</script>

<style lang="sass" scoped>
h1,
h2,
h3
  @apply font-bold

h1,.large
  @apply text-[100px] leading-100

h1,.small
  @apply text-[64px] leading-56

h2
  @apply text-[32px] leading-[32px]
  @apply lg:text-[48px] lg:leading-48

h3
  @apply text-[18px] leading-28
</style>
