/* eslint-disable @typescript-eslint/no-unused-vars */
import UiAvatar from '../UiAvatar.vue';

export default {
  component: UiAvatar,
  title: 'Shared/Ui/UiAvatar',
  args: {
    src: '/avatars/avatar-kady.jpg',
    alt: 'Avatar description',
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiAvatar },
  props: Object.keys(argTypes),
  template: '<UiAvatar v-bind="$props" />',
});

export const Default = Template.bind({});

export const Smaller = Template.bind({});
Smaller.args = {
  smaller: true,
};
