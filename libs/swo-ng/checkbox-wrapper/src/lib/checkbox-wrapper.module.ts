import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PyraCheckboxWrapperComponent } from './pyra-checkbox-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PyraCheckboxWrapperComponent],
  exports: [PyraCheckboxWrapperComponent]
})
export class CheckboxWrapperModule {
}
