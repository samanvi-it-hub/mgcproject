import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorpagesRoutingModule } from './supervisorpages-routing.module';
import { SupervisorpagesComponent } from './supervisorpages.component';
import { SupervdashboardComponent } from './supervdashboard/supervdashboard.component';
import { SupervemployeeComponent } from './supervemployee/supervemployee.component';
import { SupervcomplaintsComponent } from './supervcomplaints/supervcomplaints.component';
import { SupervattendanceComponent } from './supervattendance/supervattendance.component';
import { SupervpaymentsComponent } from './supervpayments/supervpayments.component';
import { SupervreceiptComponent } from './supervreceipt/supervreceipt.component';
import { SupervmaintananceComponent } from './supervmaintanance/supervmaintanance.component';
import { SupervvendorsComponent } from './supervvendors/supervvendors.component';
import { SupervheaderComponent } from '../layout/supervheader/supervheader.component';
import { SupervfooterComponent } from '../layout/supervfooter/supervfooter.component';
import { SupervsidenavComponent } from '../layout/supervsidenav/supervsidenav.component';
import { SupervboardmembersComponent } from './supervboardmembers/supervboardmembers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts'; // fonts provided for pdfmake
import { pdfMake } from 'pdfmake/build/pdfmake';

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ SupervisorpagesComponent,
                  SupervdashboardComponent,
                  SupervemployeeComponent,
                  SupervcomplaintsComponent,
                  SupervattendanceComponent,
                  SupervpaymentsComponent,
                  SupervreceiptComponent,
                  SupervmaintananceComponent,
                  SupervvendorsComponent,
                  SupervheaderComponent,
                  SupervfooterComponent,
                  SupervsidenavComponent,
                  SupervboardmembersComponent,
                ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SupervisorpagesRoutingModule,
    RouterModule
  ]
})
export class SupervisorpagesModule { }
