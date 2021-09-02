<template>
  <div class="container">
    <SharedMainLogo />
    <SharedMainLogo smaller />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HomePage',
});
</script>
