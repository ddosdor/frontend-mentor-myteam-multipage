/* eslint-disable @typescript-eslint/no-unused-vars */
import TextContentWrapper from '../TextContentWrapper.vue';

export default {
  component: TextContentWrapper,
  title: 'Shared/Utilities/TextContentWrapper',
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
  components: { TextContentWrapper },
  props: Object.keys(argTypes),
  template: `
  <TextContentWrapper v-bind="$props">
    {{ slotContent }}
  </TextContentWrapper>`,
});

export const Default = Template.bind({});

export const Smaller = Template.bind({});
Smaller.args = {
  smaller: true,
};
