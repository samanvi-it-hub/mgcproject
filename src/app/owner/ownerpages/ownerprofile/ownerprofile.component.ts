import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';

@Component({
  selector: 'app-ownerprofile',
  templateUrl: './ownerprofile.component.html',
  styleUrls: ['./ownerprofile.component.scss']
})
export class OwnerprofileComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  name;
  email;
  phone;
  communityname;
  unittotalname;


  constructor(private service: OwnerserviceService) { }
  getOwnerdata(unitid) {
    this.service.getOwnerData(unitid).subscribe(
      data => {
        console.log(data);
        // console.log(data[1]);
        this.name = data[0].ownerdetails[0].owner_name;
        this.email = data[0].ownerdetails[0].owner_email;
        this.phone = data[0].ownerdetails[0].owner_phone;
      }
    );
  }
  getCommunityName(communityid) {
    this.service.getCommunityName(communityid).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
      }
    );
  }
  getUnitTotalName() {

  }

  ngOnInit(): void {
    this.getOwnerdata(this.unitid);
    this.getCommunityName(this.communityid);
    this.getUnitTotalName();
  }

}
