import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string="https://localhost:7101/api/Employees";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
  }

  createEmployee(newEmployee:Employee):Observable<any>{
    return this.http.post<any>(this.url,newEmployee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete<Employee>(this.url+"/"+id);
  }



}
