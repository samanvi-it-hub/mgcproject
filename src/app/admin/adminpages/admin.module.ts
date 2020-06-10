import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmincommunityComponent } from './admincommunity/admincommunity.component';
import { AdminboardmembersComponent } from './adminboardmembers/adminboardmembers.component';
import { AdminresidentComponent } from './adminresident/adminresident.component';
import { AdminemployeeComponent } from './adminemployee/adminemployee.component';
import { AdminapprovalsComponent } from './adminapprovals/adminapprovals.component';
import { AdminPagesRoutingModule } from './adminpages-routing.module';
import { AdminpagesComponent } from './adminpages.component';
import { AdminlayoutModule } from '../layouts/adminlayout.module';
import { AdminheaderComponent } from '../layouts/adminheader/adminheader.component';
import { AdminfooterComponent } from '../layouts/adminfooter/adminfooter.component';
import { AdminsidenavComponent } from '../layouts/adminsidenav/adminsidenav.component';
import { AdminService } from './admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminbroadcastComponent } from './adminbroadcast/adminbroadcast.component';



@NgModule({
  declarations: [
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidenavComponent,
    AdmindashboardComponent,
    AdmincommunityComponent,
    AdminboardmembersComponent,
    AdminresidentComponent,
    AdminemployeeComponent,
    AdminapprovalsComponent,
    AdminpagesComponent,
    AdminbroadcastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminPagesRoutingModule
  ],
  providers: [AdminService],
})
export class AdminModule { }
