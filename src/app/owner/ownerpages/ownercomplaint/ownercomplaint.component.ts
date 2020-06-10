import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { OwnerserviceService } from '../ownerservice.service';
@Component({
  selector: 'app-ownercomplaint',
  templateUrl: './ownercomplaint.component.html',
  styleUrls: ['./ownercomplaint.component.scss']
})
export class OwnercomplaintComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;

  constructor() { }

  ngOnInit(): void {
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
    }, 1000);
  }

}
