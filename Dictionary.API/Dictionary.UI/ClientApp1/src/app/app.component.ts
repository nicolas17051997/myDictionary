import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  title = 'ClientApp1';

  constructor(public authenticService: AuthenticationService,
    private router: Router
    ){}

  logout() {
    this.authenticService.logout();
    this.router.navigate(['/login']);
  }
}
