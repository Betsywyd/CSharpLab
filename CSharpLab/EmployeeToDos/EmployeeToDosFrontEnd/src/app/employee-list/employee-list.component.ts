import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

employees:Employee[]=[];

constructor(private employeeApi:EmployeeService){
 
}

ngOnInit():void{
  this.employeeApi.getAllEmployees().subscribe(
    (result)=>{
      this.employees=result;
    }
  )
}


}
