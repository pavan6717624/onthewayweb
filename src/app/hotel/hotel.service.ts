import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  submitOrder(formData: FormData) {
    return this.http.post('http://localhost:8086/submitOrder',formData);
  }
  getOrderItems(formData: FormData) {
    return this.http.post('http://localhost:8086/getOrderItems',formData);
  }
  getOrderDetails() {
    return this.http.get('http://localhost:8086/getOrderDetails');
  }
  hotelStatus(formData: FormData) {
    return this.http.post('http://localhost:8086/hotelStatus',formData);
  }

  getHotelDetails() {
    return this.http.get('http://localhost:8086/getHotelDetails');
  }


  constructor(private http: HttpClient) { }
}
