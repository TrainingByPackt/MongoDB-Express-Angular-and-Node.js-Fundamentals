import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacktSimpleReactiveFormComponent } from './packt-simple-reactive-form.component';

describe('PacktSimpleReactiveFormComponent', () => {
  let component: PacktSimpleReactiveFormComponent;
  let fixture: ComponentFixture<PacktSimpleReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacktSimpleReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacktSimpleReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
