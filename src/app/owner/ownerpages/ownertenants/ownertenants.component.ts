import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { OwnerserviceService } from '../ownerservice.service';
@Component({
  selector: 'app-ownertenants',
  templateUrl: './ownertenants.component.html',
  styleUrls: ['./ownertenants.component.scss']
})
export class OwnertenantsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  alltenants;
  TenantReg: FormGroup;

  constructor(private service: OwnerserviceService, private frmBuilder: FormBuilder) {
    this.TenantReg = this.frmBuilder.group({
      communityid: new FormControl(),
      unitid: new FormControl(),
      ownerid: new FormControl(),
      name: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      email: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      startdate: new FormControl('', [Validators.required])
    });
  }

  get form() {
    return this.TenantReg.controls;
  }

  tenantRegistration() {
    this.TenantReg.get('communityid').setValue(this.a[0].sis_community_id);
    this.TenantReg.get('unitid').setValue(this.a[0].unit_id);
    this.TenantReg.get('ownerid').setValue(this.a[0].owner_id);
    console.log(this.TenantReg.value);
    this.service.owneraddTenant(this.TenantReg.value).subscribe(
      res => {
        if (res === null) {
          alert('Already Tenant Occuiped...');
        } else {
          alert('Tenant Registration Success');
        }
      },
      err => alert(`Error at Tenant Registration`)
    );
    this.TenantReg.reset();
  }

  AllTenants() {
    this.service.alltenants().subscribe(
      data => {
        console.log('all tenants', data);
        this.alltenants = data;
        console.log('all tenants', this.alltenants);
      }
    );
  }
  Data(id) {
    console.log(id);
  }


  ngOnInit(): void {
    $(() => {
      $('#ga').on('click', '', (ele) => {
        const tr = ele.target.parentNode.parentNode;
        // alert(tr);
        const firstName = tr.cells[1].textContent;
        $('#name').val(firstName);
      });
    });
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
    this.AllTenants();
  }

}
