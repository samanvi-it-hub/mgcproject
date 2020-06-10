import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnbordingComponent } from './onbording.component';
import { OwneronbordingComponent } from './owneronbording/owneronbording.component';


const routes: Routes = [
  {path: '', component: OwneronbordingComponent},
  {path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnbordingRoutingModule { }
