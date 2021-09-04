/* eslint-disable @typescript-eslint/no-unused-vars */
import MainLogo from '../MainLogo.vue';

export default {
  component: MainLogo,
  title: 'Shared/MainLogo',
};

const Template = (args, { argTypes }) => ({
  components: { MainLogo },
  props: Object.keys(argTypes),
  template: '<MainLogo v-bind="$props" />',
});

export const Default = Template.bind({});

export const Smaller = Template.bind({});
Smaller.args = {
  smaller: true,
};
