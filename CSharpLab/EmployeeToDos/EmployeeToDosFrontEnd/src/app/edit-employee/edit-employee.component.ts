import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  @Input() editEmployee={} as Employee;
  @Output() changed=new EventEmitter<Employee>();
  
  doneEditing():void{
    this.editEmployee.isEditing=false;
    this.changed.emit(this.editEmployee);
  }

}
