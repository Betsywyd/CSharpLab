import { Component, Input } from '@angular/core';
import { Result } from '../donut';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent {

  @Input() donut:Result={} as Result;
}
