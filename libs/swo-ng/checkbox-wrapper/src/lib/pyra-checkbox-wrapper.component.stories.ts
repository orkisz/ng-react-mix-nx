import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PyraCheckboxWrapperComponent } from './pyra-checkbox-wrapper.component';

export default {
  title: 'PyraCheckboxWrapperComponent',
  component: PyraCheckboxWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule
      ]
    })
  ]
} as Meta<PyraCheckboxWrapperComponent>;

const CheckboxTemplate: Story<PyraCheckboxWrapperComponent> = (args: PyraCheckboxWrapperComponent) => ({
  template: `<pyra-checkbox-wrapper>
    <input type='checkbox'>
    This is an input
</pyra-checkbox-wrapper>`,
  props: args
});


export const Primary: Story<PyraCheckboxWrapperComponent> = CheckboxTemplate.bind({});
Primary.args = {
  radio: false,
  indeterminate: false
};
Primary.storyName = 'Checkbox';

const RadioTemplate: Story<PyraCheckboxWrapperComponent> = (args: PyraCheckboxWrapperComponent) => ({
  template: `<form [formGroup]='fg'>
<pyra-checkbox-wrapper>
    <input type='radio' value='1' formControlName='r'>
    This is an input 1
</pyra-checkbox-wrapper>
<pyra-checkbox-wrapper>
    <input type='radio' value='2' formControlName='r'>
    This is an input 2
</pyra-checkbox-wrapper>
</form>`,
  props: {
    fg: new FormGroup({
      r: new FormControl('1')
    }),
    ...args
  }
});


export const Radio: Story<PyraCheckboxWrapperComponent> = RadioTemplate.bind({
});
Radio.args = {
  radio: true,
  indeterminate: false
};
