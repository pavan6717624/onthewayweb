import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { OrderSuccessComponent } from './order-success/order-success.component';




@NgModule({
  declarations: [
    CustomerComponent,
    ItemsComponent,
    HomeComponent,
    OrderSuccessComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    NzCardModule,
    NzRateModule
  ]
})
export class CustomerModule { }
