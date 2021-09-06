<template>
  <ul class="SuccessStoriesList space-y-12 flex flex-col
             lg:flex-row lg:space-y-0 lg:space-x-[1.875rem]
            "
  >
    <li v-for="(storie, index) in successStoriesListData"
        :key="`storie-index-${index}`"
        class="flex flex-col items-center"
    >
      <SharedUiBlockquote class="mb-4">
        "{{ storie.quote }}"
      </SharedUiBlockquote>
      <label class="block font-bold leading-28 text-secondary-raptureBlue">
        {{ storie.authorName }}
      </label>
      <label class="block text-[0.813rem] leading-[18px] font-medium italic">
        {{ storie.authorJobPosition }}
      </label>
      <SharedUiAvatar class="mt-4"
                      :src="storie.authorAvatar"
                      smaller
                      :alt="storie.authorName"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import successStoriesListData from '@/data/success-stories.json';

export default defineComponent({
  name: 'SuccessStoriesList',
  setup() {
    return {
      successStoriesListData,
    };
  },
});
</script>
