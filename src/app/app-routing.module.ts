import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/add-course-page/add-course-page.component';
import { isAuthGuard } from './guards/isAuth.guard';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesBlockComponent } from './pages-block/pages-block.component';


const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: PagesBlockComponent, canActivate: [isAuthGuard] },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [isAuthGuard] },
  { path: 'courses/:id', component: AddCoursePageComponent, canActivate: [isAuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
