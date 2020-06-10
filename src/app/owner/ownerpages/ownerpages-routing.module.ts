import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerpagesComponent } from './ownerpages.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnerprofileComponent } from './ownerprofile/ownerprofile.component';
import { OwnerpropertyComponent } from './ownerproperty/ownerproperty.component';
import { OwnertenantsComponent } from './ownertenants/ownertenants.component';
import { OwnerreportsComponent } from './ownerreports/ownerreports.component';
import { OwnerboardmembersComponent } from './ownerboardmembers/ownerboardmembers.component';
import { OwnermaintanceComponent } from './ownermaintance/ownermaintance.component';
import { OwnercomplaintComponent } from './ownercomplaint/ownercomplaint.component';
import { OwnermemberComponent } from './ownermember/ownermember.component';


const routes: Routes = [
  { path: '',
    component: OwnerpagesComponent,
    children: [
      {path: '', component: OwnerdashboardComponent},
      {path: 'dashboard', component: OwnerdashboardComponent},
      {path: 'profile', component: OwnerprofileComponent},
      {path: 'property', component: OwnerpropertyComponent},
      {path: 'tenants', component: OwnertenantsComponent},
      {path: 'reports', component: OwnerreportsComponent},
      {path: 'boardmembers', component: OwnerboardmembersComponent},
      {path: 'maintance', component: OwnermaintanceComponent},
      {path: 'complaints', component: OwnercomplaintComponent},
      {path: 'members', component: OwnermemberComponent},
      {path: 'logout', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerpagesRoutingModule { }
