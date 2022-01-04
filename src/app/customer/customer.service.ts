import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getHotels() {
    return this.http.get('http://localhost:8086/getHotels');
  }
  check() {
    return this.http.get('http://localhost:8086/check');
  }

  getCities() {
    return this.http.get('http://localhost:8086/getCities');
  }


  constructor(private http: HttpClient) { }
}
