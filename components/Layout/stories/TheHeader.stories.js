import TheHeader from '../TheHeader.vue';

export default {
  component: TheHeader,
  title: 'Layout/TheHeader',
};

export const Default = () => ({
  components: { TheHeader },
  template: '<TheHeader />',
});
