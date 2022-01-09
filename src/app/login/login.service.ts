import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getLoginDetails() {
    return this.http.get('https://onthewayappdemo.herokuapp.com/getLoginDetails')
  }
  login(formData: FormData): Observable<any>
  {

    return this.http.post('https://onthewayappdemo.herokuapp.com/login',formData)
  }
  
  constructor(private http: HttpClient) { }
}
