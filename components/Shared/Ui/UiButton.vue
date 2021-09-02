<template>
  <button class="UiButton"
          :class="{
            'UiButton--primary': buttonType === 'primary',
            'UiButton--primaryDark': buttonType === 'primaryDark',
            'UiButton--secondary': buttonType === 'secondary',
          }"
          :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiButton',
  props: {
    primary: Boolean,
    primaryDark: Boolean,
    secondary: Boolean,
    disabled: Boolean,
  },
  setup(props) {
    const buttonType = ref<String>('primary');
    switch (true) {
      case props.primary: buttonType.value = 'primary'; break;
      case props.primaryDark: buttonType.value = 'primaryDark'; break;
      case props.secondary: buttonType.value = 'secondary'; break;
      default: buttonType.value = 'primary';
    }

    return { buttonType };
  },
});
</script>

<style lang="sass" scoped>
.UiButton
  @apply border-2 px-8 rounded-3xl h-12 transition-colors duration-150
  @apply disabled:cursor-not-allowed disabled:opacity-20

  &--primary
    @apply border-primary-white text-primary-white
    @apply hover:bg-primary-white hover:text-primary-midnightGreen
    @apply disabled:bg-transparent disabled:text-primary-white

  &--primaryDark
    @apply border-primary-midnightGreen bg-transparent text-primary-midnightGreen
    @apply hover:bg-primary-midnightGreen hover:border-primary-midnightGreen hover:text-primary-white
    @apply disabled:border-primary-midnightGreen disabled:bg-transparent disabled:text-primary-midnightGreen

  &--secondary
    @apply border-primary-white bg-primary-white text-primary-midnightGreen
    @apply hover:border-secondary-raptureBlue hover:bg-secondary-raptureBlue
    @apply disabled:border-primary-white disabled:bg-primary-white disabled:text-primary-midnightGreen
</style>
