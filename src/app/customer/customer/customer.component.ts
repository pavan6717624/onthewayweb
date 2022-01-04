import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.check();
  }


  fromCity: string = '';
  toCity: string = '';
  orderType: string= '';
  distance: string = '';

  check()
  {
    this.customerService.check().subscribe(
      (res) => {
       
        console.log(res);
       
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }
}
