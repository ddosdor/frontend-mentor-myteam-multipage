<template>
  <client-only>
    <NuxtImg src="/logo.svg"
             :width="width"
             :height="height"
             alt="myteam logo"
    />
  </client-only>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

export default defineComponent({
  name: 'MainLogo',
  props: {
    /**
     * Set smaller logo than default. This works only in tablet and mobile devices
     */
    smaller: Boolean,
  },
  setup(props) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const widthSmaller = props.smaller ? '96px' : '128px';
    const heightSmaller = props.smaller ? '24px' : '32px';

    return {
      width: computed(() => (breakpoints.smaller('lg').value ? widthSmaller : '160px')),
      height: computed(() => (breakpoints.smaller('lg').value ? heightSmaller : '40px')),
    };
  },
});
</script>
