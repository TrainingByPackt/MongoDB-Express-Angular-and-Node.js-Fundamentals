import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule'
  },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule'
  },

  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}