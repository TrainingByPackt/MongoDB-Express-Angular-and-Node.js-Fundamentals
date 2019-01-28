import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacktStudentTemplateFormComponent } from './packt-student-template-form.component';

describe('PacktStudentTemplateFormComponent', () => {
  let component: PacktStudentTemplateFormComponent;
  let fixture: ComponentFixture<PacktStudentTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacktStudentTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacktStudentTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
