import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testdialog1Component } from './testdialog1.component';

describe('Testdialog1Component', () => {
  let component: Testdialog1Component;
  let fixture: ComponentFixture<Testdialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testdialog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testdialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
