<template>
  <nav class="MainNavigation"
       :class=" {'text-sm leading-25': smaller }"
  >
    <ul class="flex space-x-9"
        :class="[{ 'space-x-6': smaller }, additionalClass]"
    >
      <li>
        <SharedUiLink href="/">
          home
        </SharedUiLink>
      </li>
      <li>
        <SharedUiLink href="/about">
          about
        </SharedUiLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MainNavigation',
  props: {
    smaller: Boolean,
    /**
     * Add additinal class to <ul> element
     */
    additionalClass: {
      type: String,
      default: null,
    },
  },
});
</script>
