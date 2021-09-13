<template>
  <section class="OurClientsSection bg-secondary-sacramentoStateGreen pb-[5.375rem] pt-[5.625rem]
                  md:py-[6.25rem]
                  lg:py-[8.75rem]
                 "
           :style="style"
  >
    <div class="container">
      <SharedUiHeading h2
                       class="mb-16
                              md:!text-center md:mb-12
                             "
      >
        Some of our clients
      </SharedUiHeading>
      <SectionsPartialsClientsLogosList />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, watchEffect } from '@nuxtjs/composition-api';

import { useScreenBreakpoints } from '@/composables/useScreenBreakpoints';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'OurClientsSection',
  setup() {
    const breakpoints = useScreenBreakpoints();
    const { style } = useBackgroundImage('bg-pattern-our-clients');
    const { backgroundPosition } = toRefs(style);

    watchEffect(
      () => {
        switch (true) {
          case breakpoints.between('md', 'lg').value: backgroundPosition.value = 'top -100px left'; break;
          case breakpoints.greater('lg').value: backgroundPosition.value = 'top 180px'; break;
          default: backgroundPosition.value = 'top -100px left -100px';
        }
      },
    );

    return {
      style,
    };
  },
});
</script>
