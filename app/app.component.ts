import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Portland Tap Room</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pintSender)="pintSold($event)"></keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <hr>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Mike Saw Sasquatch", "Blonde Ale", 5, 5),
    new Keg("API", "American IPA", 7, 6)
  ];
  selectedKeg = null;

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(selectedKegFromList) {
    this.selectedKeg = selectedKegFromList;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  pintSold(pintSold: Keg) {
    if(pintSold.pints > 0) {
      if(pintSold.pints <= 10) {
        alert("You need to tap a new keg yo!");
      }
      pintSold.pints -= 1;
    }
  }


}
