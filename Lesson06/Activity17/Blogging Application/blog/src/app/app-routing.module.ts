import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
=======
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
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
<<<<<<< HEAD
    loadChildren: './edit/edit.module#EditModule',
    canActivate: [AuthGuard]
=======
    loadChildren: './edit/edit.module#EditModule'
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
<<<<<<< HEAD
    loadChildren: './register/register.module#RegisterModule',
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule',
    canActivate: [AuthGuard]
=======
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule'
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
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
