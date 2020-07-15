import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { TenantserviceService } from '../tenantservice.service';
@Component({
  selector: 'app-tenantcomplaints',
  templateUrl: './tenantcomplaints.component.html',
  styleUrls: ['./tenantcomplaints.component.scss']
})
export class TenantcomplaintsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  ComplaintReg: FormGroup;
  EdittentComplaint: FormGroup;
  allcomplaints;

  constructor(private fb: FormBuilder, private service: TenantserviceService,  private toastr: ToastrService, private router: Router) {
    this.ComplaintReg = this.fb.group({
      communityid: new FormControl(),
      unitid: new FormControl(),
      ownerid: new FormControl(),
      complaint: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      urgent: new FormControl()
  });
}

get form() {
  return this.ComplaintReg.controls;
}
  SendComplaint() {
    this.ComplaintReg.get('communityid').setValue(this.communityid);
    this.ComplaintReg.get('unitid').setValue(this.unitid);
    this.ComplaintReg.get('ownerid').setValue(this.ownerid);
    console.log(this.ComplaintReg.value);
    this.service.tentComplaint(this.ComplaintReg.value).subscribe(
      res => this.toastr.success('Complaint Registered', 'SUCCESS'),
      err => this.toastr.error('Registration error', 'ERROR')
    );
    this.ComplaintReg.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  getAllComplaints(a, b, c) {
    this.service.AlltentComplaints(a, b, c).subscribe(
      data => {
        this.allcomplaints = data;
        console.log(data);
      }
    );
  }
  Cancel(id) {
    console.log(id);
    this.service.CancelComplaints(id).subscribe(
      res => this.toastr.success('Complaint Canceled', 'SUCCESS'),
      err =>  this.toastr.error('Cancelation error', 'ERROR')
    );
    // this.router.navigate(['complaints']);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  EditComplaint(id, complaint, description, comment) {
    this.EdittentComplaint.get('etid').setValue(id);
    this.EdittentComplaint.get('ecomplaint').setValue(complaint);
    this.EdittentComplaint.get('edescription').setValue(description);
    this.EdittentComplaint.get('ecomments').setValue(comment);
  }

  EditComplaintSubmit() {
    console.log(this.EdittentComplaint.value);
    this.service.UpdatetentComplaints(this.EdittentComplaint.value).subscribe(
      res => this.toastr.success('Complaint Updated', 'SUCCESS'),
      err => this.toastr.error('Error at complaint update', 'ERROR')
    );
    this.EdittentComplaint.reset();
    window.location.reload();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  ngOnInit(): void {
    this.EdittentComplaint = this.fb.group({
      etid: new FormControl(),
      ecomplaint: new FormControl(),
      edescription: new FormControl(),
      ecomments: new FormControl()
    });
    this.getAllComplaints(this.communityid, this.ownerid, this.unitid);
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

