import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerpagesRoutingModule } from './ownerpages-routing.module';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnersidenavComponent } from '../layout/ownersidenav/ownersidenav.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { OwnerpagesComponent } from './ownerpages.component';
import { OwnerheaderComponent } from '../layout/ownerheader/ownerheader.component';
import { OwnerfooterComponent } from '../layout/ownerfooter/ownerfooter.component';
import { OwnerprofileComponent } from './ownerprofile/ownerprofile.component';
import { OwnerpropertyComponent } from './ownerproperty/ownerproperty.component';
import { OwnertenantsComponent } from './ownertenants/ownertenants.component';
import { OwnerreportsComponent } from './ownerreports/ownerreports.component';
import { OwnerboardmembersComponent } from './ownerboardmembers/ownerboardmembers.component';
import { OwnermaintanceComponent } from './ownermaintance/ownermaintance.component';
import { OwnercomplaintComponent } from './ownercomplaint/ownercomplaint.component';
import { OwnermemberComponent } from './ownermember/ownermember.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerreceiptsComponent } from './ownerreceipts/ownerreceipts.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [OwnerdashboardComponent, OwnersidenavComponent, OwnerpagesComponent, OwnerheaderComponent, OwnerfooterComponent, OwnerprofileComponent, OwnerpropertyComponent, OwnertenantsComponent, OwnerreportsComponent, OwnerboardmembersComponent, OwnermaintanceComponent, OwnercomplaintComponent, OwnermemberComponent, OwnerreceiptsComponent],
  imports: [
    CommonModule,
    OwnerpagesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OwnerpagesModule { }
