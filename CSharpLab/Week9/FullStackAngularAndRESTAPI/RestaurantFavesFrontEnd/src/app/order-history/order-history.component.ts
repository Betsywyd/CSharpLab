import { Component } from '@angular/core';
import { RestaurantFavesService } from '../restaurant-faves.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {

  // newOrder:Order={} as Order;
  orders:Order[]=[];
  constructor(private orderService:RestaurantFavesService){
    this.orderService.getAllOrders().subscribe(
      (result)=>{
        console.log(result);
        this.orders=result;
      }
    )
  }

 

  addNew(newOrder:Order):void{
    this.orderService.addOrder(newOrder).subscribe(
      (result) =>
      {
      this.orders.push(newOrder);
      // this.newOrder = {} as Order;
      }
    )
  }

  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe(
      ()=>{
        for(let i:number=0;i<this.orders.length;i++){
          let o:Order=this.orders[i];
          if(o.id===id){
            this.orders.slice(i,1);
            break;
          }
        }
      }
    )
  }

updateOrder(newValues:Order,i:number){
  this.orderService.putOrder(newValues.id,newValues).subscribe(
    ()=>{
      this.orders[i]=newValues;
    }
  )
}

}
