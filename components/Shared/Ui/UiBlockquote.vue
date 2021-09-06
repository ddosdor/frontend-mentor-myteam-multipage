<template>
  <blockquote class="UiBlockquote pt-9"
              :style="style"
  >
    <SharedUtilitiesTextContentWrapper smaller
                                       class="!text-center"
    >
      <slot />
    </SharedUtilitiesTextContentWrapper>
  </blockquote>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'UiBlockquote',
  setup() {
    const { style } = useBackgroundImage('icon-quotes', 'top center');
    return { style };
  },
});
</script>
