import { Story, Meta } from '@storybook/react';
import {
  SwoReactCheckboxWrapper,
  SwoReactCheckboxWrapperProps,
} from './swo-react-checkbox-wrapper';

export default {
  component: SwoReactCheckboxWrapper,
  title: 'SwoReactCheckboxWrapper',
} as Meta;

const Template: Story<SwoReactCheckboxWrapperProps> = (args) => (
  <SwoReactCheckboxWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  radio: false,
  indeterminate: false,
};
