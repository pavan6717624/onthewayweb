import { Component, OnInit } from '@angular/core';
import { Hotel, Item } from 'src/app/customer/customer/customer.component';
import { HotelService } from '../hotel.service';
import { NzMessageService } from 'ng-zorro-antd/message';

export class OrderDetails
{

  id: number = 0;
  fromCity: string ='';
  toCity: string = '';
  orderType: string = '';
  orderOn : string = '';
  userId: string = '';
  mobile: string = '';
  totalPrice: number = 0;
  orderStatus: string = '';
  message: string = '';

}



@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel: Hotel = new Hotel();
  orderDetails: OrderDetails[] = [];
  receivedOrderDetails : OrderDetails[]=[];
  acceptedOrderDetails: OrderDetails[]=[];
  progressOrderDetails: OrderDetails[]=[];
  readyOrderDetails: OrderDetails[]=[];
  completedOrderDetails: OrderDetails[]=[];
  cancelledOrderDetails: OrderDetails[]=[];

  selectedOrder: OrderDetails = new OrderDetails();

  orderVisible=false;
  screenWidth: number = 0;

  loading1 = false;
  loading2 = false;

  items: Item[]=[];

  orderClose()
  {
    this.orderVisible=false;
  }

  constructor(private hotelService: HotelService, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.getHotelDetails();
    this.getOrderDetails();
    this.screenWidth=window.innerWidth;
  }

  getOrderDetails()
  {

    this.loading2=true;
    this.hotelService.getOrderDetails().subscribe(
      (res : any) => {

       this.orderDetails=res;

       this.receivedOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Received');
       this.acceptedOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Accepted');
       this.progressOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Progress');
       this.readyOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Ready');
       this.completedOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Completed');
       this.cancelledOrderDetails = this.orderDetails.filter(o => o.orderStatus === 'Cancelled');
     

        console.log(res);
        this.loading2=false;
     
      },
  
    
  
      (err) => {        this.loading2=false; console.log(err); }
    );
  }

  getHotelDetails()
  {

    this.loading1=true;

    this.hotelService.getHotelDetails().subscribe(
      (res : any) => {
       
        console.log(res);
        this.hotel=res;
        this.loading1=false;
      },
  
    
  
      (err) => {this.loading1=false;  console.log(err); }
    );
  }

  statusChanging=false;

  statusChange()
  {
    this.statusChanging=true;
    console.log(this.hotel.onlineStatus);
    var formData=new FormData();
    formData.set("hotelId",this.hotel.id+"");
    formData.set("hotelStatus",this.hotel.onlineStatus+"");
    this.hotelService.hotelStatus(formData).subscribe(
      (res : any) => {
       
        console.log(res);
        this.hotel=res;
        this.statusChanging=false;
     
      },
  
    
  
      (err) => { this.statusChanging=false; console.log(err); }
    );
  }

  loading3=false;

  getOrderItems(order: OrderDetails)
  {
    this.selectedOrder = order;
    this.orderVisible=true;
this.loading3=true;
    var formData=new FormData();
    formData.set("orderId",this.selectedOrder.id+"");


    this.hotelService.getOrderItems(formData).subscribe(
      (res : any) => {
       
        console.log(res);
        this.items=res;
        this.loading3=false;
      },
  
    
  
      (err) => {  this.loading3=false;  console.log(err); }
    );

  }


accept(order: OrderDetails)
{

}

rejectReason : string = '';

rejectVisible=false;

reject(order:OrderDetails)
{
  this.rejectVisible=true;
}

submitOrder(orderStatus: string)
{
  this.loading3=true;
  this.rejectVisible=false;
    var formData=new FormData();
    formData.set("orderId",this.selectedOrder.id+"");
    formData.set("rejectReason",this.rejectReason+"");
    formData.set("orderStatus",orderStatus);


    this.hotelService.submitOrder(formData).subscribe(
      (res : any) => {
       
        console.log(res);
      
        if(res)
        {
        
          this.msg.success('Order Status Submission Successful');
          this.getOrderDetails();

        }
        else
        {
          this.msg.success('Order Status Submission Failed');
        }

        this.orderClose();

      },
  
    
  
      (err) => {  this.loading3=false;  console.log(err); }
    );
}

}
