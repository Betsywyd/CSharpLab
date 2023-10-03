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

  

// getToDosByEmployeeId()


// deleteEmployee(employeeId:number,i:number){
// this.
// }


}
