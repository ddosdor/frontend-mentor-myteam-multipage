/* eslint-disable @typescript-eslint/no-unused-vars */
import UiHeading from '../UiHeading.vue';

export default {
  component: UiHeading,
  title: 'Shared/Ui/UiHeading',
  args: {
    slotContent: 'Grabs quick waltz',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiHeading },
  props: Object.keys(argTypes),
  template: `
  <UiHeading v-bind="$props">
    {{ slotContent }}
  </UiHeading>`,
});

export const Default = Template.bind({});

export const h1 = Template.bind({});
h1.args = {
  h1: true,
};

export const h2 = Template.bind({});
h2.args = {
  h2: true,
};

export const h3 = Template.bind({});
h3.args = {
  h3: true,
};
