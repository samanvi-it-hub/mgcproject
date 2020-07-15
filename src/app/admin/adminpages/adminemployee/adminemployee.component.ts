import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { UsernameValidator } from '../validations/validator';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminemployee',
  templateUrl: './adminemployee.component.html',
  styleUrls: ['./adminemployee.component.scss']
})
export class AdminemployeeComponent implements OnInit {

  EmpRegistration: FormGroup;
  communities;
  roledata;
  emprole;

  constructor(private fb: FormBuilder, private adminservice: AdminService, private toastr: ToastrService) {
    this.EmpRegistration = this.fb.group({
      commid: new FormControl(),
      roleid: new FormControl(),
      empname: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      empphone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      empemail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      username:  new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(16),
        UsernameValidator.cannotContainSpace]),
        password: new FormControl('',  [Validators.required, this.CheckPassword]),
        confpassword: new FormControl('', [Validators.required, this.CheckPassword])
    });
  }
  CheckPassword(control) {
    if (control.value != null) {
      const  conpass = control.value;
      const pass = control.root.get('password');
      if (pass) {
        const password = pass.value;
        if (conpass !== '' && password !== '') {
          if (conpass !== password) {
            return {passwordValidity: true};
          } else {
            return null;
          }
        }
      }
    }
  }
  get form() {
    return this.EmpRegistration.controls;
  }
  getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      }
    );
  }
  getRoles() {
    this.adminservice.EmpSupRoles().subscribe(
      data => {
        this.roledata = data;
      }
    );
  }
  type(e) {
   const id =  e.target.value;
   this.emprole = id;
   console.log(id);

  }
  AddEmployee() {
    // tslint:disable-next-line:no-unused-expression
    const d = this.EmpRegistration.value;
    console.log(d);
    this.adminservice.AddEmpSupFromAdmin(d).subscribe(
      res => this.toastr.success('Registarion Success..', 'SUCCESS'),
      err => this.toastr.error('Error At Registartion', 'ERROR')
    );
    this.EmpRegistration.reset();
  }

  ngOnInit(): void {
    this.getcommunitydata();
    this.getRoles();
  }

}
