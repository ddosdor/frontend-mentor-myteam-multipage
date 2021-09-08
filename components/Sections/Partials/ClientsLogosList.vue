<template>
  <ul class="ClientsLogosList flex flex-col items-center space-y-14 w-full
             md:flex-row md:space-y-0 md:justify-between
            "
  >
    <li v-for="(client, index) in clients"
        :key="`clients-index-${index}`"
    >
      <NuxtPicture :src="client.logo.src"
                   :sizes="`
                  small:${client.logo.sizes.sm}
                  medium:${client.logo.sizes.md}
                  large:${client.logo.sizes.lg}
                  `"
                   :alt="`${client.name} logo`"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import clients from '@/data/clients.json';

export default defineComponent({
  name: 'ClientsLogosList',
  setup() {
    return { clients };
  },
});
</script>
