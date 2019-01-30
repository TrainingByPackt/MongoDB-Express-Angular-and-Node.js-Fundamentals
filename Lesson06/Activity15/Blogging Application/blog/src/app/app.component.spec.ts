import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, OnInit, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        RouterOutletStubComponent,
        FooterStubComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a link to /', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/';
    });
    expect(index).toBeGreaterThanOrEqual(-1);
  });
});

