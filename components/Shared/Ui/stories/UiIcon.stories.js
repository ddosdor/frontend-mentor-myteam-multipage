/* eslint-disable @typescript-eslint/no-unused-vars */
import UiIcon from '../UiIcon.vue';

export default {
  component: UiIcon,
  title: 'Shared/Ui/UiIcon',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiIcon },
  props: Object.keys(argTypes),
  template: '<UiIcon v-bind="$props" />',
});

export const Plus = Template.bind({});
Plus.args = {
  plus: true,
};

export const X = Template.bind({});
X.args = {
  x: true,
};

export const Hamburger = Template.bind({});
Hamburger.args = {
  hamburger: true,
};
