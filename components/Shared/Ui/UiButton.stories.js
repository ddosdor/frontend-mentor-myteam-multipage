import UiButton from './UiButton.vue';

export default {
  component: UiButton,
  title: 'Shared/Ui/UiButton',
  args: {
    slotContent: 'contact us',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiButton },
  props: Object.keys(argTypes),
  template: `
    <UiButton v-bind="$props">
      {{ slotContent }}
    </UiButton>`,
});

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  primaryDark: true,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  disabled: false,
};
