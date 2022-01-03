import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  check() {
    return this.http.get('http://localhost:8082/check');
  }

  constructor(private http: HttpClient) { }
}
