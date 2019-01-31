import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacktStudentReactiveFormComponent } from './packt-student-reactive-form.component';

describe('PacktStudentReactiveFormComponent', () => {
  let component: PacktStudentReactiveFormComponent;
  let fixture: ComponentFixture<PacktStudentReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacktStudentReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacktStudentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
