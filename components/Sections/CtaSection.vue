<template>
  <section class="CtaSection bg-primary-lightCoral py-[5.25rem]">
    <div class="container flex flex-col items-center">
      <SharedUiHeading h2
                       class="text-secondary-sacramentoStateGreen mb-6"
      >
        Ready to get started?
      </SharedUiHeading>
      <SharedUiButton primary-dark>
        contact us
      </SharedUiButton>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CtaSection',
  setup() {
    // component setup
  },
});
</script>
