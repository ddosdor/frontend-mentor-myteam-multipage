<template>
  <main class="TheMain">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    // component setup
  },
});
</script>
