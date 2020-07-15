import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantpagesComponent } from './tenantpages.component';
import { TenantdashboardComponent } from './tenantdashboard/tenantdashboard.component';
import { TenantprofileComponent } from './tenantprofile/tenantprofile.component';
import { TenantmaintenanceComponent } from './tenantmaintenance/tenantmaintenance.component';
import { TenantpaymentsComponent } from './tenantpayments/tenantpayments.component';
import { TenantreceiptsComponent } from './tenantreceipts/tenantreceipts.component';
import { TenantboardmembersComponent } from './tenantboardmembers/tenantboardmembers.component';
import { TenantcomplaintsComponent } from './tenantcomplaints/tenantcomplaints.component';


const routes: Routes = [
  {
    path: '',
    component: TenantpagesComponent,
    children: [
      {path: '', component: TenantdashboardComponent},
      {path: 'dashboard', component: TenantdashboardComponent},
      {path: 'profile', component: TenantprofileComponent},
      {path: 'maintenance', component: TenantmaintenanceComponent},
      {path: 'payments', component: TenantpaymentsComponent},
      {path: 'receipts', component: TenantreceiptsComponent},
      {path: 'boardmembers', component: TenantboardmembersComponent},
      {path: 'complaints', component: TenantcomplaintsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantpagesRoutingModule { }
