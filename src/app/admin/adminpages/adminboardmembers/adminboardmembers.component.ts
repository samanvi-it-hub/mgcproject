import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidator } from '../validations/validator';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-adminboardmembers',
  templateUrl: './adminboardmembers.component.html',
  styleUrls: ['./adminboardmembers.component.scss']
})
export class AdminboardmembersComponent implements OnInit {
  BmForm: FormGroup;
  communities;
  roles;
  displaytype;
  units;
  owners;
  blocks;
  flats;
 // on = this.owners[0].owner_name;

  constructor(private fb: FormBuilder,  private adminservice: AdminService) {
    this.BmForm = this.fb.group({
      commid: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      boardmembers: this.fb.array([
        this.fb.group({
          designation: this.fb.control(''),
          unit: new FormControl(''),
          h_unitid: new FormControl(''),
          // block: new FormControl(''),
          // flat: new FormControl(''),
          bmname: new FormControl(''),
          phone: new FormControl(''),
          email: new FormControl(''),
        })
      ])
    });
  }

  getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      }
    );
  }

  getRoles() {
    this.adminservice.getCommunityRoles().subscribe(
      data => {
        this.roles = data;
      }
    );
  }
  get member() {
    return this.BmForm.get('boardmembers') as FormArray;
  }
  addMember() {
    // this.BmForm.get('boardmembers')
    this.member.push(
      this.fb.group({
        designation: this.fb.control(''),
        unit: new FormControl(''),
        h_unitid: new FormControl(''),
        // block: new FormControl(''),
        // flat: new FormControl(''),
        bmname: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      })
    );
  }
  remove(i) {
    this.member.removeAt(i);
  }

  ttype(e) {
    console.log('com-id', e.target.value);
    const id = e.target.value;
   // this.displaytype = id;
    this.adminservice.Blocks(id).subscribe(
      blocks => {
        console.log(blocks);
        this.blocks = blocks;
      }
    );
  }

  type(e) {
    console.log('com-id', e.target.value);
    const id = e.target.value;
    this.adminservice.CommunityTypeById(id).subscribe(
      data => {
        this.displaytype = data[0].sis_community_type;
      }
    );
    this.adminservice.Blocks(id).subscribe(
      blocks => {
        console.log('BLOCKFLATS', blocks);
        this.blocks = blocks;
      }
    );
    this.BmForm.get('boardmembers').reset();
  }

  block(e) {
    console.log('block-id', e.target.value);
    this.adminservice.Flats( e.target.value).subscribe(
      flats => {
        console.log(flats);
        this.flats = flats;
      }
    );
  }

  flat(e) {
    console.log('unit-id', e.target.value);
    // this.BmForm.get('unit').setValue(e.target.value);
  }

  // type(e) {
  //   const id = e.target.value;
  //   this.adminservice.comtype(id).subscribe(
  //     units => {
  //       console.log(units);
  //       this.units = units;
  //     }
  //   );
  // }

  unit(e) {
    const uid = e.target.value;
    this.adminservice.owners(uid).subscribe(
      ownerdata => {
        console.log('OWNERS', ownerdata);
        this.owners = ownerdata;
        console.log(typeof(ownerdata));
      }
    );
    // this.BmForm.get('bmname').setValue(this.owners[0].owner_name);
  }
  BmReg() {
    console.log(this.BmForm.value);
    this.adminservice.Boardmembers(this.BmForm.value).subscribe(
      res => alert('Board Member Registration Successful'),
      err => alert('Error At Registration')
    );

    this.BmForm.reset();
  }


  ngOnInit(): void {
    this.getcommunitydata();
    this.getRoles();
  }

}
