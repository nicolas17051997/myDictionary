﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService } from '../services/authentication.service';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authenticationService.currentUserValue;
        // if (localStorage.getItem('currentUser')) {
        //     console.log("current user");
        //     // logged in so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            console.log(true);
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        console.log(false);
        return false;
    }
}