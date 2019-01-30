
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { CreateComponent } from './create.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let testBedService: ArticleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent,
        TitleHeaderStubComponent ],
        imports: [FormsModule,HttpClientModule,RouterTestingModule ],
        providers: [ArticleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.get(ArticleService);
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({ selector: 'app-title-header', template: '' })
class TitleHeaderStubComponent { }
