import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes : Routes =
[ { path: ' ', pathMatch: 'full', redirectTo: '/home', data: {animation: 'HomeComponent'} },
 { path: 'about', component: AboutComponent, data: {animation: 'AboutComponent'} },
 { path: 'home', component: HomeComponent, data: {animation: 'HomeComponent'} }
	]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
