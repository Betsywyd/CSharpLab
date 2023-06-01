import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut, Result } from './donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  url:string ="https://grandcircusco.github.io/demo-apis/donuts.json";
  // https://grandcircusco.github.io/demo-apis/donuts/1.json



  constructor(private http:HttpClient) { }

  getDonuts():Observable<Donut>{
    return this.http.get<Donut>(this.url);
  }

  // getDonutById(id:number):Observable<Result>{
  //   return this.http.get<Result>(this.url+id+".json");
  // }

}
