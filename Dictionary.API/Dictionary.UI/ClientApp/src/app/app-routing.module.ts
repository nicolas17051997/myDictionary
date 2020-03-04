import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ManagmentAdComponent } from './components/managment-ad/managment-ad.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'add-post', component: AddPostComponent, canActivate:[AuthGuard]},
  {path:'admin', component: ManagmentAdComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
