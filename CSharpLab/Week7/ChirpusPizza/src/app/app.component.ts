import { Component } from '@angular/core';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  menuitems:MenuItem[]=[{Name:"Chicken Fingers",Category:"dinner",Price:11.99},
  {Name:"Pizza",Category:"dinner",Price:11.99},
  {Name:"Wings",Category:"sides",Price:11.99},
  {Name:"Breadsticks",Category:"sides",Price:4.99},
  {Name:"Ceasar Salad",Category:"salads",Price:5.99},
  {Name:"Cinnamon Roll",Category:"dessert",Price:8.99}]

  

  getByCategory(Cat:string):MenuItem[]{
   let matched:MenuItem[]=[];
  for(let i=0;i<this.menuitems.length;i++){
    if(this.menuitems[i].Category==Cat){
      matched.push(this.menuitems[i]);
    }
  }
  return matched;
  }

  getUniqueCategory():string[]{
  let categoryArr:string[]=[];
  for(let i=0;i<this.menuitems.length;i++){
    if(!categoryArr.includes(this.menuitems[i].Category)){
      categoryArr.push(this.menuitems[i].Category)
    }
  }
  return categoryArr
  }

}



