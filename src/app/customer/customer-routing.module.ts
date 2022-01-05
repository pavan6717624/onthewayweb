import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [

 
  {
    path: '',
    component: HomeComponent,


    children: [
      { path: '', component: CustomerComponent },
      { path: 'items', component: ItemsComponent },
     
      

    ],

    
  },



 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
