import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../order';
import { RestaurantFavesService } from '../restaurant-faves.service';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent {
  newOrder:Order={} as Order;

  @Output() changed = new EventEmitter<Order>();
  
  addNew(){
    this.changed.emit(this.newOrder);
  }
}
