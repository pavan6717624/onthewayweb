import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
distance: number = 0.0;
address: string = '';
}

export class Item
{
id: number = 0;
name: string = '';
price: number = 0.0;
cookingTime: number = 0;
availablity: boolean = true;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private customerService: CustomerService, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.check();
    this.getCities();
  
  }


  fromCity: string = '';
  toCity: string = '';
  orderType: string= '';
  distance: string = '';
  cities: City[]=[];
  cities1: City[]=[];
  hotels: Hotel[]=[];
  items: Item[]=[];

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
 

    if(this.fromCity==null || this.fromCity==='' || (this.fromCity+"").length != 1)
    this.msg.error("Please provide 'From City'");

    else if(this.toCity==null || this.toCity==='' || (this.toCity+"").length != 1)
    this.msg.error("Please provide 'To City'");

    else if(this.orderType==null || this.orderType === '' || this.orderType.length == 0) 
    this.msg.error("Please provide 'Order Type'");
    
    else if(this.fromCity!=null && (this.fromCity+"").length == 1 && this.toCity!=null && (this.toCity+"").length == 1 && this.orderType!=null && (this.orderType+"").length > 0)
   {
     var formData = new FormData();
     formData.set("fromCity",this.fromCity);
     formData.set("toCity",this.toCity);
     formData.set("orderType",this.orderType);
     formData.set("distance",this.distance);
     this.getHotels(formData);
   }

  }

  getHotels(formData: FormData)
  {
    this.customerService.getHotels(formData).subscribe(
      (res : any) => {
       
        console.log(res);
        this.hotels=res;
        if(this.hotels!=null && this.hotels.length == 0)
        this.msg.error('No Restaurants Found.')
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }

  getItems(id:number)
  {
    // var formData = new FormData();
    // formData.set("hotelId",id+"");

    // this.customerService.getItems(formData).subscribe(
    //   (res : any) => {
       
    //     console.log(res);
    //     this.items=res;
       
       
    //   },
  
    
  
    //   (err) => {   console.log(err); }
    // );

    this.router.navigate(['/customer/items'],{ state: { hotel: this.hotels[id] } }); 
  }
  

  change1()
  {
    this.toCity = '';
    if(this.fromCity!=null && this.fromCity >= "0")
    this.cities1 = this.cities.filter( o => o.id != Number(this.fromCity));
    this.hotels=[];
  }
  change2()
  {
    this.hotels =[];
  }
  change3()
  {
    this.hotels =[];
  }  change4()
  {
    this.hotels =[];
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
