import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressBarComponent} from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let comp: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
      .configureTestingModule({
        imports: [],
        declarations: [ProgressBarComponent],
        providers: []
      });

    fixture = TestBed.createComponent(ProgressBarComponent);

    comp = fixture.componentInstance;
  });

  it('should create a component', () => {
    expect(comp).not.toBeNull();
  });

  it('should set progress to 0 if progress less than 0', (done) => {
    comp.progress = -10;

    comp.progress$.subscribe(p => {
      expect(p).toEqual(0);
      done();
    });
  });

  it('should set progress to 0 if progress more than 100', (done) => {
    comp.progress = 150;

    comp.progress$.subscribe(p => {
      expect(p).toEqual(100);
      done();
    });
  });

  it('should set severityClass to "progress"', () => {
    expect(comp.severityClass).toEqual('progress');
  });

  it('should set severityClass to "progress progress--high"', () => {
    comp.severity = 'High';

    expect(comp.severityClass).toContain('--high');
  });

  it('should set severityClass to "progress progress--medium"', () => {
    comp.severity = 'Medium';

    expect(comp.severityClass).toContain('--medium');
  });

  it('should set severityClass to "progress progress--medium show-lighten-bg"', () => {
    comp.severity = 'Medium';

    expect(comp.severityClass).toContain('--medium show-lighten-bg');
  });

  it('should set severityClass to "progress progress--medium"', () => {
    comp.showLightenBackgroundOnZero = false;
    comp.severity = 'Medium';

    expect(comp.severityClass).toContain('--medium');
    expect(comp.severityClass).not.toContain('show-lighten-bg');
  });

});
