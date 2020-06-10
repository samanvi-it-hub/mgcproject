import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OnbordingRoutingModule } from './onbording-routing.module';
import { OwneronbordingComponent } from './owneronbording/owneronbording.component';
import { OnbordingComponent } from './onbording.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BordingService } from './bording.service';


@NgModule({
  declarations: [OwneronbordingComponent, OnbordingComponent],
  imports: [
    CommonModule,
    OnbordingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BordingService]
})
export class OnbordingModule { }
