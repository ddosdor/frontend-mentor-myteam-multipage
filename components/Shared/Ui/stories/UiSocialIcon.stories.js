import UiSocialIcon from '../UiSocialIcon.vue';

export default {
  component: UiSocialIcon,
  title: 'Shared/Ui/UiSocialIcon',
  args: {
    hovered: false,
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiSocialIcon },
  props: Object.keys(argTypes),
  template: '<UiSocialIcon v-bind="$props" />',
});

export const Twitter = Template.bind({});
Twitter.args = {
  twitter: true,
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  linkedin: true,
};

export const Pinterest = Template.bind({});
Pinterest.args = {
  pinterest: true,
};

export const Facebook = Template.bind({});
Facebook.args = {
  facebook: true,
};
