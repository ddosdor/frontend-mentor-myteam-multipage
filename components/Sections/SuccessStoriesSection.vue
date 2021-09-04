<template>
  <section class="SuccessStoriesSection bg-secondary-deepJungleGreen pt-[8.75rem] pb-[10.25rem]"
           :style="style"
  >
    <div class="container">
      <SharedUiHeading h2>
        <span>Delivering real results for top companies. Some of our</span>
        <span class="text-secondary-raptureBlue">success stories.</span>
      </SharedUiHeading>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'SuccessStoriesSection',
  setup() {
    const { style } = useBackgroundImage([
      'bg-pattern-success-stories-top',
      'bg-pattern-success-stories-bottom',
    ], 'left top, right bottom');
    return { style };
  },
});
</script>
