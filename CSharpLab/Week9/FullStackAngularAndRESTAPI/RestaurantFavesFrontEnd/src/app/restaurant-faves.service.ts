import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {
  restaurantName:string=""
  url:string="https://localhost:7097/api/Order/"
  // https://localhost:7097/api/Order/orders?restaurant=KFC&orderAgain=true
  // https://localhost:7097/api/Order/orders/12 
  //https://localhost:7097/api/Order/allOrders

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.url+"allOrders");
  }
  
  getOrder(restaurantName:string,orderAgain:boolean):Observable<Order>{
   return this.http.get<Order>(this.url+"orders?restaurant="+restaurantName+"&orderAgain="+orderAgain);
  }

  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.url+"orders",order);
  }

  deleteOrder(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"orders/"+id);
  }

  putOrder(id:number,newValues:Order):Observable<any>{
    return this.http.put<any>(this.url+"orders/"+id,newValues);
  }



}
