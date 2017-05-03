import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div>
      <label>Enter Name:</label>
      <input class="form-control" #newName>
    </div>
    <div>
      <label>Enter Type:</label>
      <input class="form-control" #newType>
    </div>
    <div>
      <label>Enter Price:</label>
      <input class="form-control" #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input class="form-control"#newAlcoholContent>
    </div>
    <div>
      <label>Enter Image URL:</label>
      <input class="form-control" #newImage>
    </div>
    <button type="button" class="btn btn-default" (click)="submitForm(newName.value, newType.value, newPrice.value, newAlcoholContent.value, newImage.value); newName.value=''; newType.value=''; newPrice.value=''; newAlcoholContent.value=''; newImage.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, type: string, price: number, alcoholContent: number, image: string) {
    var newKegToAdd: Keg = new Keg(name, type, price, alcoholContent, image);
    this.newKegSender.emit(newKegToAdd);
  }
}
