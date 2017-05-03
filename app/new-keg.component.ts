import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h3>New Keg</h3>
    <div>
      <label>Enter Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Type:</label>
      <input #newType>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent>
    </div>
    <div>
      <label>Enter Image URL:</label>
      <input #newImage>
    </div>
    <button (click)="submitForm(newName.value, newType.value, newPrice.value, newAlcoholContent.value, newImage.value); newName.value=''; newType.value=''; newPrice.value=''; newAlcoholContent.value=''; newImage.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, type: string, price: number, alcoholContent: number, image: string) {
    var newKegToAdd: Keg = new Keg(name, type, price, alcoholContent, image);
    this.newKegSender.emit(newKegToAdd);
  }
}
