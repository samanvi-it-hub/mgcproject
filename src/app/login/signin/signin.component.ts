import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/adminpages/admin.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: FormGroup;
  loginresult;

  constructor( private frmBuilder: FormBuilder, private loginservice: LoginService, private router: Router) {
    this.login = this.frmBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });

   }

   get form() {
    return this.login.controls;
   }

   LoginSubmit() {
     console.log(this.login.value);
     this.loginservice.login(this.login.value).subscribe(
      data => {
        this.loginresult = data;
        console.log('SESSION', data);
      },
      (error: any) => {
        if ( error.status === 400) {
         // this.error();
         console.log('error at login');
        }
      }
     );
     alert('You are loggedIn...');
     setTimeout(() => {
      // console.log('after timeout', this.res);
      sessionStorage.sdata = JSON.stringify(this.loginresult);  // session data.
      this.routeValidation(this.loginresult);
    }, 200);
   }
   routeValidation(d: any) {
    console.log('ROLEID', d[0].role_id);
    if (d[0].role_id === 1) {
      this.router.navigate(['admin']);
    } else if (d[0].role_id === 2 ) {
      console.log('owner dashboard');
      this.router.navigate(['owner']);
    } else if (d[0].role_id === 4 ) {
      console.log('supervisor dashboard');
      this.router.navigate(['supervisor']);
    } else if (d[0].role_id === 13 ) {
      this.router.navigate(['onboard']);
    } else {
      console.log('ok');
    }
    this.login.reset();
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

}
