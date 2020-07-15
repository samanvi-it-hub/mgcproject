import { Component, OnInit, ViewChild } from '@angular/core';
import { TenantserviceService } from '../tenantservice.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-tenantboardmembers',
  templateUrl: './tenantboardmembers.component.html',
  styleUrls: ['./tenantboardmembers.component.scss']
})
export class TenantboardmembersComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].tent_name;
  communityid= this.a[0].sis_community_id;
  BmForm: FormGroup;
  bmdata;
  constructor(private fb: FormBuilder,  private service: TenantserviceService) {
    this.BmForm = this.fb.group({
      commid: new FormControl(this.communityid),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
   }
   BmReg()
   {
     console.log(this.BmForm.value);
     this.service.Boardmemberssearch(this.BmForm.value).subscribe(
      data=>{
        this.bmdata=data;
        console.log(data);

      }
    );
   }

  ngOnInit(): void {
    console.log('tent SESSION DATA', this.a);
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

