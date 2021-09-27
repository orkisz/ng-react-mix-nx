import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PyraCheckboxWrapperComponent } from './pyra-checkbox-wrapper.component';

export default {
  title: 'PyraCheckboxWrapperComponent',
  component: PyraCheckboxWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PyraCheckboxWrapperComponent>;

const Template: Story<PyraCheckboxWrapperComponent> = (args: PyraCheckboxWrapperComponent) => ({
  component: PyraCheckboxWrapperComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    radio:  false,
    indeterminate:  false,
}