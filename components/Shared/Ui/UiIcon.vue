<template>
  <svg class="UiIcon h-6 w-6"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       :class="[dark ? 'text-secondary-sacramentoStateGreen' : 'text-primary-white']"
  >
    <path v-if="plus"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M12 4v16m8-8H4"
    />

    <path v-if="x"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M6 18L18 6M6 6l12 12"
    />

    <path v-if="hamburger"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiIcon',
  props: {
    plus: Boolean,
    x: Boolean,
    hamburger: Boolean,
    dark: Boolean,
  },
});
</script>
