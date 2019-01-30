import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, Validators } from '@angular/forms'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedService: AuthService;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,TitleHeaderStubComponent ],
      providers: [AuthService, { provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.get(AuthService);
    component.loginForm = formBuilder.group({    });
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-title-header', template: '' })
class TitleHeaderStubComponent { }
