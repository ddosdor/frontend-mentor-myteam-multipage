import BenefitsList from '../BenefitsList.vue';

export default {
  component: BenefitsList,
  title: 'Sections/Partials/BenefitsList',
};

export const Default = () => ({
  components: { BenefitsList },
  template: '<BenefitsList />',
});
