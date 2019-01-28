import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'userslist',
    loadChildren: './users-list/users-list.module#UsersListModule'
  },
  {
    path: 'userslist/:id',
    loadChildren: './users-detail/users-detail.module#UsersDetailModule'
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
