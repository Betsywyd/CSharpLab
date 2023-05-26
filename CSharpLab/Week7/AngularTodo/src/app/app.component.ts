import { Component } from '@angular/core';
import { Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTodo';

  showForm:boolean = false;
todos:Todo[]=[{task:"fold clothes",completed:true},{task:"put clothes in dresser",completed:false},{task:"relax",completed:false},{task:"pet dog",completed:true},{task:"pet cat",completed:false},{task:"be awesome",completed:true}];
newTodo:Todo={task:"",completed:false};

//deleted:boolean=false;

toComplete(i:number){
 this.todos[i].completed=true;
}

toggleForm():void{
this.showForm=!this.showForm;
}

//  removeTask(i:number):void{

// for(let j=0;j<this.todos.length;j++){
//   this.deleted=false;
// }
// this.todos.slice(i,1);
// }

addTodo(){
 //this.isAdding=true;
this.todos.push(this.newTodo);
this.newTodo={task:"",completed:false};
this.showForm=false;
}

allCompleted():boolean{

  let count=0;
  for(let i=0;i<this.todos.length;i++){
  if(this.todos[i].completed===true){
    count++;
  }
  }
  if(count===this.todos.length){
    return true;
  }
  return false;

}

}
