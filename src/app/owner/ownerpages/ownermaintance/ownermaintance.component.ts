import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import * as $ from 'jquery';
import 'datatables.net';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-ownermaintance',
  templateUrl: './ownermaintance.component.html',
  styleUrls: ['./ownermaintance.component.scss']
})
export class OwnermaintanceComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  Maintenance;
  search: FormGroup;
  constructor(private fb: FormBuilder, private service: OwnerserviceService) {
    this.search = this.fb.group({
      commid: new FormControl(this.communityid),
      unitid: new FormControl(this.unitid),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
   }

   Search()
   {
    this.service.getMaintenancebydate(this.search.value).subscribe(
      data => {
        this.Maintenance=data;
        console.log(data);
      }
    );
   }

  getMaintenancedata(unitid) {
    this.service.getMaintenancedata(unitid).subscribe(
      data => {
        this.Maintenance=data;
        console.log(data);
      }
    );
  }
  ngOnInit(): void {
    this.getMaintenancedata(this.unitid);
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
