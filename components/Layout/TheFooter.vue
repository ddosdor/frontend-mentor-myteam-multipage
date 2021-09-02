<template>
  <footer class="TheFooter bg-secondary-darkGreen">
    <div class="container pt-[4.125rem] pb-16 flex flex-col items-center
                lg:flex-row lg:items-start
               "
    >
      <div class="md:flex md:justify-between md:w-full">
        <div class="flex flex-col items-center
                    md:items-start
                   "
        >
          <SharedMainLogo smaller
                          class="mb-6 md:mb-[3.313rem] lg:mb-[1.563rem]"
          />
          <SharedMainNavigation smaller
                                class="mb-6 lg:mb-0"
          />
        </div>
        <SharedUiTextContent smaller
                             class="opacity-60 mb-10 text-center
                                    md:text-right
                                    lg:mb-0
                                   "
        >
          987  Hillcrest Lane,<br>
          Irvine, CA<br>
          California 92714<br>
          Call Us : 949-833-7432
        </SharedUiTextContent>
      </div>
      <div class="md:flex md:justify-between md:w-full
                  lg:flex-col
                 "
      >
        <div class="flex space-x-4 justify-center mb-4
                    lg:justify-end lg:mb-[3.188rem] lg:w-full
                   "
        >
          <SharedUiSocialIcon facebook />
          <SharedUiSocialIcon pinterest />
          <SharedUiSocialIcon twitter />
        </div>
        <SharedUiTextContent smaller
                             class="opacity-60 lg:text-right"
        >
          Copyright 2020. All Rights Reserved
        </SharedUiTextContent>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TheFooter',
  setup() {
    // component setup
  },
});
</script>
