import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supervcomplaints',
  templateUrl: './supervcomplaints.component.html',
  styleUrls: ['./supervcomplaints.component.scss']
})
export class SupervcomplaintsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  ComplaintReg ;
  allcompnaints;
  allemployees;
  alltasklist;
  allunits;
  allhousenumbers;
  type;
  units;
  houses;
  history;
  AssignTask: FormGroup;
  RaiseComplaint: FormGroup;
  EditComplaintReg: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private frmBuilder: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.AssignTask = this.frmBuilder.group({
      communityid: new FormControl(),
      aempid: new FormControl(),
      atask: new FormControl(),
    });
  }
  // tslint:disable-next-line:align
  ComplaintRegistration() {
    this.ComplaintReg = this.frmBuilder.group({
      communityid: new FormControl(),
      unitid: new FormControl(),
      hunitid: new FormControl(),
      complaint: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      urgent: new FormControl()
    });
  }
  get form() {
    return this.ComplaintReg.controls;
  }

  EditComplaint() {
    this.EditComplaintReg = this.frmBuilder.group({
      compid: new FormControl(),
      compdate: new FormControl(),
      complaint: new FormControl(),
      description: new FormControl(),
      comments: new FormControl(),
      empid: new FormControl(),
      supcomments: new FormControl(),
      status: new FormControl(),
      startdate: new FormControl(),
      enddate: new FormControl()
  });
}

  EditCData(id, c, cd, cc, cda, ceid) {
    this.EditComplaintReg.get('compid').setValue(id);
    this.EditComplaintReg.get('compdate').setValue(cda);
    this.EditComplaintReg.get('complaint').setValue(c);
    this.EditComplaintReg.get('description').setValue(cd);
    this.EditComplaintReg.get('comments').setValue(cc);
    this.EditComplaintReg.get('empid').setValue(ceid);
  }
ViewCData(id) {
  console.log(id);
  this.service.History(id).subscribe(
    data => {
      this.history = data;
    }
  );
}
getAllComplaints(id) {
    this.service.AllComplaints(id).subscribe(
      data => {
        this.allcompnaints = data;
        console.log('COMPLAINTS', data);
      }
    );
  }

getAllEmployees(id) {
    this.service.getAllEmployees(id).subscribe(
      data => {
        this.allemployees = data;
      }
    );
  }
getAllTasks() {
    this.service.getTasklist().subscribe(
      data => {
        this.alltasklist = data;
      }
    );
  }
SendEditComplaint() {
  console.log( this.EditComplaintReg.value);
  this.service.SUpdateComplaint(this.EditComplaintReg.value).subscribe(
    res => this.toastr.success('Successfully Complaint Updated', 'SUCCESS'),
    err => this.toastr.error('Error At Complaint Updating', 'ERROR'),
  );
  this.EditComplaintReg.reset();
  setTimeout(() => {
    window.location.reload();
  }, 1000);

}
SendAssignTask() {
    this.AssignTask.get('communityid').setValue(this.communityid);
    console.log(this.AssignTask.value);
    this.service.AddDailyTask(this.AssignTask.value).subscribe(
      res => this.toastr.success('Successfully Task Assigned', 'SUCCESS'),
      err => this.toastr.error('Error At Task Assign', 'ERROR'),
    );
    this.AssignTask.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  SendComplaint() {
    this.ComplaintReg.get('communityid').setValue(this.communityid);
    console.log(this.ComplaintReg.value);
    this.service.RegComplaints(this.ComplaintReg.value).subscribe(
      res => this.toastr.success('Successfully Task Assigned', 'SUCCESS'),
      err => this.toastr.error('Error At Task Assign', 'ERROR'),
    );
    this.ComplaintReg.reset();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  getallunits(id) {
    this.service.getAllUnits(id).subscribe(
      data => {
        this.allunits = data.data;
        this.type = data.type;
        console.log(this.allunits);
        console.log('type', data.type);
      }
    );
  }
ngOnInit(): void {
    this.getallunits(this.communityid);
    this.ComplaintRegistration();
    this.EditComplaint();
    this.getAllComplaints(this.communityid);
    this.getAllEmployees(this.communityid);
    this.getAllTasks();
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         columnDefs: [
          {
              targets: 0,
              checkboxes: {
                selectRow: true
             }
          }
       ],
        lengthMenu: [[5, 10, 15], [5, 10, 15]],
        pageLength: 10});
    }, 1000);
  }

}
