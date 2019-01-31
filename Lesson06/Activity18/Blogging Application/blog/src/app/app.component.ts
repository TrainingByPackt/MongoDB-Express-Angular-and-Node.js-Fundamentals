import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { slideInAnimation } from './animation'

@Component({
  selector: 'app-root',
  animations: [
    slideInAnimation
    // animation triggers go here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blogging App';
  constructor() { }

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

}