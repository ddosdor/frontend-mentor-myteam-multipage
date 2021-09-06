<template>
  <header class="TheHeader py-12 lg:py-[4.563rem]">
    <div class="container flex flex-row items-center">
      <SharedMainLogo />
      <SharedMainNavigation class="hidden md:block md:ml-20" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    // component setup
  },
});
</script>
