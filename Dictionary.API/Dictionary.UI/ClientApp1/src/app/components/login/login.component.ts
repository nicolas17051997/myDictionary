import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import {AuthenticationService} from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm:FormGroup;
  //   loading = false;
  //   submitted = false;
  //   returnUrl: string;
  //   error = '';
  // user: User;
  // public loginInvalid: boolean;
  // private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

    ngOnInit(): void {
      // this.loginForm = this.formBuilder.group({
      //   userName: ['',[Validators.required]],
      //   password: ['', [Validators.required, Validators.minLength(3)]]
      //   });
      // this.authenticationService.logout();
  
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  
    }
    // get f() { return this.loginForm.controls; }
  
    //  onSubmit() {
  
    //     this.loginInvalid = false;
    //     this.formSubmitAttempt = false;
  
    //     if (this.loginForm.valid) {
    //       try {
    //          this.user = {
    //             userName: this.loginForm.get('userName').value,
    //             userPassword: this.loginForm.get('password').value
    //          };
  
    //          this.authenticationService.login(this.user)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //               //debugger;
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
  
    //       } catch (err) {
    //         this.loginInvalid = true;
    //         console.log(err);
    //       }
    //     } else {
    //       this.formSubmitAttempt = true;
    //       console.log("false");
    //     }
    //   }

}
