import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ToDo } from '../to-do';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

employees:Employee[]=[];
toDos:ToDo[]=[];
// displayEditEmployee:boolean=false;

constructor(private employeeApi:EmployeeService,private toDoApi:ToDosService){
 
}

ngOnInit():void{
  this.employeeApi.getAllEmployees().subscribe(
    (result)=>{
      this.employees=result;
      for(let i=0;i<this.employees.length;i++){
        this.toDoApi.getToDosByEmplyeeId(this.employees[i].id).subscribe(
          (result)=>{
            this.employees[i].toDos=result;
          }
        )
      }
    }
  )
}

addEmployee(newEmployee:Employee){
  this.employeeApi.createEmployee(newEmployee).subscribe(
    ()=>{
     this.employees.push(newEmployee);
    }
  )
}

  
deleteEmployee(id:number,index:number){
  this.employeeApi.deleteEmployee(id).subscribe(
    ()=>{
      this.employees.splice(index,1);
    }
  )
}

editEmployee(index:number){
  for(let i=0;i<=index;i++){
    if(i==index){
      this.employees[i].isEditing=true
       }
else this.employees[i].isEditing=false;
  }

}

updateEmployee(newVale:Employee,index:number){
 
 this.employeeApi.updateEmployee(newVale,index).subscribe(
  ()=>{
    this.employees[index]=newVale;
  }
 )
}

// getToDosByEmployeeId()


// deleteEmployee(employeeId:number,i:number){
// this.
// }


}
