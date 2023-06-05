import { Component, Input, OnInit } from '@angular/core';
import { DonutDetails, Result } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent{  
 
  selected:
  constructor(private donuts: DonutService){
    this.donuts.getDonuts().subscribe(
      (result) => {
        this.donutResult = result.results; 
      }
    )
  }
 
  getDonutDetail(id:number){
    this.donuts.getDonutById(this.selected.id).subscribe(
      (result)=>{
        this.selected=result;
      }
    )
      }
      
}
