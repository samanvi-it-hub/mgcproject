import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { OwnerserviceService } from '../ownerservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ownermember',
  templateUrl: './ownermember.component.html',
  styleUrls: ['./ownermember.component.scss']
})
export class OwnermemberComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  MemberReg: FormGroup;
  member;
  memberr;
  mid;
  mname;
  memail;
  mphone;

  constructor(private service: OwnerserviceService, private frmBuilder: FormBuilder, private router: Router) {
    this.MemberReg = this.frmBuilder.group({
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
    });
  }

  get form() {
    return this.MemberReg.controls;
  }

  Member() {
    this.MemberReg.get('communityid').setValue(this.a[0].sis_community_id);
    this.MemberReg.get('unitid').setValue(this.a[0].unit_id);
    this.MemberReg.get('ownerid').setValue(this.a[0].owner_id);
    console.log(this.MemberReg.value);
    this.service.ownermember(this.MemberReg.value).subscribe(
      res => alert('Member Successfully registered..'),
      err => alert('Error at registration..')
    );
    this.MemberReg.reset();
  }

  getomemberDetails(c, u, o) {
    this.service.getOwnerMember(c, u, o).subscribe(
      data => {
        console.log(data);
        this.member = data;
        this.mid = data[0].m_id;
        this.mname = data[0].m_name;
        this.memail = data[0].m_email;
        this.mphone = data[0].m_phone;
        this.memberr = true;
      },
      error => {
        console.log('ERROR', error.ok);
        this.memberr = false;
      }
    );
  }

  ngOnInit(): void {
    this.getomemberDetails(this.communityid, this.unitid, this.ownerid);
  }

}
