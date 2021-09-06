import SuccessStoriesList from '../SuccessStoriesList.vue';

export default {
  component: SuccessStoriesList,
  title: 'Sections/Partials/SuccessStoriesList',
};

export const Default = () => ({
  components: { SuccessStoriesList },
  template: '<SuccessStoriesList />',
});
