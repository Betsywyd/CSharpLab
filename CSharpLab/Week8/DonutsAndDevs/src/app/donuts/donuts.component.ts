import { Component } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donut, Result } from '../donut';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  donutResult:Result[]=[];
  selected:Result={} as Result;

  constructor(private donuts: DonutService){
    this.donuts.getDonuts().subscribe(
      (result) => {
        this.donutResult = result.results; 
      }
    )
  }
   

}

