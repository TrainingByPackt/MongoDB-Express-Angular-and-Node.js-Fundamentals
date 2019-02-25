import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
const routes: Routes = [
  {
    path: 'blog',
    loadChildren: './blog-home/blog-home.module#BlogHomeModule',
    data: { animation: 'HomePage' }
  },
  {
    path: 'blog/post/:id',
    loadChildren: './view-post/view-post.module#ViewPostModule',
    data: { animation: 'PostPage' }
  },
  {
    path: 'blog/edit/:id',
    loadChildren: './edit/edit.module#EditModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule',
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'blog', pathMatch: 'full'
  }

  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
