import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from 'src/app/owner/ownerpages/ownerservice.service';
import { TenantserviceService } from '../tenantservice.service';

@Component({
  selector: 'app-tenantprofile',
  templateUrl: './tenantprofile.component.html',
  styleUrls: ['./tenantprofile.component.scss']
})
export class TenantprofileComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  name;
  email;
  phone;
  communityname;
  unittotalname;


  constructor(private service: TenantserviceService) { }
  getTenantData(unitid) {
    this.service.getTenantData(unitid).subscribe(
      data => {
        console.log(data);
        // console.log(data[1]);
        this.name = data[0].tent_name;
        this.email = data[0].tent_email;
        this.phone = data[0].tent_phone;
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
    this.getTenantData(this.unitid);
    this.getCommunityName(this.communityid);
    this.getUnitTotalName();
  }

}

