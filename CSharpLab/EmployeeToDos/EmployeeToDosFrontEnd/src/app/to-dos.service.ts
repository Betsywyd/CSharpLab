import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  url:string="https://localhost:7101/api/ToDoes";
  constructor(private http:HttpClient) { }

  getAllToDos():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.url);
  }

  deleteToDo(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id)
  }

  upDateToDo(id:number,newValue:ToDo):Observable<any>{
    return this.http.put<any>(this.url+"/"+id,newValue)
  }

  getToDosByEmplyeeId(employeeId:number):Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.url+"/GetToDosByEmployeeId/"+employeeId)
  }

}
