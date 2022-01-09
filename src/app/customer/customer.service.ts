import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from './customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getItems(formData: FormData) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/getItems',formData);
  }
  getHotels(formData: FormData) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/getHotels',formData);
  }

  payment(order: OrderDetails) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/payment',order);
  }
  check() {
    return this.http.get('https://onthewayappdemo.herokuapp.com/check');
  }

  getCities() {
    return this.http.get('https://onthewayappdemo.herokuapp.com/getCities');
  }


  constructor(private http: HttpClient) { }
}
