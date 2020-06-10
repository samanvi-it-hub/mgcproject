import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', component: LoginComponent,
   children: [
     {path: '', component: SigninComponent},
    //  {path: 'admin', loadChildren: () => import('../admin/adminpages/admin.module').then(m => m.AdminModule)},
    //  {path: 'onboard', loadChildren: () => import('../onbording/onbording.module').then(m => m.OnbordingModule)}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
