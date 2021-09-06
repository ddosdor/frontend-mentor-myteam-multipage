<template>
  <div class="flex flex-col flex-grow justify-end">
    <SectionsBenefitsSection />
    <SectionsSuccessStoriesSection />
    <SectionsCtaSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HomePage',
});
</script>
