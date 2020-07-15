import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-adminboardmemberssearch',
  templateUrl: './adminboardmemberssearch.component.html',
  styleUrls: ['./adminboardmemberssearch.component.scss']
})
export class AdminboardmemberssearchComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  BmForm: FormGroup;
  bmdata;
  communities: any;
  roles: any;
  constructor(private fb: FormBuilder,  private adminservice: AdminService) {
    this.BmForm = this.fb.group({
      commid: new FormControl(),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
   }

   getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      }
    );
  }

  getRoles() {
    this.adminservice.getCommunityRoles().subscribe(
      data => {
        this.roles = data;
      }
    );
  }
  BmReg()
  {
    console.log(this.BmForm.value);
    this.adminservice.Boardmemberssearch(this.BmForm.value).subscribe(
     data=>{
       this.bmdata=data;
       console.log(data);

     }
   );
  }

  ngOnInit(): void {
    this.getcommunitydata();
    this.getRoles();
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
