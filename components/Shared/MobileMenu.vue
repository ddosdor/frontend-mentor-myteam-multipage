<template>
  <div class="MobileMenu z-10">
    <button @click="toggleMenu">
      <SharedUiIcon hamburger
                    class="block"
      />
    </button>
    <transition name="fade">
      <div v-if="isMenuVisible"
           class="fixed top-0 left-0 w-full h-full"
      >
        <div class="absolute w-full h-full bg-[#000] opacity-50" />
        <div class="z-10 relative h-full w-[255px] ml-auto bg-secondary-policeBlue"
             :style="style"
        >
          <div class="py-12 px-12 flex flex-col">
            <button class="ml-auto relative right-[-24px] top-[5px]"
                    @click="toggleMenu"
            >
              <SharedUiIcon x
                            class="block"
              />
            </button>
            <SharedMainNavigation additional-class="flex-col space-x-0 space-y-6 mt-[2.438rem] mb-9"
                                  @click.native="toggleMenu"
            />
            <SharedUiButton as-nuxt-link
                            to="/contact-us"
                            @click.native="toggleMenu"
            >
              contact us
            </SharedUiButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { useBackgroundImage } from '@/composables/useBackgroundImages';

export default defineComponent({
  name: 'MobileMenu',
  setup() {
    const isMenuVisible = ref<Boolean>(false);
    function toggleMenu() {
      isMenuVisible.value = !isMenuVisible.value;
    }

    const { style } = useBackgroundImage('bg-pattern-mobile-menu', 'right -100px bottom');

    return {
      isMenuVisible,
      toggleMenu,
      style,
    };
  },
});
</script>
