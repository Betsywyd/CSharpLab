import { Component } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donut, DonutDetails, Result } from '../donut';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  donutResult:Result[]=[];
 
  selected:DonutDetails={} as DonutDetails;
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

