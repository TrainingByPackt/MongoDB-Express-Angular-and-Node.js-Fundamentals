import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogHomeComponent } from './blog-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticleService } from '../service/article.service';



describe('BlogHomeComponent', () => {
  let component: BlogHomeComponent;
  let fixture: ComponentFixture<BlogHomeComponent>;
  let testBedService: ArticleService;

  beforeEach(async(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [BlogHomeComponent, TitleHeaderStubComponent],
      providers: [ArticleService],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
     // create component and test fixture
    fixture = TestBed.createComponent(BlogHomeComponent);
    // AuthService provided to the TestBed
    testBedService = TestBed.get(ArticleService);
    // get test component from the fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([ArticleService], (injectService: ArticleService) => {
      expect(injectService).toBe(testBedService);
    })
  );
});

@Component({ selector: 'app-title-header', template: '' })
class TitleHeaderStubComponent { }
