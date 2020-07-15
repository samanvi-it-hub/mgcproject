import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorpagesComponent } from './supervisorpages.component';
import { SupervdashboardComponent } from './supervdashboard/supervdashboard.component';
import { SupervemployeeComponent } from './supervemployee/supervemployee.component';
import { SupervvendorsComponent } from './supervvendors/supervvendors.component';
import { SupervcomplaintsComponent } from './supervcomplaints/supervcomplaints.component';
import { SupervattendanceComponent } from './supervattendance/supervattendance.component';
import { SupervmaintananceComponent } from './supervmaintanance/supervmaintanance.component';
import { SupervpaymentsComponent } from './supervpayments/supervpayments.component';
import { SupervreceiptComponent } from './supervreceipt/supervreceipt.component';
import { SupervboardmembersComponent } from './supervboardmembers/supervboardmembers.component';



const routes: Routes = [
  { path: '',
  component: SupervisorpagesComponent,
  children: [
    {path: '', component: SupervdashboardComponent},
    {path: 'dashboard', component: SupervdashboardComponent},
    {path: 'employee', component: SupervemployeeComponent},
    {path: 'vendors', component: SupervvendorsComponent},
    {path: 'complaints', component: SupervcomplaintsComponent},
    {path: 'attendance', component: SupervattendanceComponent},
    {path: 'maintance', component: SupervmaintananceComponent},
    {path: 'payments', component: SupervpaymentsComponent},
    {path: 'receipts', component: SupervreceiptComponent},
    {path: 'boardmembers', component: SupervboardmembersComponent},
    {path: 'logout', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorpagesRoutingModule { }
