import { Component } from '@angular/core';
import { FamousPersonService } from '../famous-person.service';
import { Complete } from '../famous-person';



@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {

  famousPeopleList:Complete[]=[];

  constructor(private famousPeople:FamousPersonService){
     this.famousPeople.getFamousPeople().subscribe(
      (result) => {
        this.famousPeopleList = result.complete; 
      }
    )
  }




}
