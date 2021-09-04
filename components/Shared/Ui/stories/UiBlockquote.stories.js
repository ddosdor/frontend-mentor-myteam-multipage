/* eslint-disable @typescript-eslint/no-unused-vars */
import UiBlockquote from '../UiBlockquote.vue';

export default {
  component: UiBlockquote,
  title: 'Shared/Ui/UiBlockquote',
  args: {
    slotContent: `
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a mauris eget sem facilisis ultrices vitae nec nisl.
      Proin ullamcorper sodales nisi at fringilla. Donec consectetur nisi eu massa euismod porta.
      Suspendisse quis ligula justo. Aliquam vestibulum ullamcorper ex, vel semper turpis porta aliquet."
    `,
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args, { argTypes }) => ({
  components: { UiBlockquote },
  props: Object.keys(argTypes),
  template: `
    <UiBlockquote v-bind="$props">
      {{ slotContent }}
    </UiBlockquote>
  `,
});
