import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as shajs from 'sha.js';
export class LoginStatus {
  userId: string = "";
  userType: string = "";
  loginStatus: boolean = false;
  jwt: string = '';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private msg: NzMessageService) {
  }


  userid: string = "";
  passwordVisible = false;
  passwordVisible1 = false;
  passwordVisible2 = false;
  password: string = "";
  logginStatus: boolean = false;


  userId: string = "";
  email: string = "";
  city: string = "";
  otp: string= '';
  checkingOTP = false;
  checkedOTP = false;
  changepassword : string = '';
  confirmpassword: string ='';
  loginStatus: LoginStatus = new LoginStatus();
  ngOnInit(): void {
    this.getLoginDetails();


    // this.login();
   }
 
   getLoginDetails()
   {
     this.logginStatus=true;
     this.loginService.getLoginDetails().subscribe(
       (res:any) => {
        this.logginStatus=false;
         this.loginStatus=res;
         const token =    localStorage.getItem('token');
         if(this.loginStatus.loginStatus && token)
         {
         this.loginStatus.jwt=token;
         this.router.navigate(['user'],  { state: {loginStatus: res }}); 
         }
       },
       (err) => { this.logginStatus=false; }
     );
   }

login()
{
  this.logginStatus = true;
  var formData = new FormData();
  formData.set("username", this.userid);

  this.password = (shajs('sha256').update(this.password).digest('hex'));

  formData.set("password", this.password);
  this.loginService.login(formData).subscribe(
    (res) => {
      this.loginStatus = res; 
      console.log(res);
      if (this.loginStatus.loginStatus) {
      this.logginStatus = false;


      let tokenStr= 'Bearer '+this.loginStatus.jwt;
      localStorage.setItem('token', tokenStr);

      this.router.navigate(['user'],  { state: {loginStatus: res }}); 
      }
      else {
        this.msg.create("error", "Invalid Credientails..");
        this.password = "";
        this.logginStatus = false;
      }
    },

  

    (err) => {  this.password = ""; this.msg.create("error", "Could not Connect to Sever. Please Try After Some Time..."); this.logginStatus = false; }
  );

}

}
