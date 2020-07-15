import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admincommunitylist',
  templateUrl: './admincommunitylist.component.html',
  styleUrls: ['./admincommunitylist.component.scss']
})
export class AdmincommunitylistComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  communities;
  maintype;
  EditCommunity: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: AdminService, private toastr: ToastrService) {
    this.EditCommunity = this.fb.group({
      comid: new FormControl(),
      persononename: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      persononephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      persononeemail: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      persontwoname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      persontwophone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      persontwoemail: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      indicator: new FormControl(),
      amount: new FormControl('',  [Validators.required, Validators.pattern('^[0-9]*$')]),

    });
  }
  get form() {
    return this.EditCommunity.controls;
  }

  Data(id, p1name, p1email, p1phone, p2name, p2email, p2phone) {
    this.EditCommunity.get('comid').setValue(id);
    this.EditCommunity.get('persononename').setValue(p1name);
    this.EditCommunity.get('persononeemail').setValue(p1email);
    this.EditCommunity.get('persononephone').setValue(p1phone);
    this.EditCommunity.get('persontwoname').setValue(p2name);
    this.EditCommunity.get('persontwoemail').setValue(p2email);
    this.EditCommunity.get('persontwophone').setValue(p2phone);
  }
  EditComData() {
    console.log(this.EditCommunity.value);
    this.service.CommunityEdit(this.EditCommunity.value).subscribe(
      res => this.toastr.success('Community Updated', 'SUCCESS'),
      err => this.toastr.error('Error at Community Update', 'ERROR'),
    );
    this.EditCommunity.reset();
  }

  getAllCommunities() {
    this.service.AllCommunities().subscribe(
      data => {
        this.communities = data;
      }
    );
  }

  getMainType() {
    this.service.GetMaintType().subscribe(
      data => {
        this.maintype = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this. getAllCommunities();
    this.getMainType();
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
