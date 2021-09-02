import MainNavigation from '../MainNavigation.vue';

export default {
  component: MainNavigation,
  title: 'Shared/MainNavigation',
};

const Template = (args, { argTypes }) => ({
  components: { MainNavigation },
  props: Object.keys(argTypes),
  template: '<MainNavigation v-bind="$props" />',
});

export const Default = Template.bind({});

export const Smaller = Template.bind({});
Smaller.args = {
  smaller: true,
};
