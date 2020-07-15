import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-adminresidentreports',
  templateUrl: './adminresidentreports.component.html',
  styleUrls: ['./adminresidentreports.component.scss']
})
export class AdminresidentreportsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  searchReg;
  communities;
  residents;
  constructor(private fb: FormBuilder, private adminservice: AdminService, private router: Router) {
    this.searchReg = this.fb.group({
      community: new FormControl('', Validators.required)
    });
   }
  Search() {
    console.log(this.searchReg.value);
    this.adminservice.searchresident(this.searchReg.value).subscribe(
      data => {
        this.residents = data;
        console.log('RECORDS', this.residents);
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
        pageLength: 10});
    }, 3000);
  }


}
