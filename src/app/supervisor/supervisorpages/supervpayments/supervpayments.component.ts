import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervpayments',
  templateUrl: './supervpayments.component.html',
  styleUrls: ['./supervpayments.component.scss']
})
export class SupervpaymentsComponent implements OnInit {
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
  Maintenance;
  maintenancedata;
  pmode;
  paymentmode: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.Maintenance = this.fb.group({
      communityid: new FormControl(this.communityid),
      startdate: new FormControl(),
      block_id: new FormControl()
    });

    this.paymentmode = this.fb.group({
      invid: new FormControl(),
      total_amt: new FormControl(),
      mode_id: new FormControl(),
      maintenance_month : new FormControl(),
    });
  }

  maintenancee() {
    console.log(this.Maintenance.value);
    this.service.maintenance(this.Maintenance.value).subscribe(
      data => {
            this.maintenancedata = data;
            console.log('MAIN', data);
          }
    );

  }

  makePayment(id, amount) {
    console.log(id, amount);
    this.paymentmode.get('invid').setValue(id);
    this.paymentmode.get('total_amt').setValue(amount);

  }
  sendPayment() {
    console.log(this.paymentmode.value);
    this.service.pay_status(this.paymentmode.value).subscribe(
      res => console.log('payment success'),
      err => console.log('error at paymeny')

    );
  }


  Paymentmode() {
    this.service.PaymentMode().subscribe(
      paymentmodedata => {
        this.pmode = paymentmodedata;
        console.log('MODE', paymentmodedata);
      }
    );
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


  ngOnInit(): void {
    this.getComtype(this.communityid);
    this.getcommunity(this.communityid);
    this.getblockdata(this.communityid);
    this.Paymentmode();
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
        lengthMenu: [[2, 4, 6], [2, 4, 6]],
        pageLength: 1});
    }, 1000);
  }

}
