<template>
  <ul class="BenefitsList space-y-12 flex flex-col">
    <li v-for="(benefit, index) in benefitsList"
        :key="`benefit-index-${index}`"
        class="flex flex-col items-center
               md:flex-row md:space-x-[1.438rem]
        "
    >
      <SharedUiFancyIcon :[benefit.icon]="true"
                         class="mb-4 flex-shrink-0"
      />
      <div class="flex flex-col items-center space-y-2
                  md:items-start
                 "
      >
        <SharedUiHeading h3
                         class="text-primary-lightCoral"
        >
          {{ benefit.name }}
        </SharedUiHeading>
        <SharedUtilitiesTextContentWrapper smaller
                                           class="opacity-80"
        >
          {{ benefit.description }}
        </SharedUtilitiesTextContentWrapper>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import benefitsList from '@/data/benefits.json';

export default defineComponent({
  name: 'BenefitsList',
  setup() {
    return { benefitsList };
  },
});
</script>
