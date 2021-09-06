<template>
  <section class="SuccessStoriesSection bg-secondary-deepJungleGreen pt-[8.75rem] pb-[10.25rem]
                  md:py-[6.25rem] lg:py-[8.75rem]
                 "
           :style="style"
  >
    <div class="container md:px-[3.625rem] lg:px-0">
      <SharedUiHeading h2
                       class="mb-12 !text-center
                              lg:w-[932px] lg:mx-auto
                             "
      >
        <span>Delivering real results for top companies. Some of our</span>
        <span class="text-secondary-raptureBlue">success stories.</span>
      </SharedUiHeading>
      <SectionsPartialsSuccessStoriesList />
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
