import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sum } from 'ng-zorro-antd/core/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
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
onlineStatus: Boolean =  false;
}

export class Cart
{
  items: Item[]=[];
  totalPrice: number = 0;
}

export class OrderDetails
{
  fromCity: string = '';
  toCity: string = '';
  orderType: string = '';
  cart: Cart = new Cart();
  hotelId: number = 0;
}

export class Item
{
id: number = 0;
name: string = '';
price: number = 0.0;
cookingTime: number = 0;
availability: boolean = true;
count: number = 0;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private notification: NzNotificationService, private router: Router, private customerService: CustomerService, private msg: NzMessageService) { }

  screenWidth:number=0;


  ngOnInit(): void {
    this.check();
    this.getCities();
    this.screenWidth = window.innerWidth;
  
  }


  fromCity: string = '';
  toCity: string = '';
  orderType: any= '';
  distance: string = '';
  cities: City[]=[];
  cities1: City[]=[];
  hotels: Hotel[]=[];
  items: Item[]=[];
  count: number[]=[];
  visible = false;
  selectedHotel: Hotel = new Hotel();
  cart: Cart = new Cart();
  cartVisible: boolean = false;

  loading = false;
  loading1 = false;
  loading2 = false;



  cartOpen()
  {
    this.cartVisible=true;
  }

  cartClose()
{
  this.cartVisible=false;
}
  orderTypes: string [] = ["Take Away","Dine In","Drive In"];
  close()
  {
    this.visible=false;
    this.cart=new Cart();
  }

  addItem(item: Item)
  {
    console.log("adding "+item);
    if(item.count == null || item.count < 0)
    item.count = 0;
    item.count++;
   
    this.cart.items.push (item);
    console.log(this.cart);
    this.sum()
  }

  sum()
  {
    this.cart.totalPrice=0;
    for(var i=0;i<this.cart.items.length;i++)
    {
      this.cart.totalPrice+=(this.cart.items[i].price * this.cart.items[i].count);
    }
    console.log("total price == "+this.cart.totalPrice);
  }
  decreement(item: Item)
  {
    console.log("decreementing "+item);
    item.count--;
    if(item.count<=0)
    {
      item.count = 0;
      var index=this.cart.items.indexOf(item);
      this.cart.items.splice(index,1);

      if(this.cart.items.length == 0)
      this.cartVisible=false;

    }
    console.log(this.cart);
    this.sum()
  }

  increement(item: Item)
  {
    console.log("increementing "+item);
    item.count++;
    console.log(this.cart);
    this.sum()
  }
  check()
  {
    this.customerService.check().subscribe(
      (res) => {
       
        console.log(res);
       
       
      },
  
    
  
      (err) => {   console.log(err); }
    );
  }
loading4 = false;
  payment()
  {

    this.loading4=true;

    var order : OrderDetails = new OrderDetails();

    order.cart=this.cart;
    order.fromCity=this.fromCity;
    order.toCity=this.toCity;
    order.orderType=this.orderType;
    order.hotelId = this.selectedHotel.id;

    this.customerService.payment(order).subscribe(
      (res) => {
       
        console.log(res);
        if(res)
        {
          this.router.navigate(['/customer/success']); 
        }
       else
       {
        this.notification.create(
          'error',
          'Order Unsuccessful',
          'Sorry Your Order Payment got Failed. Please Try Again.',
          { nzDuration: 0 }
          );
       }
       this.loading4=false;
        
       
      },
  
    
  
      (err) => {    this.loading4=false;console.log(err); }
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
    this.loading=true;
    this.customerService.getHotels(formData).subscribe(
      (res : any) => {
       
        console.log(res);
        this.hotels=res;
        if(this.hotels!=null && this.hotels.length == 0)
        this.msg.error('No Restaurants Found.');
        this.loading=false;
       
      },
  
    
  
      (err) => {   console.log(err);this.loading=false; }
    );
  }

  getItems(id:number, i:number)
  {
    var formData = new FormData();
    formData.set("hotelId",id+"");

    console.log("hotelId :: "+id);

    this.loading1=true;
    this.customerService.getItems(formData).subscribe(
      (res : any) => {
       
        console.log(res);
        this.items=res;
        for(var i=0;i<this.items.length;i++)
        {
          this.count[i]=0;
        }
       
       this.loading1=false;
      },
  
    
  
      (err) => {   console.log(err); this.loading1=false;}
    );
    this.selectedHotel=this.hotels[i];
this.visible=true;
   // this.router.navigate(['/customer/items'],{ state: { hotel: this.hotels[id] } }); 
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
    this.loading2=true;
    this.customerService.getCities().subscribe(
      (res : any) => {
       
        console.log(res);
        this.cities=res;
       this.loading2=false;
       
      },
  
    
  
      (err) => {  this.loading2=false; console.log(err); }
    );
  }

}
