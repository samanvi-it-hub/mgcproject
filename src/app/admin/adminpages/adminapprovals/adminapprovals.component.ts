import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import { AdminService } from '../admin.service';
import * as $ from 'jquery';
import 'datatables.net';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminapprovals',
  templateUrl: './adminapprovals.component.html',
  styleUrls: ['./adminapprovals.component.scss']
})
export class AdminapprovalsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  searchReg;
  communities;
  records;

  constructor(private fb: FormBuilder, private adminservice: AdminService, private router: Router,  private toastr: ToastrService) {
    this.searchReg = this.fb.group({
      community: new FormControl('', Validators.required),
      status: new FormControl('pending', Validators.required)
    });
  }
  get form() {
    return this.searchReg.controls;
  }
  Search() {
    console.log(this.searchReg.value);
    this.adminservice.owneronboardingrecords(this.searchReg.value).subscribe(
      data => {
        this.records = data;
        console.log('RECORDS', this.records);
      }
    );
  }
  Clear() {
    this.searchReg.reset();
  }
  getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      }
    );
  }
  send(id) {
    console.log(id);
    this.adminservice.approveowner(id).subscribe(
      res => this.toastr.success('Approved..', 'SUCCESS'),
      err => this.toastr.error('Error At Approve', 'ERROR')
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  ngOnInit(): void {
    this.getcommunitydata();
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
        pageLength: 1});
    }, 3000);
  }

}
