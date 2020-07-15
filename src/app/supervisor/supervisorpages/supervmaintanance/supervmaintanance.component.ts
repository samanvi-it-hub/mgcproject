import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervmaintanance',
  templateUrl: './supervmaintanance.component.html',
  styleUrls: ['./supervmaintanance.component.scss']
})
export class SupervmaintananceComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  type;
  communityname;
  GenMaintenance: FormGroup;
  blocks;
  typeofborh;
  housenums;
  maintenance;

  // tslint:disable-next-line:max-line-length
  constructor(private frmBuilder: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.GenMaintenance = this.frmBuilder.group({
      communityid: new FormControl(),
      block_id: new FormControl(),
      house_block_id: new FormControl(),
      date: new FormControl(),
      amountm: this.frmBuilder.array([])
    });
  }

  get t() {
    return this.GenMaintenance.get('amountm') as FormArray;
  }

  OtherControls(length) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < length; i++) {
        this.t.push(this.frmBuilder.group({
            id: [this.maintenance[i].invoice_id],
            flat_num: [this.maintenance[i].flat_num],
            maintenance_amt: [this.maintenance[i].maintenance_amt],
            due: [this.maintenance[i].due_amt],
            others: ['', [Validators.required, Validators.email]],
            discounts: ['', [Validators.required, Validators.email]]
        }));
    }
  }

  getMaintenance() {
    this.GenMaintenance.get('communityid').setValue(this.communityid);
    console.log(this.GenMaintenance.value);
    this.service.AddMaintenancee(this.GenMaintenance.value).subscribe(
      mainten => {
        console.log('maintenance-s', mainten);
        this.maintenance = mainten;
      },
      error => {
        console.log('maintenance-e', error);
      }
    );
    setTimeout( () => {
      this.OtherControls(this.maintenance.length);
    }, 3000);
  }

  getComtype(id) {
    this.service.getcommunityType(id).subscribe(
      data => {
        this.type = data[0].sis_community_type;
        console.log(data[0].sis_community_type);
      }
    );
  }
  getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
        console.log('community', data[0].sis_community_name);
      }
    );
  }

  getblockdata(id) {
    this.service.getBlocks(id).subscribe(
      data => {
        this.typeofborh = data.type;
        if (data.type === 1) {
          this.blocks = data.data;
          console.log('BLOCKS', data.data);
        } else {
          this.housenums = data.data;
          console.log('HOUSES', data.data);
        }
      }
    );
  }

  save() {
    console.log(this.GenMaintenance.value);
    // tslint:disable-next-line:align
    this.service.add_dues(this.GenMaintenance.value).subscribe(
      res => this.toastr.success('success at maintenance'),
      err => this.toastr.error('error at maintenance')
    );
  }

  ngOnInit(): void {
    this.getComtype(this.communityid);
    this.getcommunity(this.communityid);
    this.getblockdata(this.communityid);
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         bPaginate: true,
         bFilter: true,
         Info: true,
        lengthMenu: [[1, 4, 6, 8], [1, 4, 6, 8]],
        pageLength: 1});
    }, 2000);
  }

}
