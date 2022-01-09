import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getLoginDetails() {
    return this.http.get('http://localhost:8086/getLoginDetails')
  }
  login(formData: FormData): Observable<any>
  {

    return this.http.post('http://localhost:8086/login',formData)
  }
  
  constructor(private http: HttpClient) { }
}
