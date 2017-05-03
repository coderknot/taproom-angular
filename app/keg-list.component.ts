import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor="let currentKeg of childKegList"><strong>Name:</strong> {{currentKeg.name}},<strong>type of beer:</strong> {{currentKeg.type}}, $ {{currentKeg.price}}, <strong>alcohol content:</strong> {{currentKeg.alcoholContent}} </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
