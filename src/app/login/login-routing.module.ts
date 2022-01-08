import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';
import { HotelComponent } from '../hotel/hotel/hotel.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [

 
  {
    path: '',
    component: LoginComponent,


    children: [
      { path: '', component: LoginComponent },
     
      

    ],

    
  },


  { path: 'user', component: UserComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
