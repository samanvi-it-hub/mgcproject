import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-adminresident',
  templateUrl: './adminresident.component.html',
  styleUrls: ['./adminresident.component.scss']
})
export class AdminresidentComponent implements OnInit {
  ResidentReg: FormGroup;
  communities;
  roles;
  displaytype;
  blocks;
  flats;
  comtypebyid;
  wtroles;
  blocknames;
  constructor(private fb: FormBuilder, private adminservice: AdminService) {
    this.ResidentReg = this.fb.group({
      communityid: new FormControl(),
      block: new FormControl(),
      unitid: new FormControl(),
      hnumunitid: new FormControl(),
      role: new FormControl(),
      startdate: new FormControl(),
      name:  new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      username:  new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(16),
        ]),
      password: new FormControl('',  [Validators.required, this.CheckPassword]),
      confpassword: new FormControl('', [Validators.required, this.CheckPassword])
    });
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
    return this.ResidentReg.controls;
  }

   wtrole(e) {
   // console.log('wtrole', e.target.value);
    this.wtroles = e.target.value;
   }
   typep(e) {
    // console.log('com-id', e.target.value);
    const id = e.target.value;
    this.adminservice.CommunityTypeById(id).subscribe(
      data => {
        this.comtypebyid = data;
       // console.log('comtypebyid', data);
        this.displaytype = data[0].sis_community_type;
        if (this.displaytype === 1) {
          this.ResidentReg.get('hnumunitid').setValue(null);
        } else {
          this.ResidentReg.get('block').setValue(null);
          this.ResidentReg.get('unitid').setValue(null);
        }
      }
    );
    this.adminservice.Blocks(id).subscribe(
      blocks => {
        console.log('BLOCKFLATS', blocks);
        this.blocknames = blocks;
      }
    );
    // this.adminservice.Briks(id).subscribe(
    //   blocks => {
    //    // console.log('Total data', blocks);
    //     this.blocks = blocks;
    //   }
    // );
  }
  block(e) {
   // console.log('block-id', e.target.value);
    this.adminservice.Flats( e.target.value).subscribe(
      flats => {
       // console.log(flats);
        this.flats = flats;
      }
    );
  }

  getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      //  console.log('COMMUNITY DATA', data);
      }
    );
  }

  getowntenroles() {
    this.adminservice.OwnerTenantRoles().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

  AddResident() {
    console.log(this.ResidentReg.value);
    this.adminservice.AddResident(this.ResidentReg.value).subscribe(
      res => alert('Resident successfully registered'),
      err => alert('Error Resident registration')
    );
    this.ResidentReg.reset();
  }

  ngOnInit(): void {
    this.getcommunitydata();
    this.getowntenroles();
  }

}
