import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `

  <div *ngIf="childSelectedKeg">
    <hr>
   <h3>Edit Keg</h3>
    <div>
      <label>Enter Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div>
      <label>Enter Type:</label>
      <input [(ngModel)]="childSelectedKeg.type">
    </div>
    <div>
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
    </div>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }
}
