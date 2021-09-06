<template>
  <div class="SectionContainerWrapper container md:px-[3.625rem] lg:px-0">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SectionContainerWrapper',
});
</script>
