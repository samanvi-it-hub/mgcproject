import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminbroadcast',
  templateUrl: './adminbroadcast.component.html',
  styleUrls: ['./adminbroadcast.component.scss']
})
export class AdminbroadcastComponent implements OnInit {
  EmailReg: FormGroup;

  constructor(private fb: FormBuilder,  private adminservice: AdminService, private router: Router, private toastr: ToastrService) {
    this.EmailReg = this.fb.group({
      to: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    });
   }
  Send() {
    console.log(this.EmailReg.value);
    this.adminservice.SendMailToAll(this.EmailReg.value).subscribe(
      res => this.toastr.success('Email Sending Success', 'SUCCESS'),
      error => this.toastr.error('Error At email sending', 'ERROR')
    );
    this.EmailReg.reset();
  }

  ngOnInit(): void {
  }

}
