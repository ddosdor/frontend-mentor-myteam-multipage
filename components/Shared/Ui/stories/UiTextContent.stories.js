/* eslint-disable @typescript-eslint/no-unused-vars */
import UiTextContent from '../UiTextContent.vue';

export default {
  component: UiTextContent,
  title: 'Shared/Ui/UiTextContent',
  args: {
    slotContent: `
      Sed egestas, ante et vulputate volutpat, eros pede semper est,
      vitae luctus metus libero eu augue. Morbi purus libero,
      faucibus adipiscing, commodo quis, gravida id, est.
      Sed lectus. Praesent elementum hendrerit tortor.
      Sed semper lorem at felis. Vestibulum volutpat,
      lacus a ultrices sagittis, mi neque. Orbi purus libero,
      faucibus adipiscing, commodo quis, gravida id, est.
      Sed lectus.Sed egestas, ante et vulputate volutpat,
      eros pede sempe.    
    `,
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiTextContent },
  props: Object.keys(argTypes),
  template: `
  <UiTextContent v-bind="$props">
    {{ slotContent }}
  </UiTextContent>`,
});

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  smaller: true,
};
