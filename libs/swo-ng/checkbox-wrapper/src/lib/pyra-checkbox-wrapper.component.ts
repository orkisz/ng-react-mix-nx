import { Component, Input } from '@angular/core';

@Component({
  selector: 'pyra-checkbox-wrapper',
  styleUrls: ['pyra-checkbox-wrapper.component.scss'],
  templateUrl: 'pyra-checkbox-wrapper.component.html',
  preserveWhitespaces: false
})
export class PyraCheckboxWrapperComponent {
  @Input() radio: boolean;
  @Input() indeterminate: boolean;
}
