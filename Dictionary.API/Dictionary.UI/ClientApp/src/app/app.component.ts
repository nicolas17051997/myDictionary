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
    clicks: Click[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
interface Click {
  value: string;
  viewValue: string;
}
