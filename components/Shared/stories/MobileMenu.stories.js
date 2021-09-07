/* eslint-disable @typescript-eslint/no-unused-vars */
import MobileMenu from '../MobileMenu.vue';

export default {
  component: MobileMenu,
  title: 'Shared/MobileMenu',
};

export const Default = () => ({
  components: { MobileMenu },
  template: '<MobileMenu />',
});
