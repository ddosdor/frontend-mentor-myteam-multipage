<template>
  <section class="CtaSection bg-primary-lightCoral flex flex-col items-center py-[5.25rem] px-5
                  md:px-[6.063rem] md:flex-row md:py-[4.75rem]
                  lg:px-[16.25rem]
                  "
           :style="style"
  >
    <SharedUiHeading h2
                     class="text-secondary-sacramentoStateGreen mb-6 flex-1
                            md:mb-0
                           "
    >
      Ready to get started?
    </SharedUiHeading>
    <SharedUiButton primary-dark>
      contact us
    </SharedUiButton>
  </section>
</template>

<script lang="ts">
import { toRefs, defineComponent, watchEffect } from '@nuxtjs/composition-api';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'CtaSection',
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const { style } = useBackgroundImage('bg-pattern-cta');
    const { backgroundPosition } = toRefs(style);

    watchEffect(
      () => {
        switch (true) {
          case breakpoints.smaller('md').value: backgroundPosition.value = 'left 180px'; break;
          case breakpoints.between('md', 'lg').value: backgroundPosition.value = 'left 78px'; break;
          default: backgroundPosition.value = 'left bottom';
        }
      },
    );

    return {
      style,
    };
  },
});
</script>
