import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminsidenavComponent } from './adminsidenav/adminsidenav.component';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
  ]
})
export class AdminlayoutModule { }
