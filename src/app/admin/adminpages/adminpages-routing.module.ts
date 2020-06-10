import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminpagesComponent } from './adminpages.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmincommunityComponent } from './admincommunity/admincommunity.component';
import { AdminboardmembersComponent } from './adminboardmembers/adminboardmembers.component';
import { AdminresidentComponent } from './adminresident/adminresident.component';
import { AdminemployeeComponent } from './adminemployee/adminemployee.component';
import { AdminapprovalsComponent } from './adminapprovals/adminapprovals.component';
import { AdminbroadcastComponent } from './adminbroadcast/adminbroadcast.component';



const routes: Routes = [
  {
    path: '', component: AdminpagesComponent, children: [
      {path: '', component: AdmindashboardComponent},
      {path: 'dashboard', component: AdmindashboardComponent},
      {path: 'community', component: AdmincommunityComponent},
      {path: 'boardmembers', component: AdminboardmembersComponent},
      {path: 'resident', component: AdminresidentComponent},
      {path: 'employee', component: AdminemployeeComponent},
      {path: 'approvals', component: AdminapprovalsComponent},
      {path: 'broadcast', component: AdminbroadcastComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule {
}
