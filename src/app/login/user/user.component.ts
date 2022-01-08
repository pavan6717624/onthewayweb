import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus } from '../login/login.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 userid: string='';
 loginStatus: LoginStatus = new LoginStatus();


 

  constructor(private router: Router) { 

    const navigation = this.router.getCurrentNavigation();
    this.loginStatus =  (navigation?.extras?.state?.loginStatus); 

    console.log("user login");

   // alert(this.loginStatus.userType+" ("+this.loginStatus.userId+") succesfully loggged in");

   
    if(!this.loginStatus)
    {
      
    }

    else if(this.loginStatus.userType === 'Admin')
    {
     this.router.navigate(['restaurant'],  { state: {loginStatus: this.loginStatus }}); 
    }

    else if(this.loginStatus.userType === 'Customer')
    {
     this.router.navigate(['customer'],  { state: {loginStatus: this.loginStatus }}); 
    }
    else if(this.loginStatus.userType === 'Restaurant')
    {
     this.router.navigate(['restaurant'],  { state: {loginStatus: this.loginStatus }}); 
    }
     


    
  }

  ngOnInit(): void {
  }

}
