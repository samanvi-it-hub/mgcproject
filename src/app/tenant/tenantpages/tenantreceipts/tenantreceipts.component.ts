import { Component, OnInit, ViewChild } from '@angular/core';
import { TenantserviceService } from '../tenantservice.service';
import * as $ from 'jquery';
import 'datatables.net';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tenantreceipts',
  templateUrl: './tenantreceipts.component.html',
  styleUrls: ['./tenantreceipts.component.scss']
})
export class TenantreceiptsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  Payments;
  search: FormGroup;
  constructor(private fb: FormBuilder, private service: TenantserviceService) {
    this.search = this.fb.group({
      commid: new FormControl(this.communityid),
      unitid: new FormControl(this.unitid),
      receiptid: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    }); 
  }
  
  Search()
  {
    this.service.getPaymentsdatabysearch(this.search.value).subscribe(
      data => {
        this.Payments=data;
        console.log(data);
      }
    );
  }

  getPaymentsdata(unitid) {
    this.service.getPaymentsdata(unitid).subscribe(
      data => {
        this.Payments=data;
        console.log(data);
      }
    );
  }
  ngOnInit(): void {
    this.getPaymentsdata(this.unitid);
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

