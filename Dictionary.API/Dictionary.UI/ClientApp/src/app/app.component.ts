import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedValue: string;
  currentUser: User;
  title = 'ClientApp';

  constructor(private router: Router,
    private authenticationService: AuthenticationService){  }
    

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

