/* eslint-disable @typescript-eslint/no-unused-vars */
import HeroSection from '../HeroSection.vue';

export default {
  component: HeroSection,
  title: 'Sections/HeroSection',
};

export const Default = () => ({
  components: { HeroSection },
  template: '<HeroSection />',
});
