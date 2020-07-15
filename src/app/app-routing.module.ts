import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},

  // {path: 'members', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)}
  {path: 'admin', loadChildren: () => import('./admin/adminpages/admin.module').then(m => m.AdminModule)},
  {path: 'onboard', loadChildren: () => import('./onbording/onbording.module').then(m => m.OnbordingModule)},
  {path: 'owner', loadChildren: () => import('./owner/ownerpages/ownerpages.module').then(m => m.OwnerpagesModule)},
  {path: 'tenant', loadChildren: () => import('./tenant/tenantpages/tenantpages.module').then(m => m.TenantpagesModule)},
  {path: 'supervisor', loadChildren: () => import('./supervisor/supervisorpages/supervisorpages.module').then(m => m.SupervisorpagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
