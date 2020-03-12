import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagetComponent } from './components/managet/managet.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent },
  {path:'editpost', component:EditComponent},
  {path:'manage', component:ManagetComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
