import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { TenantserviceService } from '../tenantservice.service';

@Component({
  selector: 'app-tenantdashboard',
  templateUrl: './tenantdashboard.component.html',
  styleUrls: ['./tenantdashboard.component.scss']
})
export class TenantdashboardComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  ownerid = this.a[0].owner_id;
  unitsdata;
  carpetarea;
  type;
  bedrooms;
  halls;
  kitchen;
  poojaroom;
  dininghall;
  balcony;
  bathroom;
  lights;
  fans;
  ac;
  ownerdata;
  occupancy;
  constructor(private service: TenantserviceService, private frmBuilder: FormBuilder, private toastr: ToastrService) { }


  getUnitDetails(id) {
    this.service.getUnitDetails(id).subscribe(
      data => {
        this.unitsdata = data;
        console.log(data);
        console.log(data[0].balcony);
        this.carpetarea = data[0].carpet_area;
        this.type = data[0].type;
        this.bedrooms = data[0].no_of_bedrooms;
        this.halls = data[0].halls;
        this.kitchen = data[0].kitchen;
        this.poojaroom = data[0].poojaroom;
        this.dininghall = data[0].dyningroom;
        this.balcony = data[0].balcony;
        this.bathroom = data[0].bathroom;
       
      }
    );
  }

  ngOnInit(): void {
    this.getUnitDetails(this.unitid);
  }

}
