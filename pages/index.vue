<template>
  <div>
    <h1 class="text-[100px] leading-100">
      Quick waltz
    </h1>
    <h1>
      Grabs quick waltz
    </h1>
    <h2>Jived fox nymph grabs quick waltz</h2>
    <h3>Jived fox nymph grabs quick waltz</h3>
    <span class="ui-as-link">This is link</span>
    <div class="p-20 space-y-2">
      <h4>Primary</h4>
      <div class="flex space-x-4">
        <SharedUiButton>
          contact us
        </SharedUiButton>
        <SharedUiButton disabled>
          contact us
        </SharedUiButton>
      </div>
      <h4>Primary dark</h4>
      <div class="flex space-x-4 bg-primary-white">
        <SharedUiButton primary-dark>
          contact us
        </SharedUiButton>
        <SharedUiButton primary-dark
                        disabled
        >
          contact us
        </SharedUiButton>
      </div>
      <h3>Secondary</h3>
      <div class="flex space-x-4">
        <SharedUiButton secondary>
          contact us
        </SharedUiButton>
        <SharedUiButton secondary
                        disabled
        >
          constact us
        </SharedUiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HomePage',
});
</script>
