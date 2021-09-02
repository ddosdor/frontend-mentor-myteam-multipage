<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <LayoutTheHeader />
    <LayoutTheMain class="flex-grow">
      <Nuxt />
    </LayoutTheMain>
    <LazyLayoutTheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>
