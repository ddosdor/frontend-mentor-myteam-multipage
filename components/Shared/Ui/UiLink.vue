<template>
  <component :is="linkType"
             class="UiLink transition-colors duration-150 cursor-pointer
                    hover:text-primary-lightCoral
                    focus:text-primary-lightCoral
                   "
             v-bind="$attrs"
             :[linkKey]="href"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiLink',
  inheritAttrs: false,
  props: {
    /**
     * Set link as external link. Default this component will be wrapper to NuxtLink
     */
    external: Boolean,
    href: {
      type: String,
      default: '#',
    },
  },
  setup(props) {
    return {
      linkKey: props.external ? 'href' : 'to',
      linkType: props.external ? 'a' : 'NuxtLink',
    };
  },
});
</script>
