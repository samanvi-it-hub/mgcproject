import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { OwnerserviceService } from '../ownerservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ownertenants',
  templateUrl: './ownertenants.component.html',
  styleUrls: ['./ownertenants.component.scss']
})
export class OwnertenantsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  alltenants;
  TenantReg: FormGroup;
  EditTenant: FormGroup;
  check;
  acheck;

  constructor(private service: OwnerserviceService, private frmBuilder: FormBuilder, private toastr: ToastrService) {
    this.TenantReg = this.frmBuilder.group({
      communityid: new FormControl(),
      unitid: new FormControl(),
      ownerid: new FormControl(),
      name: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      email: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      startdate: new FormControl('', [Validators.required]),
      acheck: new FormControl(),
      username: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      password: new FormControl('',  [Validators.required, this.CheckPassword]),
      confpassword: new FormControl('', [Validators.required, this.CheckPassword]),
    });
  }

  get form() {
    return this.TenantReg.controls;
  }

  tenantRegistration() {
    this.TenantReg.get('communityid').setValue(this.a[0].sis_community_id);
    this.TenantReg.get('unitid').setValue(this.a[0].unit_id);
    this.TenantReg.get('ownerid').setValue(this.a[0].owner_id);
    console.log(this.TenantReg.value);
    this.service.owneraddTenant(this.TenantReg.value).subscribe(
      res => this.toastr.error('Tenant Registration Success...', 'SUSSESS'),
      err => {
        if (err.error.text === 'tenant-exist') {
          this.toastr.error('Tenant already Exist', 'ERROR');
        }
      }
    );
    this.TenantReg.reset();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  AllTenants(id) {
    this.service.alltenants(id).subscribe(
      data => {
        console.log('all tenants', data);
        this.alltenants = data;
        console.log('all tenants', this.alltenants);
      }
    );
  }
  checkvalue(e) {
    console.log(e.target.checked);
    this.check = e.target.checked;

  }

  Echeckvalue(e) {
    this.acheck = e.target.checked;
  }

  Data(id, name, phone, email, status) {
    console.log(name);
    this.EditTenant.get('tid').setValue(id);
  }

  EditTenantData() {
    console.log(this.EditTenant.value);
    this.service.EditTenant(this.EditTenant.value).subscribe(
      res => this.toastr.success('Tenant Updated', 'SUCCESS'),
      err => this.toastr.error('Error at tenant update', 'ERROR')
    );
    this.EditTenant.reset();
  }
  get eform() {
    return this.EditTenant.controls;
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
  ngOnInit(): void {
    this.EditTenant = this.frmBuilder.group(
      {
        tid: new FormControl(),
        uname:  new FormControl('', [Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
         ]),
        tcheck: new FormControl(),
        status: new FormControl(),
        vdate: new FormControl(),
        password: new FormControl('',  [Validators.required, this.CheckPassword]),
        confpassword: new FormControl('', [Validators.required, this.CheckPassword]),
      }
    );

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
        lengthMenu: [[5, 10, 15], [5, 10, 15]],
        pageLength: 10});
    }, 1000);
    this.AllTenants(this.unitid);
  }

}
