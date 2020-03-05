import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ManagementAddminComponent } from './components/management-addmin/management-addmin.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  
  // {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent},
  // {path:'createpost', component:AddPostComponent, canActivate:[AuthGuard]},
  {path:'createpost', component:AddPostComponent},
  // {path:'admin', component:ManagementAddminComponent, canActivate:[AuthGuard]},
  {path:'admin', component:ManagementAddminComponent},
  {path:'edit', component:EditPostComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
