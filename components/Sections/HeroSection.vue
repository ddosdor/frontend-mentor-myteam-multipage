<template>
  <section class="HeroSection relative pt-8 pb-[12.313rem]
                  md:pb-64
                 "
  >
    <SharedUtilitiesSectionContainerWrapper class="container flex flex-col items-center
                                                   lg:flex-row
                                                  "
    >
      <SharedUiHeading h1
                       class="!w-[240px] mb-[1.125rem] flex-shrink-0
                              md:!w-[340px] md:text-center md:mb-6
                              lg:!w-[620px] lg:text-left lg:mb-0 lg:!text-[100px]
                       "
      >
        <span>Find the best</span>
        <span class="text-primary-lightCoral">talent</span>
      </SharedUiHeading>
      <div class="lg:ml-auto lg:w-[445px]">
        <SharedUiDivider blue
                         class="hidden lg:block lg:mb-[4.938rem]"
        />
        <SharedUtilitiesTextContentWrapper class="md:text-center lg:text-left">
          Finding the right people and building high performing teams can be hard.
          Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
        </SharedUtilitiesTextContentWrapper>
      </div>
    </SharedUtilitiesSectionContainerWrapper>

    <div class="absolute w-full left-0 bottom-0 flex justify-center -z-1
                lg:justify-end lg:pr-[165px]
               "
    >
      <svg xmlns="http://www.w3.org/2000/svg"
           width="358"
           height="100"
      ><g fill="none"
          fill-rule="evenodd"
      ><circle cx="100"
               cy="100"
               r="100"
               fill="#2C6269"
      /><path fill="#012F34"
              d="M258 0c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100S202.772
                0 258 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
      /><path fill="#79C8C7"
              d="M358 43h-43V0h43z"
      /><path fill="#F67E7E"
              d="M233.514 0c55.228 0 100 44.772 100 100s-44.772 100-100 100c-55.229
              0-100-44.772-100-100s44.771-100 100-100zm0 67c-18.226 0-33 14.775-33 33s14.774
              33 33 33c18.225 0 33-14.775 33-33s-14.775-33-33-33z"
      /><path fill="#79C8C7"
              d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
      /></g></svg>
    </div>

    <div class="hidden absolute left-[-100px] bottom-[250px] -z-1
                lg:block
               "
    >
      <svg xmlns="http://www.w3.org/2000/svg"
           width="200"
           height="200"
      ><g fill="none"
          fill-rule="evenodd"
      ><path fill="#79C8C7"
             d="M100 200h100V100H100z"
      /><path fill="#012F34"
              d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0
              100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
      /><path fill="#F67E7E"
              d="M196 196v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7
              0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7
              0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7
              0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14
              0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7
              0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7
              0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
      /></g></svg>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HeroSection',
});
</script>
