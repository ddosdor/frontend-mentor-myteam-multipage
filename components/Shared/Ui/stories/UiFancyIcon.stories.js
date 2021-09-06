/* eslint-disable @typescript-eslint/no-unused-vars */
import UiFancyIcon from '../UiFancyIcon.vue';

export default {
  component: UiFancyIcon,
  title: 'Shared/Ui/UiFancyIcon',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiFancyIcon },
  props: Object.keys(argTypes),
  template: '<UiFancyIcon v-bind="$props" />',
});

export const Person = Template.bind({});
Person.args = {
  person: true,
};

export const Cog = Template.bind({});
Cog.args = {
  cog: true,
};

export const Chart = Template.bind({});
Chart.args = {
  chart: true,
};
