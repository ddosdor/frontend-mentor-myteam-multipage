/* eslint-disable @typescript-eslint/no-unused-vars */
import UiLink from '../UiLink.vue';

export default {
  component: UiLink,
  title: 'Shared/Ui/UiLink',
  args: {
    slotContent: 'Click here to go to',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiLink },
  props: Object.keys(argTypes),
  template: `
    <UiLink v-bind="$props">
      {{ slotContent }}
    </UiLink>
  `,
});

export const Default = Template.bind({});
