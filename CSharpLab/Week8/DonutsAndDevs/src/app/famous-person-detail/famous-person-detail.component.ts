import { Component, Input } from '@angular/core';
import { Complete } from '../famous-person';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent {
  @Input() famousPerson:Complete={} as Complete;

}
