<template>
  <section class="BenefitsSection bg-secondary-sacramentoStateGreen py-16
                  lg:py-[8.75rem]
                 "
           :style="style"
  >
    <SharedUtilitiesSectionContainerWrapper class="lg:flex lg:flex-row lg:space-x-[7.813rem]">
      <div>
        <SharedUiDivider coral
                         class="mb-8 lg:mb-[3.375rem]"
        />
        <SharedUiHeading h2
                         class="mb-14 !text-left !w-[240px]
                                md:!w-[445px]
                              "
        >
          Build & manage distributed teams like no one else.
        </SharedUiHeading>
      </div>
      <SectionsPartialsBenefitsList class="lg:mt-[3.625rem]" />
    </SharedUtilitiesSectionContainerWrapper>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, watchEffect } from '@nuxtjs/composition-api';

import { useScreenBreakpoints } from '@/composables/useScreenBreakpoints';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'BenefitsSection',
  setup() {
    const breakpoints = useScreenBreakpoints();
    const { style } = useBackgroundImage('bg-pattern-benefits-section');
    const { backgroundPosition } = toRefs(style);

    watchEffect(
      () => {
        switch (true) {
          case breakpoints.smaller('lg').value: backgroundPosition.value = ' right -100px top'; break;
          default: backgroundPosition.value = 'right -100px bottom';
        }
      },
    );

    return {
      style,
    };
  },
});
</script>
