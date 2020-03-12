import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes, Router  } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JwtInterceptor } from './helper/jwt.interseptor';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagetComponent } from './components/managet/managet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ManagetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
    // 
    // MDBBootstrapModule.forRoot(),
    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
