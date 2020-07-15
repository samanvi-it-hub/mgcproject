import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ownerproperty',
  templateUrl: './ownerproperty.component.html',
  styleUrls: ['./ownerproperty.component.scss']
})
export class OwnerpropertyComponent implements OnInit {
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
  fixtureUpdate: FormGroup;

  constructor(private service: OwnerserviceService, private frmBuilder: FormBuilder, private toastr: ToastrService) {
    this.fixtureUpdate = this.frmBuilder.group({
      lights: new FormControl('', [Validators.pattern('[0-9]*')]),
      fans: new FormControl('', [Validators.pattern('[0-9]*') ]),
      ac: new FormControl('', [ Validators.pattern('[0-9]*')]),
      uid: new FormControl(this.unitid),
      occupancy: new FormControl(),
      h_type: new FormControl(),
      ownerid: new FormControl(this.ownerid)
    }
    );
  }
  get form() {
    return this.fixtureUpdate.controls;
  }

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
        // this.lights = data[0].no_of_lights;
        // this.fans = data[0].no_of_fans;
        // this.ac = data[0].no_of_ac;
        this.fixtureUpdate.get('lights').setValue(data[0].no_of_lights);
        this.fixtureUpdate.get('fans').setValue(data[0].no_of_fans);
        this.fixtureUpdate.get('ac').setValue(data[0].no_of_ac);
        this.fixtureUpdate.get('h_type').setValue(data[0].type);
      }
    );
  }

  getownerdata(id) {
    this.service.getownerbyid(id).subscribe(
      data => {
        this.ownerdata = data;
        console.log('ownerdata', data[0].occupancy);
        this.occupancy = data[0].occupancy;
        this.fixtureUpdate.get('occupancy').setValue(data[0].occupancy);
      }
    );
  }

  update() {
    // console.log(this.fixtureUpdate.value);
    this.service.fixturedata(this.fixtureUpdate.value).subscribe(
      res =>  this.toastr.success('Data Update Successfull', 'SUCCESS'),
      err => this.toastr.error('Data Not Updated', 'ERROR')
    );
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  ngOnInit(): void {
    this.getownerdata(this.ownerid);
    this.getUnitDetails(this.unitid);
  }

}
