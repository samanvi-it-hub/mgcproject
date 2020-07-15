import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';

@Component({
  selector: 'app-ownerdashboard',
  templateUrl: './ownerdashboard.component.html',
  styleUrls: ['./ownerdashboard.component.scss']
})
export class OwnerdashboardComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  unitsdata;
  tenantdata;
  carpetarea;
  bedroom;
  bathroom;
  halls;
  dininghall;
  balcony;
  poojaroom;
  kitchen;
  tname;
  tphone;
  temail;
  tsdate;

  constructor(private service: OwnerserviceService) { }
  getUnitData(id) {
    this.service.getUnitDetails(id).subscribe(
      data => {
        this.unitsdata = data;
        this.carpetarea = data[0].carpet_area;
        this.bedroom = data[0].no_of_bedrooms;
        this.bathroom = data[0].bathroom;
        this.halls = data[0].halls;
        this.dininghall = data[0].dyningroom;
        this.balcony = data[0].balcony;
        this.poojaroom = data[0].poojaroom;
        this.kitchen = data[0].kitchen;
      //  console.log(data);
      }
    );
  }
  getTenant(d) {
    this.service.getTenantDetails(d).subscribe(
      data => {
       // console.log(data);
        this.tname = data[0].tent_name;
        this.tphone = data[0].tent_phone;
        this.temail = data[0].tent_email;
        this.tsdate = data[0].tent_occupency;
      }
    );
  }

  ngOnInit(): void {
    this.getUnitData(this.unitid);
    this.getTenant(this.unitid);
  }

}
