import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  WrapperTestCheckboxContentOnlyComponent,
  WrapperTestTwoInputsAsContentComponent
} from '../../test-helpers/test.components';
import { PyraCheckboxWrapperComponent } from './pyra-checkbox-wrapper.component';

describe('PyraCheckboxWrapperComponent', () => {
  beforeEach(waitForAsync(() => {
    return TestBed.configureTestingModule({
      declarations: [
        PyraCheckboxWrapperComponent,
        WrapperTestCheckboxContentOnlyComponent,
        WrapperTestTwoInputsAsContentComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('creates a component', () => {
    const fixture = TestBed.createComponent(PyraCheckboxWrapperComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeDefined();
  });

  it('puts input of type checkbox as first child element of label', () => {
    const fixture = TestBed.createComponent(WrapperTestCheckboxContentOnlyComponent);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label.children.length).toEqual(3);
    expect(label.children[0].tagName).toEqual('INPUT');
  });

  // it('puts input of type checkbox as first child element of label and all other items as last children', () => {
  //   const fixture = TestBed.createComponent(WrapperTestTwoInputsAsContentComponent);
  //   fixture.detectChanges();
  //   const label = fixture.nativeElement.querySelector('label');
  //   expect(label.children.length).toEqual(3);
  //   expect(label.children[0].tagName).toEqual('INPUT');
  //   expect(label.children[0].type).toEqual('checkbox');
  //   expect(label.children[2].tagName).toEqual('SPAN');
  //   expect(label.children[2].children[0].tagName).toEqual('INPUT');
  //   expect(label.children[2].children[0].type).toEqual('text');
  //   expect(label.innerText.trim()).toEqual('A label text');
  // });
});
