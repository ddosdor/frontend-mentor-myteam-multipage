<template>
  <div class="UiDivider w-full">
    <div class="w-[50px] h-[4px]"
         :class="{'bg-primary-lightCoral': coral, 'bg-secondary-raptureBlue': blue}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiDivider',
  props: {
    coral: Boolean,
    blue: Boolean,
  },
});
</script>
