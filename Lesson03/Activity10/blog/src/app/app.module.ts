import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './service/article.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { TitleHeaderComponent } from './title-header/title-header.component';


const appRoutes: Routes = [
  { path: 'blog', component: BlogHomeComponent},
  { path: 'blog/post/:id',  component: ViewPostComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'register',  component: RegisterComponent},
  { path: 'create',  component: CreateComponent},
  { path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    TitleHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }