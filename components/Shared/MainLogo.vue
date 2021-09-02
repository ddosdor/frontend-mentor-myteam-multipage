<template>
  <client-only>
    <NuxtImg src="/logo.svg"
             :width="width"
             :height="height"
    />
  </client-only>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { useMediaQuery } from '@vueuse/core';

export default defineComponent({
  name: 'MainLogo',
  props: {
    /**
     * Set smaller logo than default. This works only in tablet and mobile devices
     */
    smaller: Boolean,
  },
  setup(props) {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const widthSmaller = props.smaller ? '96px' : '128px';
    const heightSmaller = props.smaller ? '24px' : '32px';

    return {
      isTabletOrMobile,
      width: computed(() => (isTabletOrMobile.value ? widthSmaller : '160px')),
      height: computed(() => (isTabletOrMobile.value ? heightSmaller : '40px')),
    };
  },
});
</script>
