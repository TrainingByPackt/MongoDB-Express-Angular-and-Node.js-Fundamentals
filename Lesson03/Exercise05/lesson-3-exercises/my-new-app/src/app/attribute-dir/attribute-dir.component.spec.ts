import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirComponent } from './attribute-dir.component';

describe('AttributeDirComponent', () => {
  let component: AttributeDirComponent;
  let fixture: ComponentFixture<AttributeDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
