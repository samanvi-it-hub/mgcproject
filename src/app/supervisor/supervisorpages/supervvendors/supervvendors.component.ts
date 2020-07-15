import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervvendors',
  templateUrl: './supervvendors.component.html',
  styleUrls: ['./supervvendors.component.scss']
})
export class SupervvendorsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  VendorReg: FormGroup;
  VendorEdit: FormGroup;
  allvendors;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.VendorReg = this.fb.group({
      communityid: new FormControl(),
      vendorname:  new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      address: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    });
  }

  get form() {
    return this.VendorReg.controls;
  }
  get eform() {
    return this.VendorEdit.controls;
  }
  getAllvendors(id) {
    this.service.AllVendors(id).subscribe(
      data => {
        this.allvendors = data;
      }
    );
  }

  SubmitVendor() {
    this.VendorReg.get('communityid').setValue(this.communityid);
    this.service.AddVendor(this.VendorReg.value).subscribe(
      res => this.toastr.success('Successfully Vendor Registred', 'SUCCESS'),
      err => this.toastr.error('Error At Vendor Registration', 'ERROR'),
    );
    this.VendorReg.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  Data(id, name, phone, email, address) {
    this.VendorEdit.get('evendorid').setValue(id);
    this.VendorEdit.get('evendorname').setValue(name);
    this.VendorEdit.get('ephone').setValue(phone);
    this.VendorEdit.get('eemail').setValue(email);
    this.VendorEdit.get('eaddress').setValue(address);
  }

  EditVendor() {
    console.log(this.VendorEdit.value);
    this.service.EditVendor(this.VendorEdit.value).subscribe(
      res => this.toastr.success('Successfully Vendor Updated', 'SUCCESS'),
      err => this.toastr.error('Error At Vendor update', 'ERROR'),
    );
    this.VendorEdit.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  ngOnInit(): void {
    this.VendorEdit = this.fb.group({
      evendorid: new FormControl(),
      evendorname:  new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      ephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      eemail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      eaddress: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    });

    this.getAllvendors(this.communityid);
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
  }

}
