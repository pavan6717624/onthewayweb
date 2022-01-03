import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:'', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path:'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
