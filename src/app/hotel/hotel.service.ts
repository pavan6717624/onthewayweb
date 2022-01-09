import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  submitOrder(formData: FormData) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/submitOrder',formData);
  }
  getOrderItems(formData: FormData) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/getOrderItems',formData);
  }
  getOrderDetails() {
    return this.http.get('https://onthewayappdemo.herokuapp.com/getOrderDetails');
  }
  hotelStatus(formData: FormData) {
    return this.http.post('https://onthewayappdemo.herokuapp.com/hotelStatus',formData);
  }

  getHotelDetails() {
    return this.http.get('https://onthewayappdemo.herokuapp.com/getHotelDetails');
  }


  constructor(private http: HttpClient) { }
}
