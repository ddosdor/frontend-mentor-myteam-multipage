<template>
  <section class="HeroSection pt-8 pb-[12.313rem]
                  md:pb-64
                 "
           :style="style"
  >
    <SharedUtilitiesSectionContainerWrapper class="container flex flex-col items-center
                                                   lg:flex-row
                                                  "
    >
      <SharedUiHeading :[pageHeadingSize]="true"
                       class="!w-[240px] mb-[1.125rem] flex-shrink-0
                              md:!w-[340px] md:text-center md:mb-6
                              lg:!w-[620px] lg:text-left lg:mb-0
                       "
      >
        <span>Find the best</span>
        <span class="text-primary-lightCoral">talent</span>
      </SharedUiHeading>
      <div class="lg:ml-auto lg:w-[445px]">
        <SharedUiDivider blue
                         class="hidden lg:block lg:mb-[4.938rem]"
        />
        <SharedUtilitiesTextContentWrapper class="md:text-center lg:text-left">
          Finding the right people and building high performing teams can be hard.
          Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
        </SharedUtilitiesTextContentWrapper>
      </div>
    </SharedUtilitiesSectionContainerWrapper>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, ref, watchEffect, toRefs,
} from '@nuxtjs/composition-api';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const { style } = useBackgroundImage([
      'bg-pattern-hero-section',
      'bg-pattern-hero-section-2',
    ]);
    const { backgroundPosition } = toRefs(style);
    const pageHeadingSize = ref<String>('');

    watchEffect(
      () => {
        switch (true) {
          case breakpoints.greater('lg').value:
            backgroundPosition.value = 'right 165px bottom, left -100px bottom 250px';
            pageHeadingSize.value = 'h1-large';
            break;
          default:
            backgroundPosition.value = 'center bottom, -200px center';
            pageHeadingSize.value = 'h1-small';
        }
      },
    );

    return {
      pageHeadingSize,
      style,
    };
  },
});
</script>
