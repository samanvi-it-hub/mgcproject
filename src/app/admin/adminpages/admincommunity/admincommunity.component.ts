import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { UsernameValidator } from '../validations/validator';
@Component({
  selector: 'app-admincommunity',
  templateUrl: './admincommunity.component.html',
  styleUrls: ['./admincommunity.component.scss']
})
export class AdmincommunityComponent implements OnInit {

  CommunityReg: FormGroup;
  communitytype;
  typee;

  constructor(private frmBuilder: FormBuilder, private adminservice: AdminService) {

    this.CommunityReg = this.frmBuilder.group({
      comname: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
       ]),
      comshortname: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
        UsernameValidator.cannotContainSpace]),
      locality: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        UsernameValidator.cannotContainSpace]),
      city: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        UsernameValidator.cannotContainSpace]),
      state: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        UsernameValidator.cannotContainSpace]),
      pin: new FormControl('',  [Validators.required, Validators.pattern('^[0-9]{6}$'),  UsernameValidator.cannotContainSpace]),
      // tslint:disable-next-line:max-line-length
      name: new FormControl('', [Validators.required,
                            Validators.minLength(1),
                            Validators.maxLength(10),
                            ]),
      type: new FormControl(),
      villa: new FormControl(),
      spoc1_Name: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        ]),
      spoc2_Name: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
       ]),
      spoc1_ph: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      spoc2_ph: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      spoc1_email:  new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      spoc2_email: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      check: new FormControl(true),
      number_of_blocks: new FormControl(),
      blocks: this.frmBuilder.array([])
    });
   }


   // get the controls from formgroup
get t() { return this.CommunityReg.get('blocks') as FormArray; }

Blocks(e) {
  const blocks = e.target.value || 0;
  if (this.t.length < blocks) {
      for (let i = this.t.length; i < blocks; i++) {
          this.t.push(this.frmBuilder.group({
              block: ['', Validators.required],
              flats: ['', [Validators.required, Validators.email]]
          }));
      }
  } else {
      for (let i = this.t.length; i >= blocks; i--) {
          this.t.removeAt(i);
      }
  }
}

   get form() {
     return this.CommunityReg.controls;
   }

   GetCommunityTypeData() {
     this.adminservice.CommunityType().subscribe(
       data => {
         this.communitytype = data;
         console.log('COMMTYPE', data);
       }
     );
   }

   type(e) {
    console.log(e.target.value);
    if (e.target.value === '2') {
      this.typee = true;
    } else if (e.target.value === '1') {
      this.typee = false;
    }
  }

  // submitting community data to the server.
  FormSubmit() {
    console.log(this.CommunityReg.value);
    this.adminservice.registerCommunity(this.CommunityReg.value).subscribe(
      res => alert('Community Registration Successfull..'),
      error => alert('Error At community Registration')
    );

    setTimeout(() => {
      this.CommunityReg.reset({});
    }, 2000);
  }

  ngOnInit(): void {
    this.GetCommunityTypeData();
  }

}
