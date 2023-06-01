import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complete, FamousPerson } from './famous-person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamousPersonService {

  url:string="https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";

  constructor(private http:HttpClient) { }

  getFamousPeople():Observable<FamousPerson>{
    return this.http.get<FamousPerson>(this.url);
  }

}
