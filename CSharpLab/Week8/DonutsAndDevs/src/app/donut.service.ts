import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut, DonutDetails, Result } from './donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  url:string ="https://grandcircusco.github.io/demo-apis/donuts";
  // https://grandcircusco.github.io/demo-apis/donuts/1.json



  constructor(private http:HttpClient) { }

  getDonuts():Observable<Donut>{
    return this.http.get<Donut>(this.url+".json");
  }

  getDonutById(id:number):Observable<DonutDetails>{
    return this.http.get<DonutDetails>(this.url+id+".json");
  }

}
