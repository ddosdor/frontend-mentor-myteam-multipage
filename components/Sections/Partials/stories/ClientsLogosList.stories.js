import ClientsLogosList from '../ClientsLogosList.vue';

export default {
  component: ClientsLogosList,
  title: 'Sections/Partials/ClientsLogosList',
};

export const Default = () => ({
  components: { ClientsLogosList },
  template: '<ClientsLogosList />',
});
