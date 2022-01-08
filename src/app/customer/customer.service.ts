import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from './customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getItems(formData: FormData) {
    return this.http.post('http://localhost:8086/getItems',formData);
  }
  getHotels(formData: FormData) {
    return this.http.post('http://localhost:8086/getHotels',formData);
  }

  payment(order: OrderDetails) {
    return this.http.post('http://localhost:8086/payment',order);
  }
  check() {
    return this.http.get('http://localhost:8086/check');
  }

  getCities() {
    return this.http.get('http://localhost:8086/getCities');
  }


  constructor(private http: HttpClient) { }
}
