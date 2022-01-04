import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CustomerService } from '../customer.service';

export class City
{
  id: number = 0;
  name: string = '';
}

export class Hotel
{
id: number = 0;
name: string = '';
onlineStatus: boolean = true;
address: string = '';
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.check();
    this.getCities();
    this.getHotels();
  }


  fromCity: string = '';
  toCity: string = '';
  orderType: string= '';
  distance: string = '';
  cities: City[]=[];
  cities1: City[]=[];
  hotels: Hotel[]=[];

  check()
  {
    this.customerService.check().subscribe(
      (res) => {
       
        console.log(res);
       
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }

  getRestaurants()
  {

    if(this.fromCity==null || (this.fromCity+"").length != 1)
    this.msg.error("Please provide 'From City'");

    if(this.toCity==null || (this.toCity+"").length != 1)
    this.msg.error("Please provide 'To City'");

    if(this.orderType==null || this.orderType === '' || this.orderType.length == 0) 
    this.msg.error("Please provide 'Order Type'");
    
    if(this.fromCity!=null && (this.fromCity+"").length == 1 && this.toCity!=null && (this.toCity+"").length == 1 && this.distance!= null && (this.distance+"").length > 0 && this.orderType!=null && (this.orderType+"").length > 0)
   {
     this.getHotels();
   }

  }

  getHotels()
  {
    this.customerService.getHotels().subscribe(
      (res : any) => {
       
        console.log(res);
        this.hotels=res;
       
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }
  

  provideCity2()
  {
    this.toCity = '';
    if(this.fromCity!=null && this.fromCity >= "0")
    this.cities1 = this.cities.filter( o => o.id != Number(this.fromCity));
  }

  getCities()
  {
    this.customerService.getCities().subscribe(
      (res : any) => {
       
        console.log(res);
        this.cities=res;
       
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }

}
