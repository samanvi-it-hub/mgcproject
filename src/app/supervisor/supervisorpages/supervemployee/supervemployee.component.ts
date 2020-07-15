import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supervemployee',
  templateUrl: './supervemployee.component.html',
  styleUrls: ['./supervemployee.component.scss']
})
export class SupervemployeeComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  allemployees;
  EmpReg: FormGroup;
  Editemp: FormGroup;
  allvendors;
  c;

  constructor(private frmBuilder: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.EmpReg = this.frmBuilder.group({
      cid: new FormControl(this.communityid),
      name: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
       ]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      emptype: new FormControl(),
      vendorid: new FormControl()
    });
  }

  get form() {
    return this.EmpReg.controls;
  }
  type(e) {
    this.c = e.target.value;
    console.log(this.c);
  }

  AddEmployee() {
    console.log(this.EmpReg.value);
    this.service.AddEmployee(this.EmpReg.value).subscribe(
      res => this.toastr.success('Successfully Employee Registered', 'SUCCESS'),
      err => this.toastr.error('Error At Employee Registration', 'ERROR'),
    );
    this.EmpReg.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  getEmployees(id) {
    this.service.GetEmployeeDetails(id).subscribe(
      data => {
        this.allemployees = data;
      }
    );
  }

  getAllVendors(id) {
    this.service.AllVendors(id).subscribe(
      data => {
        this.allvendors = data;
        console.log(data);
      }
    );
  }

  Data(id, name, phone) {
    this.Editemp.get('eid').setValue(id);
    this.Editemp.get('ename').setValue(name);
    this.Editemp.get('ephone').setValue(phone);
  }
  get eform() {
    return this.Editemp.controls;
  }
  EditEmployee() {
    this.service.EditEmployee(this.Editemp.value).subscribe(
      res => this.toastr.success('Successfully Employee Updated', 'SUCCESS'),
      err => this.toastr.error('Error At Employee Update', 'ERROR'),
    );
    this.Editemp.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  ngOnInit(): void {
    this.Editemp = this.frmBuilder.group({
      eid: new FormControl(),
      ename: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
       ]),
      ephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ])
    });
    this.getAllVendors(this.communityid);
    this.getEmployees(this.communityid);
    console.log(this.communityid);
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         columnDefs: [
          {
              targets: 0,
              checkboxes: {
                selectRow: true
             }
          }
       ],
        lengthMenu: [[2, 4, 6], [2, 4, 6]],
        pageLength: 1});
    }, 1000);
  }

}
