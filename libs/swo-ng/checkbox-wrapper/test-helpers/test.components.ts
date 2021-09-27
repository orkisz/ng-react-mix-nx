// tslint:disable:component-selector
import { Component } from '@angular/core';

@Component({
  selector: 'wrapper-test-checkbox-content-only',
  template: `<pyra-checkbox-wrapper>
              <input type="checkbox"/>
             </pyra-checkbox-wrapper>`
})
export class WrapperTestCheckboxContentOnlyComponent { }

@Component({
  selector: 'wrapper-test-two-inputs-as-content',
  template: `<pyra-checkbox-wrapper>
              <input type="checkbox"/>
              <input type="text"/>
              A label text
            </pyra-checkbox-wrapper>`
})
export class WrapperTestTwoInputsAsContentComponent { }

@Component({
  selector: 'toggle-test-checkbox-content-only',
  template: `<pyra-checkbox-toggle>
    <input type="checkbox"/>
  </pyra-checkbox-toggle>`
})
export class ToggleTestCheckboxContentOnlyComponent { }

@Component({
  selector: 'toggle-test-two-inputs-as-content',
  template: `<pyra-checkbox-toggle>
    <input type="checkbox"/>
    <input type="text"/>
    A label text
  </pyra-checkbox-toggle>`
})
export class ToggleTestTwoInputsAsContentComponent { }
// tslint:enable:component-selector
