import { Component } from '@angular/core';
import { Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTodo';

todos:Todo[]=[{task:"fold clothes",completed:true},{task:"put clothes in dresser",completed:false},{task:"relax",completed:false},{task:"pet dog",completed:true},{task:"be awesome",completed:true}];


beCompleted(i){
  this.
}




}
