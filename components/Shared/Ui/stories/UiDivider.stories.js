/* eslint-disable @typescript-eslint/no-unused-vars */
import UiDivider from '../UiDivider.vue';

export default {
  component: UiDivider,
  title: 'Shared/Ui/UiDivider',
  parameters: {
    layout: 'centered',
  },
};

const Default = (args, { argTypes }) => ({
  components: { UiDivider },
  props: Object.keys(argTypes),
  template: '<UiDivider v-bind="$props" />',
});

export const Coral = Default.bind({});
Coral.args = {
  coral: true,
  blue: false,
};

export const Blue = Default.bind({});
Blue.args = {
  coral: false,
  blue: true,
};
