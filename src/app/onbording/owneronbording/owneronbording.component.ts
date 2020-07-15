import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/adminpages/admin.service';
import { BordingService } from '../bording.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owneronbording',
  templateUrl: './owneronbording.component.html',
  styleUrls: ['./owneronbording.component.scss']
})
export class OwneronbordingComponent implements OnInit {
  owneronboardingReg: FormGroup;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].onboardid;
  units;
  blocks;
  flats;
  communitytype;

  // tslint:disable-next-line:max-line-length
  constructor(private frmBuilder: FormBuilder, private router: Router, private adminservice: AdminService, private onbordingservice: BordingService) {
    this.owneronboardingReg = this.frmBuilder.group({
      community_id: new FormControl(this.communityid),
      owner_id: new FormControl(this.ownerid),
      unitid: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ./%+-]*')]),
      housenum: new FormControl('', [ Validators.pattern('[0-9]*')]),
      block: new FormControl(),
      block_id: new FormControl(),
      flat: new FormControl(),
      occupancy: new FormControl(),
      h_type: new FormControl(),
      halls: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      bedrooms: new FormControl('', [Validators.required, Validators.pattern('[0-9]*') ]),
      poojaroom: new FormControl('', [Validators.required, Validators.pattern('[0-9]*') ]),
      kitchen: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      dyninghall: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      balcony: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      bothroom: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      lights: new FormControl('', [Validators.pattern('[0-9]*')]),
      fans: new FormControl('', [Validators.pattern('[0-9]*') ]),
      ac: new FormControl('', [ Validators.pattern('[0-9]*')]),
      // total_area: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      carpet_area: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      password: new FormControl('',  [Validators.required, this.CheckPassword]),
      confpassword: new FormControl('', [Validators.required, this.CheckPassword])
      });
      // tslint:disable-next-line:align
      this.owneronboardingReg.controls.password.valueChanges.subscribe(
        x => this.owneronboardingReg.controls.confpassword.updateValueAndValidity()
      );
  }

  CheckPassword(control) {
    if (control.value != null) {
      const  conpass = control.value;
      const pass = control.root.get('password');
      if (pass) {
        const password = pass.value;
        if (conpass !== '' && password !== '') {
          if (conpass !== password) {
            return {passwordValidity: true};
          } else {
            return null;
          }
        }
      }
    }
  }
  get form() {
    return this.owneronboardingReg.controls;
  }
  OnFormSubmit() {
    console.log(this.owneronboardingReg.value);
    this.onbordingservice.regonboard(this.owneronboardingReg.value).subscribe(
      res => {
        console.log('success...onbording');
      },
      (error: any) => {
         console.log('error at onbording data');
      }
    );
    this.owneronboardingReg.reset();
    this.router.navigate(['login']);
  }

  getCommType(id) {
    this.adminservice.CommunityTypeById(id).subscribe(
      data => {
        this.communitytype = data[0].sis_community_type;
      }
    );
  }

  getBlocks(id) {
    this.onbordingservice.mycomblock(id).subscribe(
      blocks => {
        console.log('BLOCKS', blocks);
        this.blocks = blocks;
      }
    );
  }
  blockfuc(e) {
    console.log(e.target.value);
    this.onbordingservice.mycomflatnum(e.target.value).subscribe(
      flatnum => {
        console.log(flatnum);
        this.flats = flatnum;
      }
    );
  }

  /*join tables using this.ownerid*/
getUnitsData(id) {
  this.onbordingservice.getUnitsData(id).subscribe(
    data => {
      this.units = data;
      console.log('UNITS DATA', this.units);
      if (this.units.housenum === undefined) {
        this.owneronboardingReg.get('block').setValue(this.units.blockname);
        this.owneronboardingReg.get('flat').setValue(this.units.flat);
        this.owneronboardingReg.get('unitid').setValue(this.units.unitid);
        this.owneronboardingReg.get('block_id').setValue(this.units.block_id);
      } else {
        this.owneronboardingReg.get('housenum').setValue(this.units.housenum);
        this.owneronboardingReg.get('unitid').setValue(this.units.unitid);
      }
    }
  );
}

  ngOnInit(): void {
    this.getBlocks(this.communityid);
    this.getCommType(this.communityid);
    this.getUnitsData(this.ownerid);
  }

}
