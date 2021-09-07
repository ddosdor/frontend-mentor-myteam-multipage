<template>
  <header class="TheHeader py-12 lg:py-[4.563rem]">
    <div class="container flex flex-row items-center">
      <SharedMainLogo />
      <div class="hidden md:w-full md:flex md:flex-row md:justify-between md:items-center md:ml-12">
        <SharedMainNavigation />
        <SharedUiButton as-nuxt-link
                        to="/contact-us"
        >
          contact us
        </SharedUiButton>
      </div>
      <SharedMobileMenu class="ml-auto md:hidden" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
});
</script>
