import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div class="container">
    <div class="selectMenu">
      <select (change)="onChange($event.target.value)">
        <option value="all">All Beers</option>
        <option value="low">Low Alcohol Content</option>
        <option value="high">High Alcohol Content</option>
      </select>
    </div>

   <div class="row">
     <div class="col-md-3" *ngFor="let currentKeg of childKegList | alcoholContent:filterByAlcoholContent">
        <div class="panel panel-default">
          <div class="panel-heading"><img src={{currentKeg.image}}></div>
            <div class="panel-body">
              <h4>{{currentKeg.name}}</h4>
              <div><strong>type of beer:</strong> {{currentKeg.type}}</div>
              <div><strong>price per pint:</strong> $ {{currentKeg.price}}</div>
              <div><strong>alcohol content:</strong> {{currentKeg.alcoholContent}} %</div> <div>({{currentKeg.pints}} pints remaining)</div>
              <div class="buttonRow">
                <button class="btn-primary"(click)="pintButtonHasbeenClicked(currentKeg)">Pint Sold!</button>
                <button class="btn-success" (click)="editButtonHasbeenClicked(currentKeg)">Edit Keg!</button>
              </div>
            </div>
        </div>
     </div>
   </div>
 </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintSender = new EventEmitter();

  editButtonHasbeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pintButtonHasbeenClicked(pintSold: Keg) {
    this.pintSender.emit(pintSold);
  }

  filterByAlcoholContent: string = "alcoholContent";

  onChange(optionFromMenu) {
    this.filterByAlcoholContent = optionFromMenu;
  }
}
