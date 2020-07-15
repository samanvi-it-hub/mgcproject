import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-gattendance',
  templateUrl: './supervattendance.component.html',
  styleUrls: ['./supervattendance.component.scss']
})
export class SupervattendanceComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;
  today = new Date();
  date = this.today.getDate() + '-' + (this.today.getMonth() + 1 ) + '-' + this.today.getFullYear();
  time = this.today.getHours() + ':' + this.today.getMinutes();
  adate = this.today.getFullYear() + '-' + (this.today.getMonth() + 1 ) + '-' + this.today.getDate();
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  communityname;
  attendanceReg: FormGroup;
  todayemp: any;
  emps;

  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
      this.attendanceReg = this.fb.group({
        com_id: new FormControl(),
        date: new FormControl(this.adate),
        empl: this.fb.array([])
      });
    // tslint:disable-next-line:align
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         bPaginate: true,
         bFilter: true,
         Info: true,
        lengthMenu: [[1, 4, 6, 8], [1, 4, 6, 8]],
        pageLength: 1});
    }, 5000);
   }

  getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
        console.log('community', data[0].sis_community_name);
      }
    );
  }
  SignForm() {
    this.attendanceReg.get('com_id').setValue(this.communityid);
    console.log(this.attendanceReg.value);
    this.service.attendence_in(this.attendanceReg.value).subscribe(
      res => this.toastr.success('Successfully Attendance Saved', 'SUCCESS'),
      err => this.toastr.error('Error At Attendance', 'ERROR'),
    );
  }
  submit() {
    console.log(this.attendanceReg.value);
    this.service.attendence_out(this.attendanceReg.value).subscribe(
      res => this.toastr.success('Successfully Attendance Saved-sub', 'SUCCESS'),
      err => this.toastr.error('Error At Attendance-sub', 'ERROR'),
    );
  }

  get t() {
     return this.attendanceReg.get('empl') as FormArray;
    }

  Attendance(e) {
    console.log('attendance', e);
    if (this.todayemp.length === 0) {
      console.log('attendanceif', e);
      // tslint:disable-next - line:prefer - for -of
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.emps.length; i++) {
        console.log('attendance', e);
        this.t.push(this.fb.group({
            id: [this.emps[i].emp_id],
            emp_name: [this.emps[i].emp_name, Validators.required],
            status: ['', Validators.required],
            in_time: ['', [Validators.required, Validators.email]],
            out_time: ['', [Validators.required, Validators.email]]
        }));
      }

    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0;  i < this.todayemp.length; i++) {
          console.log('attendancefor', this.todayemp.length);
          this.t.push(this.fb.group({
              id: [this.todayemp[i].attendence_id],
              emp_name: [this.todayemp[i].emp_name, Validators.required],
              status: [this.todayemp[i].attendence_status, Validators.required],
              in_time: [this.todayemp[i].in_time, [Validators.required, Validators.email]],
              out_time: [this.todayemp[i].out_time, [Validators.required, Validators.email]]
          }));
      }
    }

  }
  getemps(id) {
    this.service.getemployees(id).subscribe(
      data => {
        this.emps = data;
        console.log('EMPLOYEES', data);
      }
    );
  }
  gettodaydata() {
    this.service.todayEmps(this.communityid, this.adate).subscribe(
      data => {
        this.todayemp = data;
        console.log('Attendance', data);
      }
    );
  }

  ngOnInit(): void {
    this.getcommunity(this.communityid);
    this.getemps(this.communityid);
    this.gettodaydata();
    setTimeout(() => {
     // this.Attendance(this.emps.length);
      console.log('empLength', this.emps.length);
      this.Attendance(this.emps.length);
    }, 2000);
  }
}

