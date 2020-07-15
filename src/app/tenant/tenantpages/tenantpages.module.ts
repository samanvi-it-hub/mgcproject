import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantpagesRoutingModule } from './tenantpages-routing.module';
import { TenantdashboardComponent } from './tenantdashboard/tenantdashboard.component';
import { TenantprofileComponent } from './tenantprofile/tenantprofile.component';
import { TenantmaintenanceComponent } from './tenantmaintenance/tenantmaintenance.component';
import { TenantpaymentsComponent } from './tenantpayments/tenantpayments.component';
import { TenantreceiptsComponent } from './tenantreceipts/tenantreceipts.component';
import { TenantboardmembersComponent } from './tenantboardmembers/tenantboardmembers.component';
import { TenantpagesComponent } from './tenantpages.component';
import { TenantheaderComponent } from '../layout/tenantheader/tenantheader.component';
import { TenantfooterComponent } from '../layout/tenantfooter/tenantfooter.component';
import { TenantsidenavComponent } from '../layout/tenantsidenav/tenantsidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantcomplaintsComponent } from './tenantcomplaints/tenantcomplaints.component';


@NgModule({
  declarations: [TenantdashboardComponent,
                 TenantprofileComponent,
                TenantmaintenanceComponent,
                TenantpaymentsComponent,
                TenantreceiptsComponent,
                TenantboardmembersComponent,
                TenantpagesComponent,
                TenantheaderComponent,
                TenantfooterComponent,
                TenantsidenavComponent,
                TenantcomplaintsComponent],
  imports: [
    CommonModule,
    TenantpagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TenantpagesModule { }
